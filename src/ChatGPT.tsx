import { Divider, Grid, Typography } from "@mui/material";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function ChatGPT() {
  return (
    <div>
      <Typography variant="h1">Preview of OpenAPI Features</Typography>
      <Grid container p={1} flexDirection="row">
        <Grid p={2} width="73%">
          <LeftPanel />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid p={2} width="25%">
          <RightPanel />
        </Grid>
      </Grid>
    </div>
  );
}
