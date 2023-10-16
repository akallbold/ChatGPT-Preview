import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import useOptions from "../hooks/useOptions";

export default function Temperature() {
  const { optionsObject, setOptionsObject } = useOptions();
  const temperatureProperties = optionsObject.temperature;
  console.log({ temperatureProperties });
  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="body1">{`Temperature: ${temperatureProperties.value}`}</Typography>
      <Typography variant="caption">
        Will always pass in Temperature setting if both Temperature and TopP are
        passed in.
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={temperatureProperties.value}
        value={temperatureProperties.value}
        step={0.1}
        min={0}
        max={1}
        onChange={(_, value) => {
          setOptionsObject({
            ...optionsObject,
            temperature: {
              value: temperatureProperties.value,
              selected: temperatureProperties.selected,
            },
          });
        }}
      />
      <Typography variant="body1" gutterBottom>
        <a href="https://platform.openai.com/docs/api-reference/completions/create#temperature">
          Documentation on Temperature
        </a>{" "}
      </Typography>
    </Box>
  );
}
