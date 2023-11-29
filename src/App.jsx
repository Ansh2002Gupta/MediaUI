import { Stack } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </>
  );
};

export default App;

// const BlueButton = styled(Button)({
//     backgroundColor: "skyblue",
//     Color: "#888",
//     margin: 5,
//     "&:hover": {
//       backgroundColor: "lightblue",
//     },
//     "&:disabled": {
//       backgroundColor: "gray",
//       color: "white",
//     },
//   });
//   return (
//     <div>
//       <Button variant="text">Text</Button>
//       <Button variant="contained" color="secondary" size="large" endIcon={<SendIcon />}>
//         Contained
//       </Button>
//       <Button variant="outlined" startIcon={<DeleteIcon />} disabled>
//         Outlined
//       </Button>
//       <Typography variant="h1" component="p">
//         This is a p tag with h1 styling.
//       </Typography>
//       <BlueButton>Styled Button1</BlueButton>
//       <BlueButton disabled>Styled Button2</BlueButton>
//     </div>
//   );
