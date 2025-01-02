'use client';

import { useState } from 'react';
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Paper, 
  FormControl, 
  FormHelperText, 
  InputLabel 
} from '@mui/material';
import { useRouter } from 'next/navigation';

export default function New() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    authors: '',
  });

  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState({ paper: null, proof: null });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const allowedFileTypes = {
    paper: ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'],
    proof: ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'],
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.abstract) newErrors.abstract = 'Abstract is required';
    if (!formData.authors) newErrors.authors = 'Authors are required';
    if (!files.paper) newErrors.paper = 'Paper file is required';
    if (!files.proof) newErrors.proof = 'Proof of acceptance is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleFileChange = (type) => (e) => {
    const file = e.target.files[0];
    if (file && allowedFileTypes[type].includes(file.type)) {
      setFiles((prev) => ({ ...prev, [type]: file }));
    } else {
      alert('Please upload a valid file type (PDF, PNG, JPG, JPEG)');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const finalData = {
      ...formData,
      file: files.paper,
      proofOfAcceptance: files.proof,
    };

    try {
      const response = await submitApplication(finalData);
      const { id } = response;
      
      alert('Application submitted successfully!');
      router.push(`/applications/view?id=${id}`);
    } catch (error) {
      alert('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        p: 6,
        maxWidth: 1000,
        mx: 'auto',
      }}
    >
      <Paper 
        elevation={0}
        sx={{
          p: 6,
          borderRadius: 4,
        }}
      >

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal" error={!!errors.title}>
            <TextField
              id="title"
              value={formData.title}
              onChange={handleChange('title')}
              label="Title"
              variant="outlined"
              sx={{ 
                fontSize: '1.2rem',
                '& .MuiOutlinedInput-root': {
                  height: '60px'
                }
              }}
            />
            <FormHelperText>{errors.title}</FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.abstract}>
            <TextField
              id="abstract"
              value={formData.abstract}
              onChange={handleChange('abstract')}
              label="Abstract"
              variant="outlined"
              multiline
              rows={4}
              sx={{ fontSize: '1.2rem' }}
            />
            <FormHelperText>{errors.abstract}</FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.authors}>
            <TextField
              id="authors"
              value={formData.authors}
              onChange={handleChange('authors')}
              label="Authors"
              variant="outlined"
              sx={{ fontSize: '1.2rem' }}
            />
            <FormHelperText>{errors.authors}</FormHelperText>
          </FormControl>

          <Box sx={{ mt: 3 }}>
            <FormControl fullWidth error={!!errors.paper}>
              <input
                accept=".pdf,.png,.jpg,.jpeg"
                type="file"
                onChange={handleFileChange('paper')}
                style={{
                  padding: '10px 0',
                  fontSize: '1rem',
                }}
              />
              <FormHelperText>{errors.paper}</FormHelperText>
            </FormControl>
            <Typography variant="caption" display="block" gutterBottom>
              Upload Paper (PDF, PNG, JPG, JPEG)
            </Typography>
          </Box>

          <Box sx={{ mt: 3 }}>
            <FormControl fullWidth error={!!errors.proof}>
              <input
                accept=".pdf,.png,.jpg,.jpeg"
                type="file"
                onChange={handleFileChange('proof')}
                style={{
                  padding: '10px 0',
                  fontSize: '1rem',
                }}
              />
              <FormHelperText>{errors.proof}</FormHelperText>
            </FormControl>
            <Typography variant="caption" display="block" gutterBottom>
              Upload Proof of Acceptance (PDF, PNG, JPG, JPEG)
            </Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 4,
              p: 2,
              fontSize: '1.2rem',
              fontWeight: 700,
              backgroundColor: 'var(--theme-bg-color)',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#0056b3',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
              },
            }}
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
