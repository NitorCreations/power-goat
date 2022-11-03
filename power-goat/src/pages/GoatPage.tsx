import {
  Box,
  Button,
  CardMedia,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import { ArrowBack, Favorite, Star } from '@mui/icons-material';
import React from 'react';

export const GoatPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Stack spacing={3} alignItems='flex-start'>
        <Button
          variant='text'
          startIcon={<ArrowBack />}
          sx={{ alignSelf: 'flex-start' }}
        >
          Back
        </Button>
        <Typography variant='h1'>This is Billy</Typography>
        <Button
          variant='text'
          endIcon={<Favorite />}
          sx={{ alignSelf: 'flex-start' }}
        >
          Favorite
        </Button>
        <CardMedia
          component='img'
          height='100%'
          src={`/images/Billy.png`} //This works if the filename is EXACTLY same as goat "name"
          alt={`Here is Billy`}
          sx={{ pt: 3 }}
        />

        <Stack spacing={1}>
          <Typography variant='overline'>Special Skills</Typography>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Star />
              </ListItemIcon>
              <ListItemText primary='Cooking' />
            </ListItemButton>
          </ListItem>
        </Stack>
        <Stack spacing={2}>
          <Typography>Story</Typography>
          <Typography>
            Billy was born in the kitchen. Water was bubling on the stove and
            sun was shining through the kitchen windows.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GoatPage;
