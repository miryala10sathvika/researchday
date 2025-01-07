import { cookies } from "next/headers";

const BACKEND_URL = "http://backend:8000/api";

export async function getUser() {
  const cookeys = await cookies();
  const cookieHeader = cookeys
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");

  const userResponse = await fetch(`${BACKEND_URL}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cookie: cookieHeader,
    },
    credentials: "include",
  }).catch((err) => {
    console.log("Failed to fetch user data:", err);
    return { ok: false, statusText: err };
  });

  if (!userResponse.ok) {
    // console.error("Failed to fetch user data:", userResponse.statusText);
    return null;
  }

  const { user } = await userResponse.json();

  if (!user) {
    return null;
  }

  return user;
}

export async function getSubmissionByRoll(user) {
  const cookeys = await cookies();
  const cookieHeader = cookeys
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");
  const submissionsResponse = await fetch(
    `${BACKEND_URL}/submissions/${user?.roll}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie: cookieHeader,
      },
      credentials: "include",
    }
  );

  if (submissionsResponse.ok) {
    const submissions = await submissionsResponse.json();
    if (submissions) {
      return submissions;
    }
  }

  return null;
}

export async function getSubmissionById(id) {
  const cookeys = await cookies();
  const cookieHeader = cookeys
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");
  const submissionsResponse = await fetch(`${BACKEND_URL}/submission/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cookie: cookieHeader,
    },
    credentials: "include",
  });
  if (submissionsResponse.ok) {
    const submissions = await submissionsResponse.json();
    if (submissions) {
      return submissions;
    }
  }
  return null;
}

export async function getSubmissions() {
  const cookeys = await cookies();
  const cookieHeader = cookeys
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");
  const submissionsResponse = await fetch(`${BACKEND_URL}/submissions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cookie: cookieHeader,
    },
    credentials: "include",
  });
  if (submissionsResponse.ok) {
    const submissions = await submissionsResponse.json();
    if (submissions) {
      return submissions;
    }
  }
  return [];
}
