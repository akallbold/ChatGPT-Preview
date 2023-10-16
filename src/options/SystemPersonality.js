import * as React from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";
import useConversationContext from "../hooks/useConversationContext";

export default function SystemPersonality() {
  const [otherValue, setOtherValue] = React.useState("");
  const { personality, setPersonality } = useConversationContext();
  console.log({ personality });

  return (
    <Box sx={{ width: 300 }}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          System Personality
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={personality}
          onChange={(event) => {
            setPersonality(event.target.value);
          }}
        >
          <FormControlLabel
            value="neutral"
            control={<Radio />}
            label="Neutral"
          />
          <FormControlLabel value="funny" control={<Radio />} label="Funny" />
          <FormControlLabel
            value={otherValue}
            control={
              <TextField onChange={(e) => setOtherValue(e.target.value)} />
            }
            label="Other"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
