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

export async function getAdmins() {
  const adminsResponse = await fetch(`${BACKEND_URL}/admins`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => {
    console.log("Failed to fetch admins:", err);
    return { ok: false, statusText: err };
  });

  if (!adminsResponse.ok) {
    console.error("Failed to fetch admins:", adminsResponse.statusText);
    return null;
  }

  const { admins } = await adminsResponse.json();

  if (!admins) {
    return null;
  }

  return admins;
}