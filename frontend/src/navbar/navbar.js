import {React, useState, useEffect} from "react";
import './navbar.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors'
import { useMediaQuery } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link, useLocation} from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500]
    },
    secondary: {
      main: grey[50]
    }
  },
  typography: {
    body2: {
      fontSize: "12px"
    }
  }
})

function IconGroup({Icon, descriptor, selected=false, setSelected, number}) {
  const [isHover, setIsHover] = useState(false);

  return (
    (
      selected === number ?
      <div onClick={() => setSelected(number)} className="icon-selected" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <IconButton disableRipple color="secondary">
          <Icon fontSize="medium" />
        </IconButton>
        <Typography mt={0} variant="body2" color="secondary">{descriptor}</Typography>
      </div>
    :
      <div onClick={() => setSelected(number)} className="icon-unselected" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <IconButton disableRipple color={isHover ? "secondary" : "primary"}>
          <Icon fontSize="medium" />
        </IconButton>
        <Typography mt={0} variant="body2" color={isHover ? "secondary" : "primary"}>{descriptor}</Typography>
      </div>
    )
  )
}

const pathNums = {
  '/': 1,
  '/mynetwork': 2,
  '/jobs': 3,
  '/messaging': 4,
  '/notifications': 5,
}

function Navbar() {
  const [selected, setSelected] = useState(1);
  const location = useLocation();
  const matches1025 = useMediaQuery('(min-width:1025px)')
  const matches854 = useMediaQuery('(min-width:854px)')
  const matches748 = useMediaQuery('(min-width:748px)')
  const matches530 = useMediaQuery('(min-width:530px)')

  useEffect(() => {
    setSelected(pathNums[location.pathname])
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="nav-container">
          <div className="search-container">
            <TextField
            sx={{backgroundColor: "#38434f"}}
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}         
            />
          </div>
          <div className="icons-container">
            <Link to='/'>
              <IconGroup Icon={HomeIcon} descriptor="Home" selected={selected} setSelected={setSelected} number={1} />
            </Link>
            <Link to='mynetwork'>
              <IconGroup Icon={PeopleIcon} descriptor="My Network" selected={selected} setSelected={setSelected} number={2} />
            </Link>
            <Link to='jobs'>
              <IconGroup Icon={WorkIcon} descriptor="Jobs" selected={selected} setSelected={setSelected} number={3} />
            </Link>
            <Link to='messaging'>
              <IconGroup Icon={TextsmsRoundedIcon} descriptor="Messaging" selected={selected} setSelected={setSelected} number={4} />
            </Link>
            <Link to='notifications'>
              <IconGroup Icon={NotificationsIcon} descriptor="Notifications" selected={selected} setSelected={setSelected} number={5} />
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Navbar;