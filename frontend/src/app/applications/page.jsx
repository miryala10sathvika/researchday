import ApplicationsClient from "components/applicationsClient";
import { redirect } from "next/navigation";
import { Box } from "@mui/material";
import { getUser, getAdmins } from "utils/verification";
import { getSubmissionByRoll } from "utils/backend_calls";

export default async function ApplicationsPage() {
  const user = await getUser();
  const admins = await getAdmins();

  if (!user) {
    return redirect("/api/login");
  }

  const submissions = await getSubmissionByRoll(user);

  return (
    <Box
      sx={{
        m: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically if needed
      }}
    >
      <ApplicationsClient submitted={submissions} user={user} admins={admins} />
    </Box>
  );
}
