import { redirect } from "next/navigation";
import SubmissionsTable from "components/submissionsTable";

import { getUser, getAdmins } from "utils/verification";
import { getSubmissions } from "utils/backend_calls";

export default async function NewSubmissionPage() {
  const user = await getUser();
  const admins = await getAdmins();

  if (!user) {
    return redirect("/api/login");
  }

  // Check if the user is authorized
  if (!admins.includes(user.email)) {
    return redirect("/applications");
  }

  // Fetch user submissions
  const submissions = await getSubmissions(user);

  return <SubmissionsTable user={user} submissions={submissions} />;
}
