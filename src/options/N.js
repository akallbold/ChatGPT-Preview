import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function N() {
  const [n, setN] = useState(1);

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="body1">{`N: ${n}`}</Typography>
      <Slider
        aria-label="N"
        defaultValue={n}
        value={n}
        step={1}
        min={0}
        max={3}
        onChange={(_, value) => {
          setN(value);
        }}
      />

      <Typography variant="body1" gutterBottom>
        <a href="https://platform.openai.com/docs/api-reference/completions/create#n">
          Documentation on N
        </a>{" "}
      </Typography>
    </Box>
  );
}
