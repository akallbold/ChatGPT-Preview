import { Grid } from "@mui/material";

interface IOptionsWidgetProps {
  children?: React.ReactNode;
}

export default function OptionsWidget(props: IOptionsWidgetProps) {
  const { children } = props;
  return (
    <Grid container sx={{ border: "5px solid black" }} p={2}>
      {children}
    </Grid>
  );
}
