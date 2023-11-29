import { PlayArrowRounded, Search } from "@mui/icons-material";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography, styled, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const ToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SerachBox = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "2px",
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    padding: "2px 10px",
    width: "50%",
  }));

  return (
    <Box>
      <AppBar position="sticky">
        <ToolBar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PlayArrowRounded fontSize="large" />
            <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
              MediaUI
            </Typography>
          </Box>
          <SerachBox>
            <Search sx={{ color: "gray" }} />
            <InputBase placeholder="Search..."></InputBase>
          </SerachBox>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Badge badgeContent={4} color="error" sx={{ display: { xs: "none", sm: "block" } }}>
              <EmailRoundedIcon />
            </Badge>
            <Badge badgeContent={4} color="error" sx={{ display: { xs: "none", sm: "block" } }}>
              <NotificationsRoundedIcon />
            </Badge>
            <Avatar src="./me.jpg" alt="UserImage" sx={{ width: "32px", height: "32px" }} onClick={() => setOpen(true)} />
            <Typography sx={{ display: { xs: "none", sm: "block" } }}>Ansh Gupta</Typography>
          </Box>
          <Menu open={open} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </ToolBar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
