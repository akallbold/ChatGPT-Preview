import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function MaxTokens() {
  const [maxTokens, setMaxTokens] = useState(10);

  return (
    <Box sx={{ width: 300 }}>
      <label>{`Max Tokens: ${maxTokens}`}</label>
      <TextField
        variant="outlined"
        placeholder="Enter text here"
        value={maxTokens}
        onChange={(e) => setMaxTokens(e.target.value)}
      />

      <Typography variant="body1" gutterBottom>
        <a href="https://platform.openai.com/docs/api-reference/completions/create#max_tokens">
          Documentation on Max Tokens
        </a>{" "}
      </Typography>
    </Box>
  );
}
