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

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .max(255)
    .matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", {
      message:
        "Password Must Contain Minimum eight characters,at least one upper case,one lower case letter , one digit and  one special character. example:Password12#",
    })
    .required("Password is required"),
  confirm_password: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const initialValues = {
  password: "",
  confirm_password: "",
};

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

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
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#F4BF96" }}
          >
            Reset Password
          </Typography>

          <Typography
            variant="body1"
            align="center"
            // fontWeight="bold"
            gutterBottom
            sx={{ color: "#F4BF96" }}
          >
            Enter new password below to reset password.
          </Typography>
        </Box>
        <br />
        <br />

        <Formik
          initialValues={initialValues}
          validationSchema={resetPasswordSchema}
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
              <Grid container>
                <Grid item xs={12} md={12} sx={{marginBottom: "1.2rem"}}>
                  <FormControl fullWidth>
                    <StyledInputLabel>New Password</StyledInputLabel>
                    <StyledOutlinedInput
                      id="component-outlined"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="New Password"
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

                <Grid item xs={12} md={12} sx={{marginBottom: "1.2rem"}}>
                    <FormControl fullWidth>
                      <StyledInputLabel>Confirm Password</StyledInputLabel>
                      <StyledOutlinedInput
                        id="component-outlined"
                        type={showConfirmPassword ? "text" : "password"}
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Confirm Password"
                        name="confirm_password"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {touched.confirm_password && errors.confirm_password && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text--register"
                        >
                          {errors.confirm_password}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
              </Grid>

              <motion.div whileTap={{ scale: 0.9 }}>
                <StyledButton fullWidth>Submit</StyledButton>
              </motion.div>
            </form>
          )}
        </Formik>
      </Box>
    </SigninContainer>
  );
};

export default ResetPasswordForm;
