import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../../../assets/Logos/Group 2859889.png';
import { Link } from 'react-router-dom';



const NavBar = (props) => {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(!state);
    };

    const list = () => (
        <Box
            sx={{ width: '100%', height: "50vh" }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
            <h1 className='text-4xl mt-20 mx-auto w-80'>Will be added later</h1>
        </Box>
    );

    const drawerWidth = 240;
    const navItemSytle = `
    bg-black p-[3px] rounded-full hover:bg-cyan hover:transition-colors hover:delay-300 hover:ease-in-out
`
    const navItems = [
        <InstagramIcon style={{ fontSize: '36px' }} className={navItemSytle} />,
        <YouTubeIcon style={{ fontSize: '36px' }} className={navItemSytle} />,
        <LinkedInIcon style={{ fontSize: '36px' }} className={navItemSytle} />,
        <TwitterIcon style={{ fontSize: '36px' }} className={navItemSytle} />,
        <Button onClick={toggleDrawer(true)} sx={{ bgcolor: '#0CC5DB', ":hover": { bgcolor: '#3EE8B5' } }} variant="contained" endIcon={<ExpandMoreIcon />}>
            All Courses
        </Button>
    ];

    const navItems2 = [
        <Button onClick={toggleDrawer(true)} sx={{ bgcolor: '#fff', color:'black' }} size='medium' variant="text" startIcon={<InstagramIcon />}>
            Instagram
        </Button>,
        <Button onClick={toggleDrawer(true)} sx={{ bgcolor: '#fff', color:'black' }} size='medium' variant="text" startIcon={<YouTubeIcon />}>
            YouTube
        </Button>,
        <Button onClick={toggleDrawer(true)} sx={{ bgcolor: '#fff', color:'black' }} size='medium' variant="text" startIcon={<LinkedInIcon />}>
            LinkedIn
        </Button>,
        <Button onClick={toggleDrawer(true)} sx={{ bgcolor: '#fff', color:'black' }} size='medium' variant="text" startIcon={<TwitterIcon />}>
            Twitter
        </Button>,
        <Button onClick={toggleDrawer(true)} sx={{ bgcolor: '#0CC5DB', ":hover": { bgcolor: '#3EE8B5' } }} variant="contained" endIcon={<ExpandMoreIcon />}>
            All Courses
        </Button>
    ];

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img className='h-10 ml-2' src={logo} alt="icon" />
            </Typography>
            <Divider />
            <List>
                {navItems2.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', color: 'white' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: 'white', padding: '10px 20px 10px 10px'  }}>
                <Toolbar>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, color: 'black' }}
                    >
                        <Link to={'/'}><img className='h-8 md:h-12' src={logo} alt="icon" /></Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, color: 'black' }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: 'white' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 'auto', display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor={'top'}
                        open={state}
                        onClose={toggleDrawer(false)}
                    >
                        {list('top')}
                    </Drawer>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>

    );
};

NavBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: NavBar.func,
};


export default NavBar;