import { redirect } from "next/navigation";
import SubmissionsTable from "components/submissionsTable";

import { getUser, getSubmissions } from "utils/verification";

const AUTHORIZED_EMAILS = [
  "dileepkumar.adari@students.iiit.ac.in",
  "adaridileep@students.iiit.ac.in",
];

export default async function NewSubmissionPage() {
  const user = await getUser();

  if (!user) {
    return redirect("/api/login");
  }

  // Check if the user is authorized
  if (!AUTHORIZED_EMAILS.includes(user.email)) {
    return redirect("/applications");
  }

  // Fetch user submissions
  const submissions = await getSubmissions(user);

  return <SubmissionsTable user={user} submissions={submissions} />;
}
