import * as Yup from "yup";
import { Form, Formik } from "formik";

import styles from "./forgot.module.css"

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

import { useRouter } from "next/navigation";

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
});

const initialValues = {
  email: "",
};

const ForgotPasswordForm = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/resetpassword");
  };

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
            Forgot Password?
          </Typography>

          <Typography
            variant="body1"
            align="center"
            // fontWeight="bold"
            gutterBottom
            sx={{ color: "#F4BF96" }}
          >
            Enter your email address below to receive instructions to reset
            password
          </Typography>
        </Box>
        <br />
        <br />

        <Formik
          initialValues={initialValues}
          validationSchema={forgotPasswordSchema}
          onSubmit={( { setSubmitting }) => {
            // setSubmitting(false);
            handleSubmit();
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
              </Grid>

              <motion.div whileTap={{ scale: 0.9 }} onClick={handleSubmit}>
                <StyledButton fullWidth>Submit</StyledButton>
              </motion.div>
            </form>
          )}
        </Formik>
      </Box>
    </SigninContainer>
  );
};

export default ForgotPasswordForm;
