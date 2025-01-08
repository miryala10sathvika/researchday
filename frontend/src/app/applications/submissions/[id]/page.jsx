import React from "react";
import SubmissionDetails from "components/submissionDetails";

import { getUser, getAdmins } from "utils/verification";
import { getSubmissionById } from "utils/backend_calls";

export default async function Page({ params }) {
  const submissionId = await params?.id;

  const user = await getUser();
  const admins = await getAdmins();

  if (!user) {
    return redirect("/api/login");
  }

  // Check if the user is authorized
  if (!admins.includes(user.email)) {
    return redirect("/applications");
  }
  const submission = await getSubmissionById(submissionId);

  if (!submission) {
    return <div>Submission not found</div>;
  }

  return <SubmissionDetails submission={submission} />;
}
