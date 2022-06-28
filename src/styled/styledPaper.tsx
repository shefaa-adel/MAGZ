import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
export const ProfileDataItem = styled(Paper)(() => ({
  // padding:'10px',
  paddingLeft: "20px",
  minHeight: "45px",
  lineHeight: "45px",
  // ahmed

}));

export const WeatherPaper = styled(Paper)(() => ({
  minWidth: "25%",
  padding: "25px",
  height: "250px", 
  // ahmed

}));

export const QuotePaper = styled(Paper)(() => ({
  width: "80%",
  backgroundColor: "rgba(77,126,150,.47)",
  height: "350px",
  margin:"auto"
 

}));
