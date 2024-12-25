import { Box } from "@mui/material";
import Link from 'next/link';

export default function Home() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden", margin: "auto" }}>
      <Box display={"flex"} justifyContent={"space-between"} mt={1}>
        <Box
          flex={1}
        >
          <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, margin: '20px' }}>
            <h>Welcome to the 7th ISCLS 2024!</h>
            <p>
              The 7th International Sanskrit Computational Linguistics Symposium is scheduled on
              <strong> February 15-17, 2024</strong> and will be held at <strong>Auroville, Puducherry, India</strong>.
            </p>
            <p>
              ISCLS is a forum for original and unpublished research on various aspects of Computational
              Linguistics and Digital Humanities related to Sanskrit (Classical and Vedic), Prakrit, Pali,
              Buddhist Hybrid Sanskrit, etc.
            </p>
            <p>
              The proceedings of the symposium are now available.{' '}
              <Link href="/proceedings.pdf">
                <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>PDF</span>
              </Link>
            </p>
            <p>
              Read about the history of ISCLS{' '}
              <Link href="/history">
                <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>here</span>
              </Link>.
            </p>
            <p>
              Read about the logo of ISCLS{' '}
              <Link href="/logo">
                <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>here</span>
              </Link>.
            </p>
            <h2>Contact</h2>
            <p>
              If you have any problems or questions, please contact us via e-mail at:{' '}
              <a href="mailto:iscls@outlook.com" style={{ color: 'blue', textDecoration: 'underline' }}>
                iscls@outlook.com
              </a>
            </p>
          </div>
        </Box>
        <Box flex={1}>
          <h1 style={{ textAlign: "center", marginTop: 100 }} >
            News and important dates here
          </h1>
      </Box>
      </Box>
    </Box>

  );
}
