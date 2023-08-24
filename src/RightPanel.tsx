import { useState } from "react";
import Temperature from "./components/Temperature";
import SystemPersonality from "./components/SystemPersonality";
import { Grid, Typography } from "@mui/material";
import OptionsWidget from "./OptionsWidget";

export default function RightPanel() {
  const [temperature, setTemperature] = useState(1);

  return (
    <Grid container>
      <Typography variant="h2">Options</Typography>
      <OptionsWidget>
        <Temperature
          temperature={temperature}
          setTemperature={setTemperature}
        />
      </OptionsWidget>
      <OptionsWidget>
        <SystemPersonality />
      </OptionsWidget>
    </Grid>
  );
}
