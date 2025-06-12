import { Box, Typography, IconButton } from '@mui/material';
import { keyframes } from '@emotion/react';
import { AboutImages } from '../../assets';
import AnimatedText from '../../Components/Inputs/AnimatedText';
import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube
} from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';

const pop = keyframes`
  0% { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
`;

const slideLeft = keyframes`
  0% { opacity: 0; transform: translateX(-40px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const slide = keyframes`
  0% { opacity: 0; transform: translateX(4em); }
  100% { opacity: 1; transform: translateX(0); }
`;

export default function TreesCard() {
  return (
    <Box
      sx={{
        background: 'white', // Set background to black
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
        flexDirection: 'column',
      }}
    >
      <Box>
        <AnimatedText

          sx={{
            color: "#000",
            mb: 4
          }}
        >
          Our Team
        </AnimatedText>
      </Box>
      <Box
        sx={{
          width: { xs: '92vw', md: '95vw', lg: '75vw' },
          height: '80vh',
          position: 'relative',
          overflow: 'hidden',
          border: '8px solid',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'column', lg: 'row' }, // xs and md: column, lg: row
          justifyContent: 'center',
          alignItems: 'center',
          background: 'black', // Set inner box background to black
          borderImage:
            'linear-gradient(-50deg, black, #ad0505, black, #ad0505) 1',
          transition: '0.3s ease-in-out',
          animation: `${pop} 0.7s ease-out backwards`,
          '&:hover .overlay': {
            transform: 'translateX(-50vw) ',
          },
          '&:hover .overlay-content': {
            opacity: 0,
            pointerEvents: 'none',
            transition: 'opacity 0.3s ease-in-out',
          },
          '&:hover .image-content': {
            width: { xs: '100vw', md: '100vw', lg: '25vw' },
            transform: { xs: 'none', md: 'none', lg: 'scale(1.1)' }, // Only apply zoom/move on lg
            transition: 'width 0.3s ease-in-out, transform 0.3s ease-in-out',
          },
          '&:hover .dots': {
            transform: 'translateX(1rem)',
          },
          '&:hover .dot': {
            background: 'white',
          },
        }}
      >
        {/* Overlay */}
        <Box
          className="overlay"
          sx={{
            position: 'relative',
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: '1rem',
            background: 'black', // Set overlay background to black
            zIndex: 2,
            transition: '0.4s ease-in-out',
          }}
        >
          {/* Overlay Content */}
          <Box
            className="overlay-content"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'start',
              width: '40%',
              height: '100%',
              paddingLeft: '0.5rem',
              border: '3px solid',
              borderImage:
                'linear-gradient(to bottom, #aea724 5%, forestgreen 35% 65%, #aea724 95%) 0 0 0 100%',
              // transition: '0.3s ease-in-out 0.2s',
              zIndex: 3,
              animation: `${slideLeft} 0.7s 0.6s ease-out backwards`,
              opacity: 1,
              transition: 'opacity 0.3s ease-in-out',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                // fontSize: '2.25vmin5,
                textAlign: 'start',
                color: 'white', // Set text color to black
                animation: `${slideLeft} 0.7s 1.2s ease-out backwards, ${pop} 0.7s 1.2s ease-out backwards`,
              }}
            >
             Meet Our CEO

            </Typography>

            <Typography
            variant="h1"
              sx={{
                // fontSize: '5.25vmin',
                color: 'white', // Set text color to black
                mb: '2.5rem',
                width: '100%',
                textAlign: 'start',
                animation: `${slideLeft} 0.7s 1.5s ease-out backwards, ${pop} 0.7s 1.5s ease-out backwards`,
              }}
            >
              Rajiv Williams 
            </Typography>
          </Box>

          {/* Background Image (expands on hover) */}
          <Box
            className="image-content"
            sx={{
              position: { xs: 'static', md: 'static', lg: 'absolute' },
              top: 0,
              right: 0,
              width: { xs: '100vw', md: '100vw', lg: '38vw' },
              height: { xs: '200px', md: '100%', lg: '100%' },
              backgroundImage: `url(${AboutImages.team})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: '0.3s ease-in-out',
              zIndex: 1,
              animation: `${slide} 0.7s 1.5s ease-out backwards`,
            }}
          />

        </Box>

        {/* Text Section */}
        <Box
          className="text"
          sx={{
            position: { xs: 'static', md: 'static', lg: 'absolute' },
            top: 0,
            right: 0,
            width: { xs: '100vw', md: '88vw', lg: '45vw' },
            height: { xs: 'auto', md: 'auto', lg: '100%' },
            background: 'black', // Set text section background to black
            boxShadow: 'inset 1px 1px 15px rgba(0,0,0,0.4)',
            padding: { xs: '16px 0px', md: '20px 0px', lg: '20px 0px' },
            overflowY: { xs: 'visible', md: 'visible', lg: 'scroll' },
            zIndex: 1,
          }}
        >
          <Typography variant='body2' sx={{  mb: '1.5rem', lineHeight: 1.4, color: 'white' }}>

            Rajiv Williams is a leading real estate mentor in Hyderabad
            with over 14 years of experience in marketing, sales & brand
            strategy. A licensed RERA Realtor and member of HRA & NAR
            India, Rajiv has become a trusted figure in the industry. His
            academic credentials, including an MBA in International
            Business from California, USA, add to his expertise and
            credibility.

          </Typography>
          <Typography variant='body2' sx={{  mb: '1.5rem', lineHeight: 1.4 }}>
            Known for his sharp business acumen, Rajiv has helped clients
            optimize costs and maximize profits while maintaining a strong
            focus on client success. As an entrepreneur and mentor to
            startups, his commitment to scaling businesses and solving
            challenges has made him a sought-after leader in the real
            estate community.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mt: 1, mb: 1 }}>
            <IconButton component="a" href="https://www.facebook.com/williamsrajiv" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
              <Facebook />
            </IconButton>
            <IconButton component="a" href="https://x.com/RajivWilliams?t=2UnilCIJUvX9kQG1dAaXaw&s=09" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
              <XIcon />
            </IconButton>
            <IconButton component="a" href="https://www.instagram.com/williams_rajiv/" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
              <Instagram />
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com/in/rajivwilliams/" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
              <LinkedIn />
            </IconButton>
            <IconButton component="a" href="https://www.youtube.com/@rajiv-williams" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
              <YouTube />
            </IconButton>
          </Box>
          {/* <Box
          
            sx={{
              width: '100%',
              height: '70vh',
              border: 'none',
              overflow: 'hidden',
              py:5,
              px:4
              
            }}
          >
            <iframe
              src="https://rajivwilliams.com/"
              title="Rajiv Williams"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </Box> */}


        </Box>
      </Box>
    </Box>
  );
}
