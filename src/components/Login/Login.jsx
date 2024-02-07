import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import Axios from "../../services/axios.js";
import PropTypes from "prop-types";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, helpers) => {
      try {
        const response = await Axios.post('/login',values);
        if (response.data.success) {
          toast.success(response.data.message);
              localStorage.setItem("token", response.data.token);
              navigate("/home");
        } else {
          console.log(response.data.message);
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error(error);
        helpers.setErrors({ submit: error.message });
        toast.error(`${error.response.data.message}`);
      }
    },
  });

  Login.propTypes = {
    value: PropTypes.string,
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            backgroundColor: "#fafaf0",
            display: "flex",
            flexDirection: "column",
            width: { xs: "75%", sm: 500 },
            maxWidth: 500,
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            padding: 3,
            marginY: { xs: 10, sm: 14.5, md: 26.3, lg: 10 },
            borderRadius: 5,
            boxShadow: "5px 5px 10px #ccc ",
            ":hover": {
              boxShadow: "10px 10px 20px #ccc ",
            },
          }}
        >
          <Box mt={2}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
            ></Box>
          </Box>
          <Typography variant="h4" padding={3} textAlign="center">
  
         
          </Typography>

          <Typography variant="h6" padding={3} textAlign="center">
            Welcome Back
          </Typography>

          <TextField
            size="small"
            fullWidth
            sx={{ backgroundColor: "white" }}
            margin="normal"
            name="email"
            value={formik.values.email} 
            error={formik.errors.email}
            helperText={formik.errors.email}
            onChange={formik.handleChange}
            type={"email"}
            label="Email"
            variant="outlined"
          />
          <TextField
            size="small"
            fullWidth
            sx={{ backgroundColor: "white" }}
            margin="normal"
            type={"password"}
            label="Password"
            name="password"
            value={formik.values.password} //values
            error={formik.errors.password}
            helperText={formik.errors.password}
            onChange={formik.handleChange}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="warning"
            name="submit"
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Login
          </Button>

        </Box>
      </form>
    </div>
  );
};

export default Login;
