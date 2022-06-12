import { Button } from '@mui/material'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, provider } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'
import { useState } from 'react';
import SignUp from './signup';
import axios from 'axios';
import {useCookies} from 'react-cookie';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [cookies, setCookie] = useCookies(['token']);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //   navigate("/dashboard")
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   setErrorMessage(errorCode,errorMessage);
    // });

    const res = await axios.post('https://piggy-be.herokuapp.com/user/login', {
      email: email,
      password: password,
    })
    console.log(res)
    setCookie('token', res.data.token, {path: '/'})
    setCookie('email', email, {path: '/'})
    return navigate("/profile")
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
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ input: { color: 'white' } }}
                onChange={e => setEmail(e.currentTarget.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className='border-white'
                onChange={e => setPassword(e.currentTarget.value)}
              />
              {errorMessage && (<p className="error"> Error! {errorMessage} </p>)}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={async e => await handleSubmit()}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/" className='underline'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" className='underline'>
                    Don't have an account?
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
