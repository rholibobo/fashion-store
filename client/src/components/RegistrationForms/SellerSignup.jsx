import * as Yup from "yup";
import { Form, Formik } from "formik";

import {
  StyledOutlinedInput,
  StyledInputLabel,
  SignupContainer,
  StyledButton,
} from "./styles";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { SignupCarousel } from "../SwiperCarousel/Swiper";
import {
  CheckBox,
  StarRateSharp,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import nigeriaStates from "./nigeria-states.json";

const registerSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(30).required("First Name is required"),
  lastName: Yup.string().min(2).max(30).required("Last Name is required"),
  companyName: Yup.string().min(2).max(30).required("First Name is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
    .required("Phone number is required"),
  address: Yup.string().max(255).required("Address is required"),
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
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  phoneNumber: "",
  location: "",
  address: "",
  password: "",
  confirm_password: "",
};

const SellerSignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = () => {};

  return (
    <div>
      <SignupContainer>
        <Box sx={{ width: "50%" }}>
          <SignupCarousel />
        </Box>

        <Box sx={{ width: "50%", padding: "1.5rem 1.5rem 0 1.5rem", }}>
          <Box>
            <Typography
              variant="h5"
              align="center"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#F4BF96" }}
            >
              Welcome to The Fashion Store
            </Typography>

            <Typography
              variant="h6"
              align="center"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#F4BF96" }}
            >
              Create Account as Designer
            </Typography>

            {/* <Typography
              // variant="h4"
              align="center"
              // fontWeight="bold"
              gutterBottom
            >
              Create Account as Customer ?
            </Typography> */}
          </Box>
          <br />

          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
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
                <Grid container spacing={2} sx={{ marginBottom: "1.5rem" }}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <StyledInputLabel>First Name</StyledInputLabel>
                      <StyledOutlinedInput
                        id="component-outlined"
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="first Name"
                      />
                      {touched.firstName && errors.firstName && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text--register"
                        >
                          {errors.firstName}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <StyledInputLabel>Last Name</StyledInputLabel>
                      <StyledOutlinedInput
                        id="component-outlined"
                        type="text"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Last Name"
                        name="lastName"
                      />
                      {touched.lastName && errors.lastName && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text--register"
                        >
                          {errors.lastName}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginBottom: "1.5rem" }}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <StyledInputLabel>Brand Name</StyledInputLabel>
                      <StyledOutlinedInput
                        id="component-outlined"
                        type="text"
                        value={values.companyName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Brand Name"
                        name="companyName"
                      />
                      {touched.companyName && errors.companyName && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text--register"
                        >
                          {errors.companyName}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
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
                </Grid>
                <Grid container spacing={2} sx={{ marginBottom: "1.5rem" }}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <StyledInputLabel>Phone Number</StyledInputLabel>
                      <StyledOutlinedInput
                        id="component-outlined"
                        type="tel"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Phone Number"
                        name="phoneNumber"
                      />
                      {touched.phoneNumber && errors.phoneNumber && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text--register"
                        >
                          {errors.phoneNumber}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <StyledInputLabel>Location</StyledInputLabel>
                      <Select
                        id="demo-simple-select-helper"
                        value={values.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Location"
                        name="location"
                      >
                        {nigeriaStates.map((state, i) => (
                          <MenuItem key={i} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </Select>
                      {touched.location && errors.location && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text--register"
                        >
                          {errors.location}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
                  <Grid item xs={12} md={6}>
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
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
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <StyledInputLabel>Confirm Password</StyledInputLabel>
                      <StyledOutlinedInput
                        id="component-outlined"
                        type={showConfirmPassword ? "text" : "password"}
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Password"
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

                <FormGroup sx={{ marginBottom: "0.5rem" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <Typography
                        fontSize="0.8rem"
                        fontWeight={550}
                        variant="span"
                        to="#"
                      >
                        Agree with Terms & Condition.
                      </Typography>
                    }
                  />
                </FormGroup>

                <motion.div whileTap={checked && { scale: 0.9 } }>
                  <StyledButton disabled={!checked ? true : false} fullWidth>Sign up</StyledButton>
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
                      Have an Account?{" "}
                    </Typography>
                    <Link style={{ color: "blue" }} href="#">
                      <Typography variant="body2" gutterBottom>
                        Login
                      </Typography>
                    </Link>
                  </Box>

                  <Box>
                    <Link style={{ color: "blue" }} href="#">
                      <Typography variant="body2" gutterBottom>
                        Sign up as Customer?
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </SignupContainer>
    </div>
  );
};

export default SellerSignupForm;
