import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import useOptions from "../hooks/useOptions";

export default function MaxTokens() {
  const { optionsObject, setOptionsObject } = useOptions();
  const maxTokensProperties = optionsObject.maxTokens;
  console.log({ maxTokensProperties });
  return (
    <Box sx={{ width: 300 }}>
      <label>{`Max Tokens: ${maxTokensProperties.value}`}</label>
      <TextField
        variant="outlined"
        placeholder="Enter text here"
        value={maxTokensProperties.value}
        onChange={(e) => {
          setOptionsObject({
            ...optionsObject,
            maxTokens: {
              value: e.target.value,
              selected: maxTokensProperties.selected,
            },
          });
        }}
      />

      <Typography variant="body1" gutterBottom>
        <a href="https://platform.openai.com/docs/api-reference/completions/create#max_tokens">
          Documentation on Max Tokens
        </a>{" "}
      </Typography>
    </Box>
  );
}
