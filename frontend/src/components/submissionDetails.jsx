'use client';  // Client component

import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function SubmissionDetails({ submission }) {
    const [formattedDate, setFormattedDate] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (submission?.submitted_at) {
            const date = new Date(submission.submitted_at);
            setFormattedDate(date.toLocaleString());
        }
    }, [submission.date]);

    const handleApprove = async () => {
        const reviews = prompt('Please enter the reviews:');
        try {
            await updateSubmissionStatus(submission.submission_id, 'Approved', reviews);
            router.push(`/applications/submissions/${submission.submission_id}`);
        } catch (error) {
            console.error('Error approving submission:', error);
        }
    };

    const handleReject = async () => {
        const reason = prompt('Please enter the reason for rejection:');
        try {
            await updateSubmissionStatus(submission.submission_id, 'Rejected', reason);
            router.push(`/applications/submissions/${submission.submission_id}`);
        } catch (error) {
            console.error('Error rejecting submission:', error);
        }
    };

    return (
        <Box sx={{ p: 4 }}>
            {/* Buttons */}
            <Box display="flex" justifyContent="flex-end" sx={{ mt: 2, gap: 2 }}>
                <Box display="flex" justifyContent="flex-start">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => router.push('/applications/submissions')}
                    >
                        Back
                    </Button>
                </Box>
                {(submission.status === 'Pending' || submission.status === 'Rejected') && (
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ marginRight: 2 }}
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
                        Reject
                    </Button>
                )}
            </Box>
            <Card sx={{ mt: 4 }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Submission Details
                    </Typography>

                    <Grid container spacing={2}>
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
                            <a href={submission.paper} target="_blank" rel="noopener noreferrer">
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
                            <a href={submission.acceptance_proof} target="_blank" rel="noopener noreferrer">
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
    );
}

async function updateSubmissionStatus(submissionId, status, msg) {
    const res = await fetch(`/api/submissions/${submissionId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status, review_comments: msg }),
    });

    if (!res.ok) {
        throw new Error('Failed to update submission status');
    }

    return res.json();
}
