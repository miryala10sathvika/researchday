'use client';

import { Box, Button, Typography, Paper, Grid, Divider } from '@mui/material';
import Link from 'next/link';

export default function ApplicationsClient({ submitted, user }) {
    // Default value if submitted array is empty
    const isSubmitted = submitted && submitted.length !== 0;

    return (
        <Box
            sx={{
                padding: '40px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                minHeight: '100vh',
            }}
        >
            {/* Application Status Card */}
            <Box
                sx={{
                    margin: '20px auto',
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '16px',
                    backgroundColor: '#fff',
                    maxWidth: '600px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#333' }}
                >
                    Your Application Status
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        color: '#555',
                        marginTop: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                    }}
                >
                    Current Status: <strong>{isSubmitted ? submitted.status : 'Not Submitted'}</strong>
                </Typography>
            </Box>

            {/* Application Details Section */}
            {isSubmitted && (
                <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            Application Details
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Grid container spacing={2} textAlign={'left'}>
                            {[
                                { label: 'Student Roll No', value: submitted.user_roll_no },
                                { label: 'Title', value: submitted.title },
                                { label: 'Abstract', value: submitted.abstract },
                                { label: 'Authors', value: submitted.authors },
                                { label: 'Registration Type', value: submitted.is_poster ? 'Poster' : 'Paper' },
                            ].map((detail, index) => (
                                <Grid item xs={12} key={index}>
                                    <Typography variant="subtitle1" color="primary">
                                        {detail.label}
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        {detail.value}
                                    </Typography>
                                </Grid>
                            ))}

                            <Grid item xs={12}>
                                <Typography variant="subtitle1" color="primary">
                                    Uploaded Paper
                                </Typography>
                                {submitted.file_url && (
                                    <Button
                                        variant="contained"
                                        href={submitted.file_url}
                                        target="_blank"
                                        sx={{ mt: 1 }}
                                    >
                                        View Paper
                                    </Button>
                                )}
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="subtitle1" color="primary">
                                    Proof of Acceptance
                                </Typography>
                                {submitted.acceptance_proof && (
                                    <Button
                                        variant="contained"
                                        href={submitted.acceptance_proof}
                                        target="_blank"
                                        sx={{ mt: 1 }}
                                    >
                                        View Proof
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            )}

            {/* Guidelines Section */}
            {!isSubmitted && (
                <Box
                    sx={{
                        margin: '40px auto',
                        maxWidth: '800px',
                        textAlign: 'left',
                    }}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            marginBottom: '20px',
                            textAlign: 'center',
                        }}
                    >
                        Guidelines to Apply
                    </Typography>
                    <Box sx={{ pl: 3 }}>
                        <Typography
                            variant="body1"
                            component="ul"
                            sx={{
                                listStyleType: 'disc',
                                fontSize: '1.2rem',
                                color: '#555',
                                lineHeight: 1.8,
                            }}
                        >
                            <li>Submit your most recent published paper for the presentation.</li>
                            <li>Ensure all information is accurate and up-to-date.</li>
                            <li>Upload required documents in PDF, PNG, JPG, or JPEG formats only.</li>
                            <li>Review your application before final submission.</li>
                        </Typography>
                    </Box>
                </Box>
            )}

            {/* Action Button */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '40px',
                    marginTop: '50px',
                }}
            >
                {!isSubmitted && (
                    <Link href="/applications/new" passHref>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                padding: '15px 50px',
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                borderRadius: '12px',
                                backgroundColor: 'var(--theme-bg-color)',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: 'var(--theme-bg-color)',
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.2s ease',
                            }}
                        >
                            Add New
                        </Button>
                    </Link>
                )}
            </Box>
        </Box>
    );
}
