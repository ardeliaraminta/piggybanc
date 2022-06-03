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
import Login from './login';

export default function Signup() {
  const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const SignInWithGoogle = () =>{
        signInWithPopup(auth,provider).then(()=> {
            // localStorage.setItem("isAuth", true);
            navigate("/dashboard")
        });
    }
    
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

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/dashboard")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode,errorMessage);
      });
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
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ input: { color: 'white' } }}
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
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="Re-enter password"
              label="Re-enter password"
              type="Re-enter password"
              id="Re-enter password"
              autoComplete="Re-enter password"
              className='border-white'
            />
            {errorMessage && (<p className="error"> Error! {errorMessage} </p>)}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
          <Grid sx={{mt:2}}>- or -</Grid>
        </Box>
      </Container>
    </ThemeProvider>

      <div className='flex flex-col items-center p-5'>
        <GoogleButton type="dark" onClick={SignInWithGoogle}/>
      </div>

      </>
  )
}