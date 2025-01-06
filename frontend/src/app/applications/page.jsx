import ApplicationsClient from 'components/applicationsClient';
import {  redirect } from 'next/navigation';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { getUser, getSubmissionByRoll } from 'utils/verification';

const AUTHORIZED_EMAILS = [
  'dileepkumar.adari@students.iiit.ac.in',
  'adaridileep@students.iiit.ac.in',
];

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000/api';

export default async function ApplicationsPage() {
    const user = await getUser();

    if (!user) {
      return redirect('/api/login');
    }

    const submissions = await getSubmissionByRoll(user);


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
            sx={{ mt: 10 }}
          >
            View all Submissions
          </Button>
        </Link>
      )}
      <ApplicationsClient submitted={submissions} user={user} />
    </Box>
    );

}
