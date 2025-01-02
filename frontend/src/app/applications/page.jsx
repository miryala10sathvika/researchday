import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function Applications() {
    return (
        <Box
            sx={{
                padding: '40px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                minHeight: '100vh',
            }}
        >

            {/* Application Status */}
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
                    height: 'auto',
                    overflow: 'hidden'
                }}
            >
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#333' }}
                >
                    Application Status
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
                        gap: '8px'
                    }}
                >
                    Current Status: <strong>Not Submitted</strong>
                </Typography>
            </Box>

            {/* Guidelines Section */}
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
                    sx={{ fontWeight: 'bold', color: '#333', marginBottom: '20px' }}
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
                        <li>
                            Submit your most recent published paper for the presentation.
                        </li>
                        <li>Ensure all information is accurate and up-to-date.</li>
                        <li>
                            Upload required documents in PDF, PNG, JPG, or JPEG formats only.
                        </li>
                        <li>Review your application before final submission.</li>
                    </Typography>
                </Box>
            </Box>

            {/* Buttons */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '40px',
                    marginTop: '50px',
                }}
            >
                <Link href="applications/new" passHref>
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
                <Link href="applications/view" passHref>
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
                        View Submission
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}
