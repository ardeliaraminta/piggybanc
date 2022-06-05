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
import axios from 'axios';
export default function Signup() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
              autoComplete="current-password"
              className='border-white'
            />
             <TextField
              margin="normal"
              onChange={e=>setPassword(e.currentTarget.value)}
              required
              fullWidth
              type="password"
              name="Re-enter password"
              label="Re-enter password"
              id="Re-enter password"
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