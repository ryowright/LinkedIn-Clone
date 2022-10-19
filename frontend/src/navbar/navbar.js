import {React, useState} from "react";
import './navbar.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500]
    },
    secondary: {
      main: grey[900]
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
    <ThemeProvider theme={theme}>
      {
        selected == number ?
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
      }
    </ThemeProvider>
  )
}

function Navbar() {
  const [selected, setSelected] = useState(1)

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="nav-container">
          <div className="search-container">
            <TextField
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
            <IconGroup Icon={HomeIcon} descriptor="Home" selected={selected} setSelected={setSelected} number={1} />
            <IconGroup Icon={PeopleIcon} descriptor="My Network" selected={selected} setSelected={setSelected} number={2} />
            <IconGroup Icon={WorkIcon} descriptor="Jobs" selected={selected} setSelected={setSelected} number={3} />
            <IconGroup Icon={TextsmsRoundedIcon} descriptor="Messaging" selected={selected} setSelected={setSelected} number={4} />
            <IconGroup Icon={NotificationsIcon} descriptor="Notifications" selected={selected} setSelected={setSelected} number={5} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Navbar;