import React from 'react';
import SubmissionDetails from 'components/submissionDetails';

import { getUser, getSubmissionById, getSubmissions } from "utils/verification";

const AUTHORIZED_EMAILS = [
  "dileepkumar.adari@students.iiit.ac.in",
  "adaridileep@students.iiit.ac.in",
];

export default async function Page({ params }) {
    const submissionId = await params?.id;

    const user = await getUser();

    if (!user) {
        return redirect('/api/login');
    }

    // Check if the user is authorized
    if (!AUTHORIZED_EMAILS.includes(user.email)) {
        return redirect("/applications");
    }
    const submission = await getSubmissionById(submissionId);

    if (!submission) {
        return <div>Submission not found</div>;
    }

    return (
        <>
            <SubmissionDetails submission={submission} />
        </>
    );
}
