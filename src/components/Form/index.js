import './form.css';
import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box } from '@mui/material';
import StepperHeader from '../StepperHeader';
import StepperControl from '../StepperControl';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FinalScreen from './FinalScreen';

const steps = ['User Details', 'Your Interests', 'OTP Verification'];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [checked, setChecked] = useState([]);
  const [otp, setOTP] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  useEffect(() => {
    data.name && data.email && data.mobile
      ? setIsReady(true)
      : setIsReady(false);
    setErrMsg(false);
  }, [data]);

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <FirstScreen
            msg={steps[0]}
            data={data}
            setData={setData}
            errMsg={errMsg}
          />
        );
      case 1:
        return (
          <SecondScreen
            msg={steps[1]}
            checked={checked}
            setChecked={setChecked}
          />
        );
      case 2:
        return (
          <ThirdScreen otp={otp} data={data} setOTP={setOTP} msg={steps[2]} />
        );
      default:
        return;
    }
  };

  return (
    <Grid container flexDirection="column" alignItems="center">
      <Paper elevation={8} className="card">
        <Box className={`header-box ${activeStep === steps.length && 'start'}`}>
          <StepperHeader
            steps={steps}
            title="User Form"
            activeStep={activeStep}
          />
          {getStepContent()}
          {activeStep === steps.length ? (
            <FinalScreen
              otp={otp}
              data={data}
              setOTP={setOTP}
              setData={setData}
              checked={checked}
              setErrMsg={setErrMsg}
              setChecked={setChecked}
              setIsReady={setIsReady}
              setActiveStep={setActiveStep}
            />
          ) : (
            <StepperControl
              otp={otp}
              data={data}
              steps={steps}
              isReady={isReady}
              submitText="Verify"
              setErrMsg={setErrMsg}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          )}
        </Box>
      </Paper>
    </Grid>
  );
};

export default Form;
