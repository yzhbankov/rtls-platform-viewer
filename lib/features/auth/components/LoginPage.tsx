import React, { useState, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '../../../components';
import { useAuth } from '../hooks';


export function LoginPage(): ReactElement {
     const [password, setPassword] = useState('');
     const [email, setEmail] = useState('');
     const { login, error, loggingInProcess, hasToken } = useAuth();

     if (!loggingInProcess && !error && hasToken) {
          return <Navigate replace to="/home" />
     }
     // todo: add some css framework
     return (
          <div style={{ margin: "300px auto", width: 460, position: 'relative' }}>
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'column',
                    }}
               >
                    <h1>Sign In</h1>
                    <TextField
                         id="email"
                         label="Email address"
                         variant="outlined"
                         size="small"
                         fullWidth
                         required
                         onChange={(e) => {
                              setEmail(e.target.value)
                         }}
                    />
                    <Box sx={{ height: 20 }} />
                    <TextField
                         id="password"
                         label="Password"
                         variant="outlined"
                         size="small"
                         fullWidth
                         required
                         onChange={(e) => {
                              setPassword(e.target.value)
                         }}
                    />
                    <Box sx={{ height: 20 }} />
                    <Button
                         disabled={loggingInProcess || !password || !email}
                         onClick={() => {
                              login({ password, email });
                         }}
                    >
                         Sign in
                         {loggingInProcess && <CircularProgress />}
                    </Button>
                    {error && (<div style={{ color: 'red' }}>Invalid password or email</div>)}
               </Box>
          </div >
     )
}
