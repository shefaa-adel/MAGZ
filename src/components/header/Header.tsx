import { theme } from "../../theme/palette";
import {
  Box,
  Tabs,
  Typography,
  Menu,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Grid,
  FormControl,
  Button,
  InputAdornment,
  FormGroup,
  MenuItem,
  FormControlLabel,
} from "@mui/material";
import {
  StyledBorsder,
  StyledBox,
  StyledImage,
  StyledListNavLeft,
  StyledNavConatiner,
  StyledNavTop,
  StypledMedia,
  StyledNavTopRight,
  StyledRightOne,
  StyledRightOneConatiner,
  StylesSelected,
  PersonIconNav,
  StyledNavBottom,
  StyledListNavLeftContent,
  StyledListNavLeftMore,
  StyledListNavRight,
  MaterialUISwitch,
  StyledLink,
} from "../../styled/Header";
import DrawerList from "./Drawer";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../../redux/actions/logoutAction";

const Header = () => {
  let newDate = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date_raw = days[newDate.getDay()];
  let date_number = newDate.getDay();
  let month_raw = months[newDate.getMonth() + 1];
  let year = newDate.getFullYear();

  const [values, setValues] = React.useState(["Egypt", "UK Edition"]);
  const [selected, setSelected] = useState("Egypt");

  function handleChange(event: any) {
    setSelected(event.target.value);
  }
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(1117));
  const RegisterInfo = localStorage.getItem("RegisterInfo");
  const userInfoObj = JSON.parse(`${localStorage.getItem("RegisterInfo")}`);

  // const userName =;
  // const userImage = `${userInfoObj.image}`;

  const nagivate = useNavigate();
  const dispatch: any = useDispatch();
  const handleLogout = () => {
    console.log("logout");
    nagivate("/");

    dispatch(LogoutUser());
  };
  const handleProfile = () => {
  
    nagivate("/Profile");

   
  };
  const handleHome = () => {
  
    nagivate("/");

   
  };
  const PAGES = ["new", "opinion", "sport", "life style", "culture"];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledNavConatiner>
      {isMatch ? (
        <StypledMedia>
          <Box sx={{ padding: " 20px" }} >
            <img src={Logo} height="70px" width="130px" onClick={handleHome}/>
          </Box>
        <DrawerList />
        </StypledMedia>
      ) : (
        <StyledNavConatiner>
          <StyledNavTop>
            <Box component="div">
              {date_raw} {month_raw} {},{year}
            </Box>
            <StyledNavTopRight>
              {!RegisterInfo ? (
                <StyledRightOne>
                  <StyledRightOneConatiner>
                    <PersonIconNav />
                  </StyledRightOneConatiner>
                  <Typography
                    sx={{ margin: "10px", fontSize: "12px" }}
                    component={"span"}
                    variant={"body2"}
                  >
                    <StyledLink to="/login">Sign in</StyledLink>
                  </Typography>
                </StyledRightOne>
              ) : (
                <Box>
                  <StyledRightOne>
                    <StyledRightOneConatiner>
                      <Box component="img" src={`${userInfoObj.image}`}></Box>
                    </StyledRightOneConatiner>

                    <FormControl>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        {`${userInfoObj.firstName} ${userInfoObj.lastName} `}
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                       
                        sx={{width:"200px"}}
                      >
                        <MenuItem onClick={handleProfile}>Profile   </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </FormControl>
                  </StyledRightOne>
                </Box>
              )}

              <Box>
                <FormControl>
                  <StylesSelected
                    value={selected}
                    onChange={handleChange}
                    inputProps={{
                      name: "agent",
                      id: "age-simple",
                    }}
                  >
                    {values.map((value, index) => {
                      return (
                        <MenuItem key={index} value={value}>
                          {value}
                        </MenuItem>
                      );
                    })}
                  </StylesSelected>
                </FormControl>
              </Box>
            </StyledNavTopRight>
          </StyledNavTop>
          <StyledImage>
            <Box component="img" src={Logo} height="70px" width="160px" onClick={handleHome} sx={{cursor: 'pointer'}}/>
          </StyledImage>
          <StyledNavBottom>
            <StyledListNavLeft>
              <Tabs value={value} onChange={(e, value) => setValue(value)}>
                {PAGES.map((page, index) => {
                  return <StyledListNavLeftContent label={page} key={index} />;
                })}

                <StyledListNavLeftMore
                  onClick={toggle}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  more
                  <KeyboardArrowDownIcon sx={{ marginTop: "7px" }} />
                </StyledListNavLeftMore>
              </Tabs>

              <Box>
                {isOpened && (
                  <StyledBox>
                    <Grid container sx={{ marginLeft: "10px" }}>
                      <Grid item xs={2}>
                        <Box>Cartoon</Box>
                        <Box sx={{ marginTop: "10px" }}>Video </Box>
                      </Grid>
                      <Grid item xs={1}>
                        <StyledBorsder />
                      </Grid>
                      <Grid item xs={2}>
                        <Box>Football</Box>
                        <Box sx={{ marginTop: "10px" }}>Golf </Box>
                        <Box sx={{ marginTop: "10px" }}>Boxing </Box>
                        <Box sx={{ marginTop: "10px" }}>US Sport </Box>
                      </Grid>
                      <Grid item xs={1}>
                        <StyledBorsder />
                      </Grid>
                      <Grid item xs={3}>
                        <Box>Food</Box>
                        <Box sx={{ marginTop: "10px" }}>Family </Box>
                        <Box sx={{ marginTop: "10px" }}>Health </Box>
                      </Grid>
                      <Grid item xs={1}>
                        <StyledBorsder />
                      </Grid>
                      <Grid item xs={2}>
                        <Box>Flim</Box>
                        <Box sx={{ marginTop: "10px" }}>Music </Box>
                        <Box sx={{ marginTop: "10px" }}>Art & design </Box>
                      </Grid>
                    </Grid>
                  </StyledBox>
                )}
              </Box>
            </StyledListNavLeft>
            <StyledListNavRight>
              <FormControl sx={{ m: 5, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  sx={{ height: "30px", borderRadius: "40px", color: "white" }}
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: "white" }} />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
              <FormGroup>
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  label=""
                />
              </FormGroup>
            </StyledListNavRight>
          </StyledNavBottom>
        </StyledNavConatiner>
      )}
    </StyledNavConatiner>
  );
};
export default Header;
