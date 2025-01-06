import NewForm from 'components/newForm';
import { redirect } from 'next/navigation';
import { getUser, getSubmissionByRoll } from 'utils/verification';


export default async function NewSubmissionPage() {
    const user = await getUser();
    if (!user) {
      return redirect('/api/login');
    }

    const submission = await getSubmissionByRoll(user);
    if (submission) {
      redirect('/applications');
    }

    return <NewForm user={user} />;
}
