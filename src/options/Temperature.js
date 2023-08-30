import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function Temperature() {
  const [topp, setTopp] = useState(0.5);
  const [temperature, setTemperature] = useState(1);

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="body1">{`Temperature: ${temperature}`}</Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={temperature}
        value={temperature}
        step={0.1}
        min={0}
        max={1}
        onChange={(_, value) => {
          setTemperature(value);
        }}
      />
      <Typography
        variant="caption"
        // py={3}
        gutterBottom
      >{`OR (it is not recommended that you use both)`}</Typography>
      <Typography variant="body1">{`top-p: ${topp}`}</Typography>
      <Slider
        aria-label="top-p"
        defaultValue={topp}
        value={topp}
        step={0.1}
        min={0}
        max={1}
        onChange={(_, value) => {
          setTopp(value);
        }}
      />
      <Typography variant="body1" gutterBottom>
        <a href="https://platform.openai.com/docs/api-reference/completions/create#temperature">
          Documentation on Temperature
        </a>{" "}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <a href="https://platform.openai.com/docs/api-reference/completions/create#top_p">
          Documentation on top-p
        </a>{" "}
      </Typography>
    </Box>
  );
}
