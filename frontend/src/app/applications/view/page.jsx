'use client';

import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper,
  Grid,
  Divider,
  Button
} from '@mui/material';
import { useSearchParams } from 'next/navigation';

export default function View() {
  const [application, setApplication] = useState(null);
  const searchParams = useSearchParams();
  const applicationId = searchParams.get('id');

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch(`/api/applications/${applicationId}`);
        const data = await response.json();
        setApplication(data);
      } catch (error) {
        console.error('Error fetching application:', error);
      }
    };

    if (applicationId) {
      fetchApplication();
    }
  }, [applicationId]);

  if (!application) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Loading application details...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Application Details
        </Typography>
        
        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="primary">Id</Typography>
            <Typography variant="body1" paragraph>{application.id}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" color="primary">Name</Typography>
            <Typography variant="body1" paragraph>{application.name}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" color="primary">Title</Typography>
            <Typography variant="body1" paragraph>{application.title}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" color="primary">Abstract</Typography>
            <Typography variant="body1" paragraph>{application.abstract}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" color="primary">Authors</Typography>
            <Typography variant="body1" paragraph>{application.authors}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" color="primary">Uploaded Paper</Typography>
            {application.file && (
              <Button 
                variant="contained" 
                href={application.file}
                target="_blank"
                sx={{ mt: 1 }}
              >
                View Paper
              </Button>
            )}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" color="primary">Proof of Acceptance</Typography>
            {application.proofOfAcceptance && (
              <Button 
                variant="contained"
                href={application.proofOfAcceptance}
                target="_blank"
                sx={{ mt: 1 }}
              >
                View Proof
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
