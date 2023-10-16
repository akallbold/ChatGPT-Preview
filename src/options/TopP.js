import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import useOptions from "../hooks/useOptions";

export default function TopP() {
  const { optionsObject, setOptionsObject } = useOptions();
  const toppProperties = optionsObject.topp;
  console.log({ toppProperties }, toppProperties.selected);
  return (
    <Box sx={{ width: 300 }}>
      <Typography
        variant="caption"
        gutterBottom
      >{`OR (it is not recommended that you use both)`}</Typography>
      <Typography variant="body1">{`top-p: ${toppProperties.value}`}</Typography>
      <Slider
        aria-label="top-p"
        defaultValue={toppProperties.value}
        value={toppProperties.value}
        step={0.1}
        min={0}
        max={1}
        onChange={(_, value) => {
          setOptionsObject({
            ...optionsObject,
            topp: {
              value: value,
              selected: toppProperties.selected,
            },
          });
        }}
      />
      <Typography variant="body1" gutterBottom>
        <a href="https://platform.openai.com/docs/api-reference/completions/create#top_p">
          Documentation on top-p
        </a>{" "}
      </Typography>
    </Box>
  );
}
