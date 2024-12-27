import { Box, Typography, Paper } from "@mui/material";
import Image from 'next/image';

export default function About() {
  return (
    <Box sx={{ 
      width: "100%", 
      padding: { xs: 2, md: 4 }, 
      backgroundColor: "#ffffff",
      minHeight: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.05,  // Very light watermark effect
          overflow: 'hidden'
        }}
      >
        <img
          src="/assets/conference-concept.png"
          alt="Conference Concept"
          style={{
              objectFit: 'fill',
              width: '100%',
              height: '100%',
            } }
        />
      </Box>

      <Paper 
        elevation={3} 
        sx={{ 
          position: 'relative',  // Added to stay above background
          zIndex: 1,            // Added to stay above background
          padding: { xs: 2, md: 4 },
          borderRadius: 3,
          maxWidth: '1200px',
          width: "100%",
          background: "#ffffff",  // Changed to solid white
          transition: "all 0.3s ease",
          fontFamily: 'Lora, serif',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'  // Subtle shadow
        }}
      >
        {/* Title Section */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: 'Playfair Display, serif',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            color: 'var(--theme-bg-color)',
            textAlign: 'center',
            marginBottom: 4,
            letterSpacing: '-0.02em',
            '& span': {
              background: 'linear-gradient(45deg, var(--theme-bg-color), #3f51b5)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }
          }}
        >
          <span>Research Fest </span>
        </Typography>

        {/* Introduction Section - Now Centered */}
        <Box sx={{
          textAlign: 'center',
          animation: 'fadeIn 0.8s ease-in',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}>
          <Typography 
            variant="body1" 
            paragraph
            sx={{
              fontFamily: 'Lora, serif',
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: '#2c3e50',
              textAlign: 'center',
              borderLeft: 'none',
              borderBottom: '4px solid #3f51b5',
              paddingBottom: 3,
              margin: '20px auto',
              maxWidth: '800px',
              '&:hover': {
                borderBottom: '4px solid #f50057',
                transition: 'border-bottom 0.3s ease'
              }
            }}
          >
            Research Fest is event dedicated to celebrating research and innovation within our campus community. This initiative reflects the academic and intellectual culture that defines our institution, fostering an environment where ideas flourish, knowledge is shared, and collaborations thrive. The Research Fest is designed as a platform to inspire, engage, and connect students, creating opportunities for growth and intellectual exchange.
          </Typography>
        </Box>

        {/* Why Research Fest Section - With Image */}
        <Box sx={{ 
          marginTop: 6,
          textAlign: 'center',
          position: 'relative'
        }}>
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{
              fontFamily: 'Playfair Display, serif',
              position: 'relative',
              display: 'inline-block',
              color: 'var(--theme-bg-color)',
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: 4,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #3f51b5, transparent)',
              }
            }}
          >
            Why Research Fest?
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            padding: 2
          }}>
            {/* Content Section */}
            <Box sx={{
              flex: 1,
              '& ul': { 
                listStyleType: 'none',
                padding: 0,
                margin: '0 auto'
              }
            }}>
              <ul>
                <li>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      transition: 'all 0.3s ease',
                      padding: 2,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                      textAlign: 'left',
                      marginBottom: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(63, 81, 181, 0.1)',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <strong style={{ 
                      color: '#3f51b5', 
                      fontFamily: 'Playfair Display, serif',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}>
                      A Stage for Brilliance
                    </strong> 
                    Celebrate the achievements of talented researchers as they present their groundbreaking papers and innovative projects.
                  </Typography>
                </li>

                <li>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      transition: 'all 0.3s ease',
                      padding: 2,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                      textAlign: 'left',
                      marginBottom: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(63, 81, 181, 0.1)',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <strong style={{ 
                      color: '#3f51b5', 
                      fontFamily: 'Playfair Display, serif',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}>
                      A Hub for Collaboration
                    </strong> 
                    Connect with peers across disciplines, explore synergies, and create impactful partnerships that extend beyond the event.
                  </Typography>
                </li>

                <li>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      transition: 'all 0.3s ease',
                      padding: 2,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                      textAlign: 'left',
                      marginBottom: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(63, 81, 181, 0.1)',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <strong style={{ 
                      color: '#3f51b5', 
                      fontFamily: 'Playfair Display, serif',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}>
                      A Celebration of Curiosity
                    </strong> 
                    Recognize the invaluable contributions of our research community and fuel the passion for discovery in others.
                  </Typography>
                </li>

                <li>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      transition: 'all 0.3s ease',
                      padding: 2,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                      textAlign: 'left',
                      marginBottom: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(63, 81, 181, 0.1)',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <strong style={{ 
                      color: '#3f51b5', 
                      fontFamily: 'Playfair Display, serif',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}>
                      A Learning Ground
                    </strong> 
                    Gain hands-on experience through a professional conference-like environment, equipping you for future academic endeavors.
                  </Typography>
                </li>
              </ul>
            </Box>

            {/* Image Section - Smaller size */}
            <Box sx={{
              flex: 1,
              position: 'relative',
              height: { xs: '300px', md: '400px' },
              maxWidth: { xs: '100%', md: '450px' },
              width: '100%',
              margin: '0 auto',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              transition: 'all 0.4s ease',
              background: '#f8f9fa',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 15px 40px rgba(63, 81, 181, 0.15)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.01) 0%, rgba(63, 81, 181, 0.05) 100%)',
                zIndex: 1
              }
            }}>
              <img
                src="/assets/conference-concept.png"
                alt="Conference Concept"
                style={{
                  width: '100%',
                  objectFit: 'fill',
                }}
              />
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  linear-gradient(
                    180deg, 
                    rgba(255,255,255,0) 0%,
                    rgba(255,255,255,0.03) 40%,
                    rgba(63, 81, 181, 0.1) 100%
                  )
                `,
                zIndex: 1,
                opacity: 0.8,
                transition: 'opacity 0.3s ease',
                '&:hover': {
                  opacity: 0.6
                }
              }} />
            </Box>
          </Box>
        </Box>

        {/* What to Expect Section - Now Centered */}
        <Box sx={{ 
          marginTop: 6,
          textAlign: 'center',
          '& ul': { 
            listStyleType: 'none',
            padding: 0,
            maxWidth: '800px',
            margin: '0 auto'
          }
        }}>
          <Typography 
            variant="h5" 
            component="h2"
            sx={{
              fontFamily: 'Playfair Display, serif',
              position: 'relative',
              display: 'inline-block',
              color: 'var(--theme-bg-color)',
              fontSize: '2rem',
              fontWeight: 600,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #3f51b5, transparent)',
              }
            }}
          >
            What to Expect
          </Typography>
          
          <ul>
            <li>
              <Typography 
                variant="body1" 
                paragraph
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.3s ease',
                  padding: 2,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  textAlign: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(63, 81, 181, 0.1)',
                    transform: 'scale(1.02)',
                    boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <strong style={{ 
                color: '#3f51b5', 
                fontFamily: 'Playfair Display, serif',
                display: 'block',  // Added to force next line
                marginBottom: '0.5rem'  // Added spacing between title and description
              }}>
                  Paper Presentations
                </strong> 
                Dive deep into impactful research as participants present their published or accepted papers, sparking insightful discussions.
              </Typography>
            </li>
            <li>
              <Typography 
                variant="body1" 
                paragraph
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.3s ease',
                  padding: 2,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  textAlign: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(63, 81, 181, 0.1)',
                    transform: 'scale(1.02)',
                    boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
                  }
                }}
              >
               <strong style={{ 
                color: '#3f51b5', 
                fontFamily: 'Playfair Display, serif',
                display: 'block',  // Added to force next line
                marginBottom: '0.5rem'  // Added spacing between title and description
              }}>
                  Poster Sessions
                </strong> 
                Experience visually engaging presentations that bring research to life, offering a chance to interact and exchange ideas.
              </Typography>
            </li>
          </ul>
        </Box>

        {/* Who Can Join Section - Now Centered */}
        <Box sx={{ 
          marginTop: 6,
          textAlign: 'center',
          animation: 'fadeIn 0.8s ease-out',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}>
          <Typography 
            variant="h5" 
            component="h2"
            sx={{
              fontFamily: 'Playfair Display, serif',
              position: 'relative',
              display: 'inline-block',
              color: 'var(--theme-bg-color)',
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: 3,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #3f51b5, transparent)',
              }
            }}
          >
            Who Can Join?
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{
              fontFamily: 'Lora, serif',
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: '#2c3e50',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              padding: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(63, 81, 181, 0.1)',
                transform: 'scale(1.02)',
                boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
              }
            }}
          >
            This event is open to research students from Dual Degree, Masters, and PhD programs across all research centers. While paper presentations are reserved for students with accepted or published papers, everyone, including undergraduates, is welcome to attend, network, and draw inspiration.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}