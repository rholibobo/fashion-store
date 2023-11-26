
import styled from "@emotion/styled";
import { Button, InputLabel, OutlinedInput } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";

export const SignupContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 1rem 1rem;
`
export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  // Default label styles
  color: "#8b7d7d",
  "&.Mui-focused": {
    color: "#8b7d7d", // change the color to primary color on focus
  },
}));

export const StyledOutlinedInput = muiStyled(OutlinedInput)(({ theme }) => ({
  "&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline": {
    borderColor: "#CE5A67", // set a custom color here
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#CE5A67",
  },
  "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[400],
  },
  "& .MuiInputLabel-root": {
    color: "#000", // set the label color here
  },
  "&.Mui-focused .MuiInputLabel-root": {
    color: "#000", // set the label color here
  },
  
}));

export const StyledButton = styled(Button)`
  // background: #fb464c;
  text-transform: capitalize;
  background-color: #F4BF96;
  padding: 0.5rem 2rem 0.5rem 1rem;
  color: #000;
  &:hover {
    background: #F4BF80;
    color: #fff;
  }
`;
