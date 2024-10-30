// src/app/components/Header.tsx
import React, {  useState } from 'react';
import { AppBar, Toolbar, Typography, Button, useTheme, useMediaQuery, Drawer, IconButton, List, ListItem, ListItemText, Link, Box, useScrollTrigger, CssBaseline, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SocialIcons from '../SocialIcons';
import CloseIcon from '@mui/icons-material/Close';
import { adjustColor } from '../../lib/adjustColor';

const pageLinks = [{
  label: 'Projects',
  target: '#projects'
}, {
  label: 'About',
  target: '#about'
}, {
  label: 'Home',
  target: '#top'
}];

interface ElevatedAppBarProps {
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevatedAppBar(props: ElevatedAppBarProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    //target: document.body
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}


const Header: React.FC = () => {
  const [elevated, setElevated] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const linkColor = theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.secondary.main;


  console.log('palette', theme.palette);
  const linkStyle = {
    color: linkColor,
    transition: 'color 0.3s ease',
    '&:hover': {
        color: (theme.palette.mode == 'light') ? adjustColor(linkColor, 25) : adjustColor(linkColor, -25)
    },
}



  return (
    <>
      <CssBaseline/>
      <ElevatedAppBar>
        <AppBar sx={{
          maxWidth: '100%'
        }}>

        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          {!isLargeScreen && (
            <IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: theme.palette.mode == 'light' ? theme.palette.secondary.main : theme.palette.common.white}} />
            </IconButton>
          )}

          { isLargeScreen &&
            <SocialIcons color={theme.palette.mode == 'light' ? 'secondary' : 'primary'}/>
          }
          
          {isLargeScreen && (
            <Box sx={{
              display: 'flex',
              gap: 3,
              alignItems: 'center'
            }}>
              { pageLinks.map( (link, i) => (
                <Link key={`link=${i}`} href={link.target} sx={linkStyle} variant='button'>{link.label}</Link>
              ))}
            </Box>
          )}
        </Toolbar>
        </AppBar>
      </ElevatedAppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{
            pl: 3,
            py: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'flex-start'
          }}>
            <Typography variant='h6' color='info' sx={{mt: 2, mr: 3}}>Jeff Wilkerson</Typography>
            <IconButton  onClick={toggleDrawer(false)}>
              <CloseIcon/>
            </IconButton>
          </Box>
        <Box sx={{
          px: 3,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <List>
            { pageLinks.map( (link, i) => (
              <ListItem  key={`link=${i}`} onClick={toggleDrawer(false)}>
                
                  <Link href={link.target} sx={linkStyle} variant='button'  onClick={toggleDrawer(false)}>{link.label}</Link>
                
              </ListItem>
            
            ))}
          </List>
          <Divider sx={{
            my: 3,
            mx: 2,
            backgroundColor: theme.palette.primary.main
          }}/>
          
          <Box sx={{textAlign: 'center'}}>
            <Link color="secondary" href='mailto:hi@jeffwilkerson.net'>hi@jeffwilkerson.net</Link>
          </Box>
          <Button variant='contained' sx={{my: 2}}>Download CVV</Button>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>

          <SocialIcons mode={theme.palette.mode} gap={2} size='small' hideEmail={true}/>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
