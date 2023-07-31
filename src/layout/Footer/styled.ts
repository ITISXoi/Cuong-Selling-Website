import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(() => ({
  flex: 1,
  "& fieldset": {
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
  },
}));

const CustomTypoFooter = styled(Typography)(({ theme }) => ({
  position: "relative",
  paddingBottom: '20px',
  "&::before": {
    position: "absolute",
    content: '""',
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    width: "40px",
    height: "3px",
  },
}));

export { StyledTextField, CustomTypoFooter };
