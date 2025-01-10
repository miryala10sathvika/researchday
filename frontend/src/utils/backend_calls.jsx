import { cookies } from "next/headers";

const BACKEND_URL = "http://backend:8000/api";

export async function getImportantDates() {
  const importantDatesResponse = await fetch(`${BACKEND_URL}/important-dates`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (importantDatesResponse.ok) {
    const importantDates = await importantDatesResponse.json();
    if (importantDates) {
      return importantDates;
    }
  }

  return [];
}

export async function getAnnouncements() {
  const announcementsResponse = await fetch(`${BACKEND_URL}/announcements`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (announcementsResponse.ok) {
    const announcements = await announcementsResponse.json();
    if (announcements) {
      return announcements;
    }
  }

  return [];
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
