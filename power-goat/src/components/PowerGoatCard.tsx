import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Card, Stack, Typography } from "@mui/material";
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

export const PowerGoatCard = ({ name, skill, story }: PowerGoatCardProps) => {
  <Card>
    <CardContent>
      <Stack spacing={2}>
        <Typography>{name}</Typography>
        <Typography>{skill}</Typography>
        <Typography>{story}</Typography>
      </Stack>
      <CardActions>
        <Button>Check the Power Goat</Button>
      </CardActions>
    </CardContent>
  </Card>;
};

export default PowerGoatCard;
