import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Alert,
  AlertTitle,
} from '@mui/material';

const FirstScreen = ({ msg, data, setData, errMsg }) => {
  const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

  return (
    <Grid container justifyContent="center">
      <Paper
        sx={{
          mt: 2,
          mb: 2,
          width: '80%',
          padding: '15px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" color="secondary" sx={{ mb: 2 }}>
          {msg}
        </Typography>
        <TextField
          id="name"
          sx={{ mb: 2 }}
          label="Name"
          variant="filled"
          value={data.name}
          onChange={onChange}
        />
        <TextField
          id="email"
          sx={{ mb: 2 }}
          label="Email"
          variant="filled"
          value={data.email}
          onChange={onChange}
        />
        <TextField
          id="mobile"
          sx={{ mb: 2 }}
          label="Phone Number"
          helperText="Enter 10-digit mobile no."
          variant="filled"
          value={data.mobile}
          onChange={onChange}
          inputProps={{ maxLength: 10, pattern: '[0-9]*' }}
        />
        {errMsg && (
          <Alert severity="error">
            <AlertTitle>{errMsg}</AlertTitle>
          </Alert>
        )}
      </Paper>
    </Grid>
  );
};

export default FirstScreen;
