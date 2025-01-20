"use client";

import { useState, useEffect } from "react";

export function getDatetimeformat(dateTimeString) {
  const [formattedDate, setFormattedDate] = useState({
    dateString: "",
    timeString: "",
  });

  useEffect(() => {
    const date = new Date(dateTimeString);

    if (isNaN(date)) {
      console.error("Invalid date format:", dateTimeString);
      setFormattedDate({
        dateString: "Invalid Date",
        timeString: "Invalid Time",
      });
      return;
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
      .join("-"); // Format to YYYY-MM-DD

    const timeString = new Intl.DateTimeFormat("en-IN", timeOptions).format(
      date
    );

    setFormattedDate({ dateString, timeString });
  }, [dateTimeString]);

  return formattedDate;
}
