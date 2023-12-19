import * as Yup from "yup";
import { Form, Formik } from "formik";

import {
  StyledOutlinedInput,
  StyledInputLabel,
  StyledButton,
  SigninContainer,
} from "../RegistrationForms/styles";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { SignupCarousel } from "../SwiperCarousel/Swiper";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string()
    .max(255)
    .matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", {
      message:
        "Password Must Contain Minimum eight characters,at least one upper case,one lower case letter , one digit and  one special character. example:Password12#",
    })
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const SellerLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {};

  return (
    <SigninContainer>
      <Box sx={{ width: "50%" }}>
        <SignupCarousel />
      </Box>

      <Box
        sx={{
          width: "40%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            align="center"
            fontWeight="bold"
            gutterBottom
            // sx={{ color: "#F4BF96" }}
            color="backgroundtext.main"
          >
            Welcome to The Fashion Store
          </Typography>

          <Typography
            variant="h6"
            align="center"
            fontWeight="bold"
            gutterBottom
            // sx={{ color: "#F4BF96" }}
            color="backgroundtext.main"
          >
            Login as a Designer
          </Typography>
        </Box>
        <br />
        <br />
        {/* <br /> */}

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false);
            // handleSubmit(values);
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ marginBottom: "1.2rem" }}>
                  <FormControl fullWidth>
                    <StyledInputLabel>Email</StyledInputLabel>
                    <StyledOutlinedInput
                      id="component-outlined"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Email"
                      name="email"
                    />
                    {touched.email && errors.email && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text--register"
                      >
                        {errors.email}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={12} sx={{ marginBottom: "1.2rem" }}>
                  <FormControl fullWidth>
                    <StyledInputLabel>Password</StyledInputLabel>
                    <StyledOutlinedInput
                      id="component-outlined"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Password"
                      name="password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {touched.password && errors.password && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text--register"
                      >
                        {errors.password}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>

              <Link href="/forgotpassword" style={{ color: "blue", marginBottom: "1.2rem" }}>
                <Typography variant="body2" gutterBottom>Forgot Password?</Typography>
              </Link>

              <motion.div whileTap={{ scale: 0.9 }}>
                <StyledButton fullWidth>Sign in</StyledButton>
              </motion.div>

              
              <Box
                  sx={{
                    mt: 1.5,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Typography variant="body2" gutterBottom>
                      Dont Have an Account?{" "}
                    </Typography>
                    <Link style={{ color: "blue" }} href="/signup/designer">
                      <Typography variant="body2" gutterBottom>
                        Sign up
                      </Typography>
                    </Link>
                  </Box>

                  <Box>
                    <Link style={{ color: "blue" }} href="/signup/client">
                      <Typography variant="body2" gutterBottom>
                        Login up as Customer?
                      </Typography>
                    </Link>
                  </Box>
                </Box>
            </form>
          )}
        </Formik>
      </Box>
    </SigninContainer>
  );
};

export default SellerLoginForm;
