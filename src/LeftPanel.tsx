import { useState } from "react";
import useConversationContext from "./hooks/useConversationContext";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { completionApiUrl } from "./data/constants";
import CircularProgress from "@mui/material/CircularProgress";

export default function LeftPanel() {
  const [userInput, setUserInput] = useState("");
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
    const body = {
      messages: context,
      temperature,
      model: "gpt-3.5-turbo",
    };

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
      addResponseToContext(textResult);
      setUserInput("");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const renderConversation = () => {
    // eslint-disable-next-line array-callback-return
    return context.map((message) => {
      if (message.role !== "system") {
        return (
          <Grid p={1}>
            <Typography variant="caption">
              {message.role.toLocaleUpperCase()}
            </Typography>
            <Typography variant={message.role === "user" ? "body2" : "body1"}>
              {message.content}
            </Typography>
          </Grid>
        );
      }
    });
  };

  return (
    <Grid container p={3} flexDirection="column" display="flex">
      <Grid>
        {context && renderConversation()}
        {loading && <CircularProgress />}
      </Grid>
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
          Submit
        </Button>
      </Grid>
      <Grid>
        <Button variant="contained" onClick={removeContext}>
          Remove context
        </Button>
      </Grid>
    </Grid>
  );
}
