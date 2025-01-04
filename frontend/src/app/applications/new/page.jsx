import NewForm from 'components/newForm';
import { cookies } from 'next/headers';

export default async function NewSubmissionPage() {
  const cookeys = cookies();
  const cookieHeader = cookeys
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join('; ');

  const userResponse = await fetch(`${process.env.BACKEND_URL}/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      cookie: cookieHeader,
    },
    credentials: 'include', // Include cookies in request
  });

  if (!userResponse.ok) {
    return <div>Failed to fetch user data</div>;
  }

  const userData = await userResponse.json();
  return <NewForm user={userData.user} />;
}
