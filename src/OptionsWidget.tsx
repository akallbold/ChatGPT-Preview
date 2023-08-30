import { Checkbox, Grid } from "@mui/material";

interface IOptionsWidgetProps {
  children?: React.ReactNode;
  option?: string;
  optionsArray?: string[];
  setOptionsArray?: Function;
}

export default function OptionsWidget(props: IOptionsWidgetProps) {
  const { children, option } = props;
  return (
    <Grid
      container
      sx={{ border: "5px solid black" }}
      p={2}
      display="flex"
      flexDirection="row"
      width="100%"
    >
      <Checkbox value={option} />
      {children}
    </Grid>
  );
}
