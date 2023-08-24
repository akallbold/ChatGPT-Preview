import React, { useState } from "react";
import {
  funnyPersonalityString,
  neutralPersonalityString,
} from "../data/constants";

function useConversationContext() {
  const [personality, setPersonality] = useState("neutral");
  const mapPersonalityToText = () => {
    switch (personality) {
      case "neutral":
        return neutralPersonalityString;
      case "funny":
        return funnyPersonalityString;
      default:
        return neutralPersonalityString;
    }
  };

  const removeContext = () => {
    setContext([{ role: "system", content: mapPersonalityToText() }]);
  };

  const [context, setContext] = useState([
    { role: "system", content: mapPersonalityToText() },
  ]);
  const [otherValue, setOtherValue] = React.useState("");

  const addResponseToContext = (response) => {
    setContext((prevContext) => [...prevContext, response]);
    console.log("This is what context looks like after adding: ", { context });
  };

  return {
    addResponseToContext,
    context,
    otherValue,
    personality,
    removeContext,
    setOtherValue,
    setPersonality,
  };
}

export default useConversationContext;
