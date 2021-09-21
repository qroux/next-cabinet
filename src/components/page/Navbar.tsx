import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormControlLabel,
  Switch,
  Container,
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react';
import { Context as AppContext } from '../../globalState/context/AppContext';
import DarkIcon from '@material-ui/icons/Brightness4Outlined';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  buttons: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menu: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const {
    state: { darkMode },
    switchTheme,
    fetchDarkMode,
  } = useContext(AppContext);

  const buttons = [
    { label: 'Le cabinet', path: '/cabinet' },
    { label: 'Les soins', path: '/soins' },
    { label: 'Info Pratiques', path: '/info' },
  ];

  useEffect(() => {
    fetchDarkMode();
  }, []);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (redirection?: string) => {
    if (redirection) router.push(redirection);
    setAnchorEl(null);
  };

  const renderButtons = () => {
    return buttons.map((button, id) => {
      return (
        <Link href={button.path} passHref key={id}>
          <Button style={{ padding: '0 0.5rem', height: '3rem' }}>
            <Typography variant='body2' color='textPrimary'>
              {button.label}
            </Typography>
          </Button>
        </Link>
      );
    });
  };

  const renderItems = () => {
    return buttons.map((button, id) => {
      return (
        <MenuItem onClick={() => handleClose(button.path)} key={id}>
          <Typography variant='button'>{button.label}</Typography>
        </MenuItem>
      );
    });
  };

  return (
    <Container disableGutters>
      <AppBar position='static' color='transparent' elevation={0}>
        <Toolbar variant='dense' disableGutters>
          <Link href='/' passHref>
            <Button color='inherit' style={{ marginLeft: '0rem' }}>
              {/* eslint-disable */}
              <img
                src='/android-chrome-512x512.png'
                width='40rem'
                height='40rem'
                alt='logo'
              />
              {/* eslint-enable  */}
            </Button>
          </Link>
          <div className={classes.buttons} style={{ paddingLeft: '0.5rem' }}>
            {renderButtons()}
          </div>
          {/* <div className={classes.buttons}> */}
          <FormControlLabel
            className={classes.buttons}
            style={{ marginLeft: 'auto' }}
            control={
              <Switch
                checked={darkMode}
                onChange={() => switchTheme(!darkMode)}
                name='darkmode'
                color='secondary'
              />
            }
            label=''
          />
          <DarkIcon className={classes.buttons} />

          <IconButton
            color='inherit'
            size='medium'
            style={{ marginLeft: 'auto' }}
            aria-controls='menu'
            aria-haspopup='true'
            onClick={handleClick}
            className={classes.menu}>
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleClose()}>
            <MenuItem onClick={() => handleClose('/')}>
              <Typography variant='button'>Accueil</Typography>
            </MenuItem>
            {renderItems()}

            <MenuItem onClick={() => handleClose()}>
              <Typography variant='button'>Mode sombre</Typography>
              {/* <DarkIcon /> */}
              <FormControlLabel
                style={{ marginLeft: '0.5rem' }}
                control={
                  <Switch
                    checked={darkMode}
                    onChange={() => switchTheme(!darkMode)}
                    name='darkmode'
                    color='secondary'
                  />
                }
                label=''
              />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
