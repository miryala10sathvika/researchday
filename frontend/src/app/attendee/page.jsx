import { redirect } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { getUser } from "utils/verification";
import { getSubmissionByRoll } from "utils/backend_calls";

export default async function ApplicationsPage() {
  const user = await getUser();

  if (!user) {
    return redirect("https://forms.office.com/r/X85FrAgyuS");
  }

  const submissions = await getSubmissionByRoll(user);
  if (!submissions) {
    return redirect("https://forms.office.com/r/X85FrAgyuS");
  }

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
      <Typography variant="h4" gutterBottom mt={15}>
        You have already registered as a presenter.
      </Typography>
      <Typography variant="h6" gutterBottom mb={20}>
        You don't need to register as an attendee.
      </Typography>
    </Box>
  );
}
