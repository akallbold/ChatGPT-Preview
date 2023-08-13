import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function Temperature({ temperature, setTemperature }) {
  return (
    <Box sx={{ width: 300 }}>
      <label>{`Temperature: ${temperature}`}</label>
      <Slider
        aria-label="Temperature"
        defaultValue={temperature}
        value={temperature}
        step={1}
        min={1}
        max={2}
        onChange={(_, value) => {
          setTemperature(value);
        }}
      />
    </Box>
  );
}
