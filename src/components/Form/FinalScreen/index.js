import React from 'react';
import {
  Grid,
  Paper,
  Box,
  Button,
  Alert,
  AlertTitle,
  Typography,
  Chip,
} from '@mui/material';

const FinalScreen = ({
  setActiveStep,
  data,
  checked,
  otp,
  setData,
  setErrMsg,
  setChecked,
  setIsReady,
  setOTP,
}) => {
  const handleReset = () => {
    setOTP('');
    setChecked([]);
    setActiveStep(0);
    setErrMsg(false);
    setIsReady(false);
    setData({ name: '', email: '', mobile: '' });
  };

  return (
    <Grid container justifyContent="center">
      <Paper
        sx={{
          mt: 5,
          mb: 2,
          width: '80%',
          padding: '20px 20px',
        }}
      >
        <Alert severity="success">
          <AlertTitle>Verified!</AlertTitle>
          <Box sx={{ mt: 2, mb: 2, marginLeft: '20px' }}>
            <strong>User Details:</strong>
            <Box sx={{ marginLeft: '20px' }}>
              <Typography>Name: {data.name}</Typography>
              <Typography>Email: {data.email}</Typography>
              <Typography>Mobile: +91 {data.mobile}</Typography>
              <Typography>
                Interests:
                {checked.map((item, i) => (
                  <Chip key={i} label={item} sx={{ marginLeft: '20px' }} />
                ))}
              </Typography>
              <Typography>OTP: {otp}</Typography>
            </Box>
          </Box>
        </Alert>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
          <Button variant="contained" onClick={handleReset} size="large">
            Reset
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default FinalScreen;
