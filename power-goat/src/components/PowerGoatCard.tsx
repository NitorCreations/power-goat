import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Card, CardMedia, Stack, Typography } from "@mui/material";
import powergoats from "../powergoats.json";

export interface PowerGoatCardProps {
  name: string;
  skill: string;
  story: string;
}

{
  powergoats.map((record, i) => (
    <li key={i}>
      {record.id} - {record.name} {record.skill}
      {record.story}
    </li>
  ));
}

const PowerGoatCard = ({ name, skill, story }: PowerGoatCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="100%"
        src={`/images/${name}.png`} //This works if the filename is EXACTLY same as goat "name"
        alt={`Here is ${name}`}
        sx={{ pt: 3 }}
      />
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h5" align="left">
            {name}
          </Typography>
          <Typography variant="overline" align="left">
            {skill}
          </Typography>
          <Typography variant="body2" align="left">
            {story}
          </Typography>
        </Stack>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>Check the Goat</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PowerGoatCard;
