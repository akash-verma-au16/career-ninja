import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Checkbox,
  ListItemIcon,
  Paper,
  Grid,
} from '@mui/material';
import interests from '../../../Json/activities.json';

const SecondScreen = ({ msg, checked, setChecked }) => {
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
        <List>
          {interests.map((value, i) => {
            const labelId = `checkbox-list-label-${i}`;

            return (
              <ListItem key={labelId} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value.title)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value.title) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Grid>
  );
};

export default SecondScreen;
