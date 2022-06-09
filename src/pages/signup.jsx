import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'
import { useState } from 'react';
import Login from './login';
import axios from 'axios';
export default function Signup() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setconfPassword] = useState('');
  const [emailErr, setemailErr] = useState('');
  const [passwordErr, setpasswordErr] = useState('');
  const [confPasswordErr, setconfPasswordErr] = useState('');

  const set = 5; 
    const navigate = useNavigate();

    
    const theme = createTheme({
      palette: {
        secondary: {
          main: '#fff',
          contrastText: '#fff',
        },
        background: {
          default: "#273250"
        },
        text: {
          primary: "#ffffff"
        }
      },
    });

    const handleChange = (e, name) => {
      const user = {};
      const emailRegEx = RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      user[name] = e.target.value;
      switch (name) {
        case 'email':
          setEmail(user.email);
          !emailRegEx.test(user.email) ? setemailErr('Invalid Email!') : setemailErr('');
          break;
        case 'password':
          setPassword(user.password);
          user.password.length < 8 ? setpasswordErr('Password must be at least 8 characters!') : setpasswordErr('');
          break;
        case 'confPassword':
          setconfPassword(user.confPassword);
          user.confPassword !== password ? setconfPasswordErr('Passwords do not match!') : setconfPasswordErr('');
          break;
        default:
          break;
      }
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      try{
        const res = await axios.post("/user", {
          email: email,
          password: password
        })
        setMessage("Created User");
        setTimeout(()=>{
          return navigate("/login");
        }, 2000)
      }catch(err){
        console.log(err)
      }
    };
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              onChange={e=>setEmail(e.currentTarget.value)}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={email != email.includes("@")}
              helperText={email.includes("@") ? "" : "Invalid Email!"}
              autoFocus
              sx={{ input: { color: 'white' } }}
            />
            <TextField
              onChange={e=>setPassword(e.currentTarget.value)}
              margin="normal"
              required
              fullWidth 
              name="password"
              label="Password"
              type="password"
              id="password"
              // error={}
              // helperText={}
              autoComplete="current-password"
              className='border-white'
            />
             <TextField
              margin="normal"
              onChange={e=>setconfPassword(e.currentTarget.value)}
              required
              fullWidth
              type="password"
              name="confPassword"
              label="Re-enter password"
              id="Re-enter password"
              error={ confPassword != password}
              helperText={confPassword === password ? "" : "Password does not match! "}
              autoComplete="Re-enter password"
              className='border-white'
            />
            {message && message}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={e=>handleSubmit(e)}
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" className='underline'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/login" className='underline'>
                 Already have an account?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>


      </>
  )
}