"use client";

import React, { useState } from "react";
import {
    Typography,
    Box,
    Button,
    Modal,
    Checkbox,
    FormControlLabel,
    FormGroup,
} from "@mui/material";


export default function DownloadCsv({ submissions }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState({
        pending: false,
        approved: false,
        rejected: false,
    });


    const handleDownloadResponses = () => {
        setModalOpen(true);
    };

    const handleConfirmDownload = () => {
        const escapeCsvField = (field) => {
            if (typeof field !== "string") {
                return field;
            }

            return `"${field.replace(/"/g, '""')}"`; // Escape double quotes and wrap in double quotes
        };

        const filteredData = submissions.filter((submission) =>
            (selectedTypes.pending && ["Pending", "Revision Requested"].includes(submission.status)) ||
            (selectedTypes.approved && submission.status === "Accepted") ||
            (selectedTypes.rejected && submission.status === "Rejected")
        );

        const csvContent =
            "data:text/csv;charset=utf-8," +
            ["Student Roll No, Email, Title, Abstract, Author, Co-Authors, Lab, Advisor(s), Forum, Forum Level, Acceptance Date, Submitted On, Submission Type, Status, Uploaded Paper, Proof of Acceptance, Presentation Type, Review Comments"]
                .concat(
                    filteredData.map((item) =>
                        [
                            escapeCsvField(item?.user_roll_no),
                            escapeCsvField(item?.email),
                            escapeCsvField(item?.title),
                            escapeCsvField(item?.abstract),
                            escapeCsvField(item?.author),
                            escapeCsvField(item?.co_author_names || "-"),
                            escapeCsvField(item?.lab_name),
                            escapeCsvField(item?.advisor_name),
                            escapeCsvField(item?.forum_name),
                            escapeCsvField(item?.forum_level),
                            escapeCsvField(item?.acceptance_date),
                            escapeCsvField(item?.submitted_at),
                            escapeCsvField(item?.submission_type),
                            escapeCsvField(item?.status),
                            escapeCsvField(`https://research.iiit.ac.in/api/get-pdf/paper/${item?.user_roll_no}_paper`),
                            escapeCsvField(`https://research.iiit.ac.in/api/get-pdf/proof/${item?.user_roll_no}_proof`),
                            item?.approved ? escapeCsvField(item?.is_poster ? "Poster" : "Paper") : "N/A",
                            item?.approved ? escapeCsvField(item?.review_comments) : "N/A"
                        ].join(",")
                    )
                )
                .join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "submissions.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setModalOpen(false);
    };


    const handleCheckboxChange = (event) => {
        setSelectedTypes({
            ...selectedTypes,
            [event.target.name]: event.target.checked,
        });
    };
    return (
        <>
            <Button variant="contained" size="small" onClick={handleDownloadResponses}>
                Download Responses
            </Button>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: "8px",
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Select Submission Types to Download
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="pending"
                                    checked={selectedTypes.pending}
                                    onChange={handleCheckboxChange}
                                />
                            }
                            label="Pending"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="approved"
                                    checked={selectedTypes.approved}
                                    onChange={handleCheckboxChange}
                                />
                            }
                            label="Approved"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="rejected"
                                    checked={selectedTypes.rejected}
                                    onChange={handleCheckboxChange}
                                />
                            }
                            label="Rejected"
                        />
                    </FormGroup>
                    <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                        <Button variant="contained" onClick={handleConfirmDownload}>
                            Confirm
                        </Button>
                        <Button variant="outlined" onClick={() => setModalOpen(false)}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}