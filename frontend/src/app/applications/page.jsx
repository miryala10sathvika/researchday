import ApplicationsClient from 'components/applicationsClient';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const authorized_mails = ['dilepkumar.adari@students.iiit.ac.in', 'adaridileep@students.iiit.ac.in'];

export default async function ApplicationsPage() {
    const cookeys = await cookies();
    const cookieHeader = cookeys
        .getAll()
        .map((cookie) => `${cookie.name}=${cookie.value}`)
        .join("; ");

    const userResponse = await fetch(`${process.env.BACKEND_URL || "http://localhost:8000/api"}/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'cookie': cookieHeader,
        },
        credentials: 'include', // Send cookies
    });

    if (!userResponse.ok) {
        return <div>Failed to fetch user data</div>;
    }

    const userData = await userResponse.json();
    const user = userData.user;

    if (user && authorized_mails.includes(user.email)) {
        redirect('/applications/submissions');
    }

    return <ApplicationsClient submitted={false} user={user} />;
}
