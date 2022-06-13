import { BootstrapInput } from "../../styled/Input";
import { FormControl, Box, Alert } from "@mui/material";
import { StyledButton } from "../../styled/Button";
import { useEffect, useState } from "react";
import { LoginInterFace } from "../../types/login";
import Joi from "joi";
import { StyledError } from "../../styled/Error";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/loginAction";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch:any=useDispatch();
  const [check, setCheck] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const { loading, hasError, errorStatus } = useSelector(
    (state: any) => state.status
  );
  const [errorList, setErrorList] = useState([]);
  const navigate=useNavigate()
  const handLeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    // console.log(value);
    setState({ ...state, [name]: value });
  };

  function validateLoginForm(login: LoginInterFace) {
    const schema = Joi.object({
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
    });

    return schema.validate(login, { abortEarly: false });
  }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorList([]);
    let validationLoginFormResult: any = validateLoginForm(state);
    if (validationLoginFormResult.error) {
      setErrorList(validationLoginFormResult.error.details);
    } else {
      
      console.log("done");
      dispatch(loginUser(state.email,state.password));
      setErrorList([]);
    }
    
  };

  useEffect(() => {
    if (!check) {
      setCheck(hasError == true);
      // console.log(errorStatus.status.hasError);

      console.log("error");
    } else {
      // console.log(errorStatus.status.hasError);
      setCheck(hasError == false);

      // console.log();
      navigate("/");

      console.log("nagivate");
    }
  }, [dispatch, hasError]);
  return (
    <form onSubmit={handleSubmit}>
      <BootstrapInput
        placeholder="Email"
        type="text"
        value={email}
        onChange={handLeInputChange}
        name="email"
      />
      {errorList
        ? errorList.map((error: any, index: any) => {
            if (error.path[0] === "email") {
              return <StyledError key={index}>email Invalid</StyledError>;
            }
          })
        : ""}
        <StyledError>{errorStatus}</StyledError>
      <BootstrapInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={handLeInputChange}
        sx={{ marginTop: "20px" }}
        name="password"
      />

      {errorList
        ? errorList.map((error: any, index: any) => {
            // console.log(error);

            if (error.path[0] === "password") {
              return <StyledError key={index}>Password Invalid</StyledError>;
            }
          })
        : ""}
      <StyledButton variant="contained" type="submit">
        Sign in
      </StyledButton>
    </form>
  );
}
