import { Box } from "@mui/material";

const RightBar = () => {
  return (
    <Box ml={1} p={2} flex={2} sx={{ backgroundColor: "whitesmoke", display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">Here</Box>
    </Box>
  );
};

export default RightBar;
