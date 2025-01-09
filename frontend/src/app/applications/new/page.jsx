import NewForm from "components/newForm";
import { redirect } from "next/navigation";
import { getUser } from "utils/verification";
import { getSubmissionByRoll, getImportantDates } from "utils/backend_calls";

export default async function NewSubmissionPage() {
  const user = await getUser();
  if (!user) {
    return redirect("/api/login");
  }

  const submission = await getSubmissionByRoll(user);
  if (submission) {
    redirect("/applications");
  }

  const importantDates = await getImportantDates();
  const presenter_registration_deadline = new Date(importantDates.presenter_registration_deadline);

  return <NewForm user={user} deadline={presenter_registration_deadline} />;
}
