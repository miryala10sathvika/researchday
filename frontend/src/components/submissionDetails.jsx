'use client'; // Client component

import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Card, CardContent, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SubmissionDetails({ submission }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [currentAction, setCurrentAction] = useState(null);
    const [dialogType, setDialogType] = useState('');
    const [formattedDate, setFormattedDate] = useState(null);
    const [comments, setComments] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (submission?.submitted_at) {
            const date = new Date(submission.submitted_at);
            setFormattedDate(date.toLocaleString());
        }
    }, [submission.submitted_at]);

    const handleApprove = () => {
        setCurrentAction('Approve');
        setDialogType('approve');
        setOpenDialog(true);
    };

    const handleReject = () => {
        setCurrentAction('Reject');
        setDialogType('reject');
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        setCurrentAction(null);
        setDialogType('');
        setComments(''); // Reset comments field
    };

    const handleDialogConfirm = async () => {
        try {
            const response = await fetch(`/api/submissions/${submission?.submission_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status: dialogType === "approve" ? "Approved" : "Rejected",
                    review_comments: comments,
                }),
                credentials: "include",
            });

            const result = await response.json();

            if (response.ok) {
                // Reload or update the state accordingly
                router.refresh();
            } else {
                alert(`Failed to ${currentAction.toLowerCase()} submission: ${result.detail}`);
            }
        } catch (error) {
            console.error("Error updating submission:", error);
            alert(`Failed to ${currentAction.toLowerCase()} submission.`);
        } finally {
            handleDialogClose();
        }
    };

    return (
        <>
            <Box sx={{ p: 4, ml: 4, mt: 4, height: '80vh' }}>
                {/* Buttons */}
                <Box display="flex" justifyContent="flex-end" sx={{ mt: 2, gap: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => router.push('/applications/submissions')}
                    >
                        Back
                    </Button>
                    {(submission.status === 'Pending' || submission.status === 'Rejected') && (
                        <Button
                            variant="contained"
                            color="success"
                            onClick={handleApprove}
                        >
                            Approve
                        </Button>
                    )}
                    {(submission.status === 'Pending' || submission.status === 'Approved') && (
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleReject}
                        >
                            Decline
                        </Button>
                    )}
                </Box>
                <Card sx={{ mt: 4, width: '60%', margin: 'auto' }}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Submission Details
                        </Typography>

                        <Grid container spacing={2} sx={{ ml: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Title:</Typography>
                                <Typography variant="body1">{submission.title}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Status:</Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color:
                                            submission.status === 'Pending'
                                                ? 'warning.main'
                                                : submission.status === 'Approved'
                                                    ? 'success.main'
                                                    : 'error.main',
                                    }}
                                >
                                    {submission.status}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Abstract:</Typography>
                                <Typography variant="body1">{submission.abstract}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Submitted At:</Typography>
                                <Typography variant="body1">
                                    {formattedDate || 'Loading...'}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Authors:</Typography>
                                <Typography variant="body1">{submission.authors}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Paper Pdf:</Typography>
                                <a href={`/api/get-pdf/paper/${submission.submission_id}`} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outlined" size="small">
                                        View Paper
                                    </Button>
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Presentation Type:</Typography>
                                <Typography variant="body1">{submission.is_poster ? 'Poster' : 'Paper'}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Acceptance Proof:</Typography>
                                <a href={`/api/get-pdf/proof/${submission.submission_id}`} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outlined" size="small">
                                        View Proof
                                    </Button>
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Review Comments:</Typography>
                                <Typography variant="body1">{submission.review_comments || 'None'}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
            {/* Confirmation Dialog */}
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>
                    Are you sure you want to {dialogType} this submission?
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2" gutterBottom>
                        This action will update the status of the submission.
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Review Comments"
                        variant="outlined"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        sx={{ mt: 2 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDialogConfirm} color="primary" disabled={!comments}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
