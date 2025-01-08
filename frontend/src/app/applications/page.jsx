import ApplicationsClient from "components/applicationsClient";
import { redirect } from "next/navigation";
import { Box, Button } from "@mui/material";
import Link from "next/link";
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
      {admins.includes(user.email) && (
        <Link href="/applications/submissions" passHref>
          <Button variant="contained" color="primary" sx={{ mt: 10 }}>
            View all Submissions
          </Button>
        </Link>
      )}
      <ApplicationsClient submitted={submissions} user={user} />
    </Box>
  );
}
