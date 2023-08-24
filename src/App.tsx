import Login from "./Login";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function App() {
  return (
    <Grid
      container
      p={3}
      sx={{
        backgroundColor: "#CDE6F5",
        minHeight: "100vh",
      }}
    >
      <Login />
    </Grid>
  );
}

export default App;
