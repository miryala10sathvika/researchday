import React from 'react';
import { cookies } from 'next/headers';
import SubmissionDetails from 'components/submissionDetails';
import { Grid, Box, Button } from '@mui/material';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000/api';

async function fetchSubmissionDetails(submissionId, cookieHeader) {
    const res = await fetch(`${BACKEND_URL}/submission/${submissionId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            cookie: cookieHeader,
        },
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch submission details');
    }

    return res.json();
}

export default async function Page({ params }) {
    const { id } = params;

    // Get cookies for authentication
    const cookeys = cookies();
    const cookieHeader = cookeys
        .getAll()
        .map((cookie) => `${cookie.name}=${cookie.value}`)
        .join('; ');

    // Fetch submission details
    let submission = null;
    try {
        submission = await fetchSubmissionDetails(id, cookieHeader);
    } catch (error) {
        return <div>Error: {error.message}</div>;
    }

    // Render the client-side component and pass necessary data
    return (
        <>
            <SubmissionDetails submission={submission} />
        </>
    );
}
