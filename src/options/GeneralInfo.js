import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function GeneralInfo() {
  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="body1" gutterBottom>
        This application is using the Completions Endpoint. More information on
        the endpoint can be found in the{" "}
        <a
          href="https://platform.openai.com/docs/api-reference/completions"
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </a>
        . This list isn't meant to be comprehensive.
      </Typography>
      {/* <Typography variant="body1" gutterBottom>
        I also created{" "}
        <a href="" target="_blank" rel="noreferrer">
          swagger documentation
        </a>{" "}
        if that's more your style.
      </Typography> */}
    </Box>
  );
}
