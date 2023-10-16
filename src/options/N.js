import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import useOptions from "../hooks/useOptions";

export default function N() {
  const { optionsObject, setOptionsObject } = useOptions();
  const nProperties = optionsObject.n;
  console.log({ nProperties }, nProperties.selected);
  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="body1">{`N: ${nProperties.value}`}</Typography>
      <Slider
        aria-label="N"
        defaultValue={nProperties.value}
        value={nProperties.value}
        step={1}
        min={0}
        max={3}
        onChange={(_, value) => {
          setOptionsObject({
            ...optionsObject,
            n: {
              value: value,
              selected: nProperties.selected,
            },
          });
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
