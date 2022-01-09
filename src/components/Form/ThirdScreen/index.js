import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import OtpInput from 'react-otp-input';

const ThirdScreen = ({ msg, data, otp, setOTP }) => {
  const handleChange = (otp) => setOTP(otp);

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
        <Typography
          variant="h6"
          color="secondary"
          sx={{ mb: 2 }}
          align="center"
        >
          {msg}
        </Typography>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          inputStyle={{ padding: '10px' }}
          containerStyle={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
          }}
          shouldAutoFocus
          isInputNum
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }} align="center">
          An OTP has been sent on {data.mobile}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mb: 2 }}
          align="center"
          color="primary"
        >
          Click here to resend OTP
          {/* Not an actual link */}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ThirdScreen;
