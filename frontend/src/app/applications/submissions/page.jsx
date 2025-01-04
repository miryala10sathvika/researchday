import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SubmissionsTable from "components/submissionsTable";

const AUTHORIZED_EMAILS = [
  "dileepkumar.adari@students.iiit.ac.in",
  "adaridileep@students.iiit.ac.in",
];

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000/api";

export default async function NewSubmissionPage() {
  const cookeys = cookies();
  const cookieHeader = cookeys
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");

  // Fetch user data
  const userResponse = await fetch(`${BACKEND_URL}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cookie: cookieHeader,
    },
    credentials: "include",
  });

  if (!userResponse.ok) {
    console.error("Failed to fetch user data:", userResponse.statusText);
    return <div>Failed to fetch user data</div>;
  }

  const { user } = await userResponse.json();

  if (!user) {
    return redirect("/api/login");
  }

  // Check if the user is authorized
  if (!AUTHORIZED_EMAILS.includes(user.email)) {
    return redirect("/applications");
  }

  // Fetch user submissions
  const submissions = await fetch(`${BACKEND_URL}/submissions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cookie: cookieHeader,
    },
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Failed to fetch user submissions:", error);
      return [];
    });

    console.log(submissions);

  return <SubmissionsTable user={user} submissions={submissions} />;
}
