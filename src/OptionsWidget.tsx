import { Checkbox, Grid } from "@mui/material";
import useOptions from "./hooks/useOptions";
import useConversationContext from "./hooks/useConversationContext";

interface IOptionsWidgetProps {
  children?: React.ReactNode;
  option: string;
  alwaysSelected?: boolean;
}

export default function OptionsWidget(props: IOptionsWidgetProps) {
  const { children, option, alwaysSelected } = props;
  const { optionsObject, setOptionsObject } = useOptions();
  const { personality } = useConversationContext();
  // @ts-ignore  because we know that the option will be in the optionsObject
  const optionProperties = optionsObject[option] || null;
  const selected = optionProperties.selected || alwaysSelected;
  // @ts-ignore  because we know that the option will be in the optionsObject
  const value =
    option === "systemPersonality" ? personality : optionProperties.value;
  return (
    <Grid
      container
      sx={{ border: "5px solid black" }}
      p={2}
      display="flex"
      flexDirection="row"
      width="100%"
    >
      <Checkbox
        value={option}
        checked={selected}
        onClick={() =>
          setOptionsObject({
            ...optionsObject,
            [option]: { value: value, selected: !selected },
          })
        }
      />
      {children}
    </Grid>
  );
}
