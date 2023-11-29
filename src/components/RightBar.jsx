import { Box } from "@mui/material";

const RightBar = () => {
  return (
    <Box ml={1} p={2} flex={2} sx={{ bgcolor: "pink", display: { xs: "none", sm: "block" } }}>
      RightBar
    </Box>
  );
};

export default RightBar;
