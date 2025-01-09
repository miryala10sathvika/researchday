"use client";

export function getDatetimeformat(dateTimeString) {
  const date = new Date(dateTimeString);

  if (isNaN(date)) {
    console.error("Invalid date format:", dateTimeString);
    return { dateString: "Invalid Date", timeString: "Invalid Time" };
  }

  // Options for formatting the date in IST
  const dateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Kolkata",
  };
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  };

  // Format date and time
  const dateString = new Intl.DateTimeFormat("en-IN", dateOptions)
    .format(date)
    .split("/")
    .reverse()
    .join("-"); // Format to YYYY-MM-DD

  const timeString = new Intl.DateTimeFormat("en-IN", timeOptions)
    .format(date)
    .replace(/:\d{2}$/, ""); // HH:mm (removes seconds if present)

  return { dateString, timeString };
}
