import { useState } from "react";
import useConversationContext from "./hooks/useConversationContext";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { completionApiUrl } from "./data/constants";
import CircularProgress from "@mui/material/CircularProgress";

export default function LeftPanel() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState();
  const [temperature] = useState(1);
  const [loading, setLoading] = useState(false);

  const { context, addResponseToContext, removeContext } =
    useConversationContext();

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  async function onSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setLoading(true);
    const currentUserInput = { role: "user", content: userInput };
    if (context.length) {
      context.push(currentUserInput);
    }
    const body = { messages: context, temperature, model: "gpt-3.5-turbo" };

    try {
      const response = await fetch(completionApiUrl, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      const textResult = data.choices[0].message;
      setResult(textResult.content);
      addResponseToContext(currentUserInput);
      addResponseToContext(textResult);
      setUserInput("");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <Grid
      container
      p={3}
      flexDirection="column"
      sx={
        {
          // height: "50%"
          // width: "100%",
        }
      }
      display="flex"
      // justifyContent="space-between"
    >
      <Grid p={1} display="flex">
        <TextField
          variant="outlined"
          placeholder="Enter text here"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          sx={{ width: "73%", margin: "0.5rem" }}
        />

        <Button
          variant="contained"
          onClick={(e) => onSubmit(e)}
          sx={{
            width: "20%",
            margin: "0.5rem",
            padding: "0",
          }}
        >
          Ask Assistant
        </Button>
        {loading && <CircularProgress />}
        {result && <Typography>{result}</Typography>}
      </Grid>
      <Grid>
        <Button
          variant="contained"
          onClick={removeContext}
          sx={
            {
              // width: "20%",
              // margin: "0.5rem",
              // padding: "0.5rem",
            }
          }
        >
          Start over and remove context
        </Button>
      </Grid>
    </Grid>
  );
}
