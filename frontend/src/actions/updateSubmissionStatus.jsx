import { cookies } from 'next/headers';
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000/api';

export async function updateSubmissionStatus(submissionId, status) {
    const cookeys = cookies();
    const cookieHeader = cookeys
      .getAll()
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join('; ');
    const res = await fetch(`${BACKEND_URL}/submissions/${submissionId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            cookie: cookieHeader,
        },
        body: JSON.stringify({ status }),
    });

    if (!res.ok) {
        throw new Error('Failed to update submission status');
    }

    return res.json();
}