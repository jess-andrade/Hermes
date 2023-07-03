import * as React from 'react';

// MUI imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Image from 'next/image';
import hermes from '../../public/hermes.png'

// imports from Next
import Link from 'next/link';
import { useRouter } from 'next/router'
import Search from './Search';


const drawerWidth = '30%';
const drawerWidthMobile = '70%';

interface Props {
  children: any;
  window?: () => Window;
}

export default function MyDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const styles = {
    paper: {
      background: "#4D77FF"
    }
  }

  const sections = [
    { name: 'A', link: '/' },
    { name: 'B', link: '/b' },
    { name: 'C', link: '/c' },
  ]

  type PageTitles = {
    [key: string]: string
  }

  const pageTitles: PageTitles = {
    '/': 'feelings about twitter trends',
    '/b': 'B',
    '/c': 'C'
  }

  const drawer = (

    <div className={`flex flex-col space-y-1 gap-y-10 `}>
      <Toolbar />

      <List>
        <Divider />

        <Search />
        {/* {sections.map((section, index) => (
          <ListItem key={index} disablePadding sx={{ color: '#F1F6F9' }}>
            <Link href={section.link}>
              <ListItemButton>
                <ListItemIcon />
                <ListItemText primary={section.name} sx={{ minWidth: '7vw' }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <div className={`p-8 flex flex-col justify-end items-center`}>
        <Typography className={`text-slate-600 text-sm`}>Hermes &copy; 2023 </Typography>
      </div>
    </div >

  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const { asPath } = useRouter()

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* APPBAR - on top of the page */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px`, backgroundColor: '#1D267D' }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'white', textTransform: 'uppercase', fontSize: '12px' }}>
            {pageTitles[asPath]}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on MOBILE.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidthMobile, backgroundColor: '#0C134F' },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#0C134F' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}