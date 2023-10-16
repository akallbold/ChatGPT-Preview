import { useState } from "react";

function useOptions() {
  const [optionsObject, setOptionsObject] = useState({
    temperature: { value: 1, selected: false },
    topp: { value: 0.5, selected: false },
    // systemPersonality: { value: null, selected: false },
    n: { value: 1, selected: false },
    maxTokens: { value: 10, selected: false },
  });

  return {
    optionsObject,
    setOptionsObject,
  };
}

export default useOptions;
