import React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  Button,
  FormLabel,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const initialValues = {
  uid: 4,
  name: "",
  age: "",
  gmail: "",
  password: "",
  mobileNo: "",
  city: "",
  underage: "",
  gender: "",
  language: "",
};

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const { values, errors, handleChange, touched, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      console.log(values);
      axios.post("http://localhost:3000/resisterUser", values);
      action.resetForm();
      navigate("/login");
    },
  });

  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];
  const languages = ["English", "Hindi", "Gujarati", "Marathi"];

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={1}>
              <Grid item xs={6} direction="column">
                <TextField
                  error={errors.name && touched.name ? errors.name : null}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="family-name"
                  value={values.name}
                  onChange={handleChange}
                />{" "}
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
              </Grid>
              <Grid item xs={6} direction="column">
                <TextField
                  error={errors.age && touched.age ? errors.age : null}
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="family-name"
                  value={values.age}
                  onChange={handleChange}
                />
                {errors.age && touched.age ? <p>{errors.age}</p> : null}
              </Grid>
              <Grid item xs={6} direction="column">
                <TextField
                  error={errors.gmail && touched.gmail ? errors.gmail : null}
                  required
                  fullWidth
                  name="gmail"
                  label="E-mail"
                  type="E-mail"
                  id="E-mail"
                  value={values.gmail}
                  onChange={handleChange}
                />{" "}
                {errors.gmail && touched.gmail ? <p>{errors.gmail}</p> : null}
              </Grid>
              <Grid item xs={6} direction="column">
                <TextField
                  error={
                    errors.password && touched.password ? errors.password : null
                  }
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />{" "}
                {errors.password && touched.password ? (
                  <p>{errors.password}</p>
                ) : null}
              </Grid>
              <Grid item xs={6} direction="column">
                <TextField
                  error={
                    errors.mobileNo && touched.mobileNo ? errors.mobileNo : null
                  }
                  required
                  fullWidth
                  id="mobileNo"
                  label="MobileNo"
                  name="mobileNo"
                  autoComplete="family-name"
                  value={values.mobileNo}
                  onChange={handleChange}
                />{" "}
                {errors.mobileNo && touched.mobileNo ? (
                  <p>{errors.mobileNo}</p>
                ) : null}
              </Grid>
              <Grid item xs={6} direction="column">
                <FormControl
                  fullWidth
                  error={touched.city && Boolean(errors.city)}
                >
                  <InputLabel id="city-label">City</InputLabel>
                  <Select
                    labelId="city-label"
                    id="city"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                  >
                    {cities.map((city, index) => (
                      <MenuItem key={index} value={city}>
                        {city}
                      </MenuItem>
                    ))}
                  </Select>
                  {touched.city && errors.city ? (
                    <FormHelperText>{errors.city}</FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} direction="column">
                <FormControl
                  component="fieldset"
                  error={touched.underAge && Boolean(errors.underAge)}
                >
                  <FormLabel component="legend">Under Age</FormLabel>
                  <RadioGroup
                    row
                    aria-label="underAge"
                    name="underAge"
                    value={values.underAge}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="Over 18"
                    />
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="Under 18"
                    />
                  </RadioGroup>
                  {touched.underAge && errors.underAge ? (
                    <FormHelperText>{errors.underAge}</FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={6} direction="column">
                <FormControl
                  component="fieldset"
                  error={touched.gender && Boolean(errors.gender)}
                >
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                  {touched.gender && errors.gender ? (
                    <FormHelperText>{errors.gender}</FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={6} direction="column">
                <FormControl
                  component="fieldset"
                  error={touched.language && Boolean(errors.language)}
                >
                  <FormLabel component="legend">Languages</FormLabel>
                  <FormGroup>
                    {languages.map((lan, index) => (
                      <FormControlLabel
                        key={index}
                        control={<Checkbox />}
                        label={lan}
                        name="language"
                        value={lan}
                        onChange={handleChange}
                        checked={values.language.includes(lan)}
                      />
                    ))}
                  </FormGroup>
                  {touched.language && errors.language ? (
                    <FormHelperText>{errors.language}</FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
