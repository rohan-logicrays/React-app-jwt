import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { editSchema } from "../schemas";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import {
  Grid,
  TextField,
  Typography,
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
  FormLabel,
  ThemeProvider,
  Container,
  CssBaseline,
  createTheme,
} from "@mui/material";

const theme = createTheme();
export default function EditUserData(props) {
  const initialValues = {
    name: props.name,
    age: props.age,
    gmail: props.gmail,
    mobileNo: props.mobileNo,
    city: props.city,
    underAge: props.underAge,
    gender: props.gender,
    language: props.language,
  };

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
  const { values, errors, handleChange, touched, handleSubmit } = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: editSchema,
    onSubmit: (values, action) => {
      axios
        .put(`http://localhost:3000/updateUser/${props.editId}`, values)
        .then((response) => {
          props.getAllData();
        });
      action.resetForm();
    },
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    errors.name ||
    errors.age ||
    errors.city ||
    errors.gender ||
    errors.gmail ||
    errors.language ||
    errors.underAge ||
    errors.mobileNo
      ? setOpen(true)
      : setOpen(false);
  };

  return (
    <div>
      <Fab
        color="primary"
        aria-label="edit"
        style={{ width: "35px", height: "25px" }}
        onClick={handleClickOpen}
      >
        <Tooltip title="Edit">
          <EditIcon />
        </Tooltip>
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Edit data
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
                      error={
                        errors.gmail && touched.gmail ? errors.gmail : null
                      }
                      required
                      fullWidth
                      name="gmail"
                      label="E-mail"
                      type="E-mail"
                      id="E-mail"
                      value={values.gmail}
                      onChange={handleChange}
                    />{" "}
                    {errors.gmail && touched.gmail ? (
                      <p>{errors.gmail}</p>
                    ) : null}
                  </Grid>

                  <Grid item xs={6} direction="column">
                    <TextField
                      error={
                        errors.mobileNo && touched.mobileNo
                          ? errors.mobileNo
                          : null
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
                  <Grid item xs={12} direction="column">
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
                  onClick={handleClose}
                >
                  Edit
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item></Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}
