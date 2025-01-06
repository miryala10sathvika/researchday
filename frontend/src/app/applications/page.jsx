import ApplicationsClient from 'components/applicationsClient';
import { cookies } from 'next/headers';
import {  redirect } from 'next/navigation';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

const AUTHORIZED_EMAILS = [
  'dileepkumar.adari@students.iiit.ac.in',
  'adaridileep@students.iiit.ac.in',
];

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000/api';

export default async function ApplicationsPage() {
    const cookeys = cookies();
    const cookieHeader = cookeys
      .getAll()
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join('; ');

    // Fetch user data
    const userResponse = await fetch(`${BACKEND_URL}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        cookie: cookieHeader,
      },
      credentials: 'include',
    });

    if (!userResponse.ok) {
      console.error('Failed to fetch user data:', userResponse.statusText);
      return <div>Failed to fetch user data</div>;
    }

    const { user } = await userResponse.json();

    if (!user) {
      return redirect('/api/login');
    }

    // Fetch user submissions
    const submissionsResponse = await fetch(`${BACKEND_URL}/submissions/${user.roll}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        cookie: cookieHeader,
      },
      credentials: 'include',
    });

    const submissions = submissionsResponse.ok
      ? await submissionsResponse.json()
      : [];

    return (
      <Box
      sx={{
        m: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically if needed
      }}
    >
      {AUTHORIZED_EMAILS.includes(user.email) && (
        <Link href="/applications/submissions" passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 4,
            }}
          >
            View all Submissions
          </Button>
        </Link>
      )}
      <ApplicationsClient submitted={submissions} user={user} />
    </Box>
    );

}
