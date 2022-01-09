import React, { Fragment } from 'react';
import { Box, Button } from '@mui/material';
import { validateEmail, validateMobile } from '../../utils/validation';

const StepperControl = ({
  otp,
  data,
  steps,
  activeStep,
  setActiveStep,
  submitText,
  isReady,
  setErrMsg,
}) => {
  const handleNext = () => {
    if (!isReady) setErrMsg('All fields are required!!');
    else if (!validateEmail(data.email)) setErrMsg('Invalid Email!!');
    else if (!validateMobile(data.mobile)) setErrMsg('Invalid Mobile!!');
    else setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  return (
    <Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button
          variant="contained"
          color={activeStep === steps.length - 1 ? 'success' : 'secondary'}
          onClick={handleNext}
          disabled={activeStep === steps.length - 1 && otp.length !== 4}
        >
          {activeStep === steps.length - 1 ? submitText : 'Next'}
        </Button>
      </Box>
    </Fragment>
  );
};

export default StepperControl;
