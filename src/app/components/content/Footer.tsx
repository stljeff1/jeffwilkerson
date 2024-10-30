// src/app/components/Footer.tsx
import React from 'react';
import { Box, Divider, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import StravaIcon from '../StravaIcon';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import SocialIcons from '../SocialIcons';

const Footer: React.FC = () => {
  const theme = useTheme(); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box component="footer" sx={{ 
      py: {
        xs: 2, 
        md: 4
      }, 
      px: 2,
      bgcolor: 'info.main',
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: 'row'
      },
      justifyContent: {
        xs: 'center',
        md: 'space-between',
      },
      alignItems: {
        xs: 'center',
        md: 'flex-end',
      },
     }}>

      { !isLargeScreen && 
        <Box sx={{
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // flexDirection: 'column',
          minWidth: '75vw'
        }}>
          <Typography sx={{ 
            fontWeight: 'bold',
            textAlign: 'center'
          }}>Jeff Wilkerson</Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <Link>Download CVV</Link>
            <Link>hi@jeffwilkerson.net</Link>
          </Box>
          <Divider sx={{my: 2,}}/>
        </Box>

      }

      <SocialIcons mode='light' size='medium' hideEmail={true}/>
      
      { isLargeScreen &&
       <Box>
        
        <Typography sx={{ 
          fontWeight: 'bold'
        }}>Jeff Wilkerson</Typography>
      </Box>
      }
      
    </Box>
  );
};

export default Footer;
