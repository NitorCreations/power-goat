import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Card, CardMedia, Stack, Typography } from '@mui/material';
import powergoats from '../powergoats.json';
import BillyTheGoat from '../assets/Billy.png';
import KurtTheGoat from '../assets/Kurt.png';
import AdeleTheGoat from '../assets/Adele.png';

export interface PowerGoatCardProps {
  //Should this include id, image and alt text?
  name: string;
  skill: string;
  story: string;
}

{
  powergoats.map((record, i) => (
    <li key={i}>
      {record.id} - {record.name} {record.skill}
      {record.story}
      {/* Should this include id, image and alt text?*/}
    </li>
  ));
}

const PowerGoatCard = ({ name, skill, story }: PowerGoatCardProps) => {
  return (
    <Card>
      <CardMedia
        component='img'
        height='140'
        src={AdeleTheGoat} // We'd want this to be a reference to one of our Goat images
        alt="I'd rather have this alt text from json" // We'd want this to be a reference to the correct Goat image alt text
      />
      <CardContent>
        <Stack spacing={2}>
          <Typography variant='h5' align='left'>
            {name}
          </Typography>
          <Typography variant='body2' align='left'>
            {skill}
          </Typography>
          <Typography variant='body2' align='left'>
            {story}
          </Typography>
        </Stack>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button>Check the Goat</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PowerGoatCard;
