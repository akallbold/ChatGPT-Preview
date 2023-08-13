import { useState } from "react";
import Temperature from "./components/Temperature";
import SystemPersonality from "./components/SystemPersonality";
import useConversationContext from "./hooks/useConversationContext";
import { Button, Typography } from "@mui/material";
import { completionApiUrl } from "./data/constants";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState();
  const [temperature, setTemperature] = useState(1);
  const { context, addResponseToContext, removeContext } =
    useConversationContext();

  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }

  return (
    <div>
      <Typography variant="h1">
        <title>Advanced ChatGPT</title>
      </Typography>

      <main>
        <h3>OpenAI Powered Chatbot with Options</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter a prompt here"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <input type="submit" value="Ask assistant" />
        </form>
        {result && <Typography>{result}</Typography>}

        <Temperature
          temperature={temperature}
          setTemperature={setTemperature}
        />

        <SystemPersonality />
        <Button onClick={removeContext}>Start over and remove context</Button>
      </main>
    </div>
  );
}
