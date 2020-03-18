import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsses from './toolbox.css';
import { Link } from 'react-router-dom';
import fire from '../../config/fire';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const signout = () => {
    fire.auth().signOut()
    handleDrawerToggle()
  }

    

  let items = (
    <div style={{fontFamily: 'Akronim'}}>
      <List>
        <ListItem ><Link to='/signin' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>Sign-In</Link></ListItem>
        <ListItem ><Link to='/signup' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>Sign-Up</Link></ListItem>:
    </List>
    </div>
  )
  if(props.user) {
    items = (
      <div style={{fontFamily: 'Akronim'}}>
         <List>
    <ListItem ><Link to='/userrigpost' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>Create Rig</Link></ListItem>
        <ListItem ><Link to='/myrig' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>My Rig</Link></ListItem>
        <ListItem ><Link to='/userprofile' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>My Profile</Link></ListItem>
        <ListItem ><Link to='/' style={{textDecoration: 'none', color: 'green'}} onClick={() => signout()}>Sign-Out</Link></ListItem>
      </List>
    </div>
    )
  }

  /* const signinlinks = (
    <div>
    <List>
    <ListItem ><Link to='/userrigpost' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>Create Rig</Link></ListItem>
        <ListItem ><Link to='/myrig' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>My Rig</Link></ListItem>
        <ListItem ><Link to='/userprofile' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>My Profile</Link></ListItem>
        <ListItem ><Link to='/' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>Sign-Out</Link></ListItem>}
      </List>
      </div>
  )

  const signoutlinks = (
    <div>
    <List>
        <ListItem ><Link to='/signin' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>Sign-In</Link></ListItem>
        <ListItem ><Link to='/signup' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>Sign-Up</Link></ListItem>:
    </List>
    </div>
  )
 */
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      {/* <List> */}
       {/*  {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
{/*         <ListItem ><Link to='/signin' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>Sign-In</Link></ListItem>
        <ListItem ><Link to='/signup' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>Sign-Up</Link></ListItem>:
        <ListItem ><Link to='/userrigpost' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>Create Rig</Link></ListItem>
        <ListItem ><Link to='/myrig' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>My Rig</Link></ListItem>
        <ListItem ><Link to='/userprofile' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>My Profile</Link></ListItem>
        <ListItem ><Link to='/' style={{textDecoration: 'none', color: 'green'}} onClick={() => handleDrawerToggle()}>Sign-Out</Link></ListItem>
      */}
{/*       {props.user ? {signinlinks} : {signoutlinks}}
 */}
    {items}     
     {/*  </List> */}
     {/*  <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div className="Toolbox" style={{  fontFamily: 'Akronim' }}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{background: 'linear-gradient(to right, #000000, #0f9b0f)'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography  style={{  fontFamily: 'Akronim' }} variant="h6" noWrap>
          <Link to='/' style={{textDecoration: 'none'}}>Can I Run it</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ResponsiveDrawer;