import { getUser, getAdmins } from "utils/verification";
import AddAnnouncementForm from "components/AddAnnouncementForm";
import { Box } from "@mui/material";
import { redirect } from "next/navigation";

export default async function AddAnnouncementPage() {
  const user = await getUser();
  const admins = await getAdmins();

  if (!user || !admins.includes(user.email)) {
    return redirect("/404");
  }

  return (
    <Box
      sx={{
        m: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AddAnnouncementForm />
    </Box>
  );
}
