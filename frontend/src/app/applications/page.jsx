import ApplicationsClient from 'components/applicationsClient';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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

    // Check if the user is authorized
    if (AUTHORIZED_EMAILS.includes(user.email)) {
      return redirect('/applications/submissions');
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

    return <ApplicationsClient submitted={submissions} user={user} />;

}
