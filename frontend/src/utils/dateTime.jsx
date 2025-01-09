"use client";

export function getDatetimeformat(dateTimeString) {
  const date = new Date(dateTimeString);
  if (isNaN(date)) {
    console.error("Invalid date format:", dateTimeString);
    return { dateString: "Invalid Date", timeString: "Invalid Time" };
  }

  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const dateString = new Intl.DateTimeFormat("en-GB", options)
    .format(date)
    .split("/")
    .reverse()
    .join("-"); // Format to YYYY-MM-DD

  const timeString = date.toTimeString().substring(0, 5); // HH:mm
  return { dateString, timeString };
}
