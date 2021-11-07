import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from '../hooks';

export function LoginPage() {
     const [password, setPassword] = useState('');
     const [email, setEmail] = useState('');
     const { login, error, loggingInProcess, hasToken } = useAuth();

     if (!loggingInProcess && !error && hasToken) {
          return <Navigate replace to="/home" />
        }
     // todo: add some css framework
     return (
          <div style={{ margin: "0 auto", width: 460, position: 'relative' }}>
               <div style={{ margin: '120px 0 auto', padding: '30px 10% 50px', border: '1px solid #eaeced', overflow: 'hidden', position: 'relative' }}>
                    <form style={{ position: 'relative' }}>
                         <label htmlFor="email">Email:</label>
                         <br />
                         <input
                              type="text"
                              id="email"
                              value={email}
                              onChange={(e) => {
                                   setEmail(e.target.value)
                              }}
                         />
                         <br />
                         <label htmlFor="password">Password:</label>
                         <br />
                         <input
                              type="password"
                              id="password"
                              value={password}
                              onChange={(e) => {
                                   setPassword(e.target.value)
                              }}
                         />

                    </form>
                    <Button
                         variant="contained"
                         onClick={() => {
                              login({ password, email });
                         }}
                    >
                         Sign in
                         {loggingInProcess && <CircularProgress />}
                    </Button>
                    {error && (<div style={{ color: 'red' }}>Invalid password or email</div>)}
               </div>
          </div >
     )
}
