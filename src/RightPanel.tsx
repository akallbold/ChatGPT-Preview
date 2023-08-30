import Temperature from "./options/Temperature";
import SystemPersonality from "./options/SystemPersonality";
import { Grid, Typography } from "@mui/material";
import OptionsWidget from "./OptionsWidget";
import GeneralInfo from "./options/GeneralInfo";
import N from "./options/N";
import MaxTokens from "./options/MaxTokens";

export default function RightPanel() {
  return (
    <Grid container>
      <Typography variant="h2">Options</Typography>
      <OptionsWidget option="temperature">
        <Temperature />
      </OptionsWidget>
      <OptionsWidget option="systemPersonality">
        <SystemPersonality />
      </OptionsWidget>
      <OptionsWidget option="n">
        <N />
      </OptionsWidget>
      <OptionsWidget option="maxTokens">
        <MaxTokens />
      </OptionsWidget>
      <OptionsWidget>
        <GeneralInfo />
      </OptionsWidget>
    </Grid>
  );
}
