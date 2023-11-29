import PagesRounded from "@mui/icons-material/PagesRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import StoreRounded from "@mui/icons-material/StoreRounded";
import HandshakeRounded from "@mui/icons-material/HandshakeRounded";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import AccountCircleRounded from "@mui/icons-material/AccountCircleRounded";
import DarkModeRounded from "@mui/icons-material/DarkModeRounded";
import LightModeRounded from "@mui/icons-material/LightModeRounded";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, styled } from "@mui/material";
import { useState } from "react";

const Sidebar = () => {
  const [checked, setChecked] = useState(false);
  const StyledSwitch = styled(Switch)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));
  return (
    <Box flex={{ xs: "none", sm: "1" }} mr={1} p={2} sx={{ backgroundColor: "whitesmoke", width: { xs: "5%", sm: "100%" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: { xs: "0px", sm: "5px" }, marginBottom: "10px" }}>
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" sx={{ display: { xs: "none", sm: "block" } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: { xs: "0px", sm: "5px" }, marginBottom: "10px" }}>
              <ListItemIcon>
                <PagesRounded />
              </ListItemIcon>
              <ListItemText primary="Pages" sx={{ display: { xs: "none", sm: "block" } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: { xs: "0px", sm: "5px" }, marginBottom: "10px" }}>
              <ListItemIcon>
                <PeopleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" sx={{ display: { xs: "none", sm: "block" } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: { xs: "0px", sm: "5px" }, marginBottom: "10px" }}>
              <ListItemIcon>
                <StoreRounded />
              </ListItemIcon>
              <ListItemText primary="Marketplace" sx={{ display: { xs: "none", sm: "block" } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: { xs: "0px", sm: "5px" }, marginBottom: "10px" }}>
              <ListItemIcon>
                <HandshakeRounded />
              </ListItemIcon>
              <ListItemText primary="Friends" sx={{ display: { xs: "none", sm: "block" } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: { xs: "0px", sm: "5px" }, marginBottom: "10px" }}>
              <ListItemIcon>
                <SettingsRounded />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ display: { xs: "none", sm: "block" } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: { xs: "0px", sm: "5px" }, marginBottom: "10px" }}>
              <ListItemIcon>
                <AccountCircleRounded />
              </ListItemIcon>
              <ListItemText primary="Profile" sx={{ display: { xs: "none", sm: "block" } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: { xs: "0px", sm: "5px" }, marginBottom: "10px" }}>
              <ListItemIcon>
                {!checked && <DarkModeRounded />}
                {checked && <LightModeRounded />}
              </ListItemIcon>
              <StyledSwitch
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
