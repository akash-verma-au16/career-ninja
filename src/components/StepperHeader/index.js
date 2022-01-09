import React from 'react';
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material';

const StepperHeader = ({ title, steps, activeStep }) => (
  <Box>
    <Typography variant="h3" sx={{ mb: 3 }} align="center" color="#fd7e14">
      {title}
    </Typography>
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label, index) => {
        const stepProps = {};
        const labelProps = {};
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  </Box>
);

export default StepperHeader;
