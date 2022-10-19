import { useState } from "react";
import "./App.css";
import { Button, Typography, ThemeProvider, Grid } from "@mui/material";
import powergoats from "./powergoats.json";
import PowerGoatCard from "./components/PowerGoatCard";
import { Stack } from "@mui/system";
import { theme } from "../theme/theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Stack spacing={3}>
          <Typography>Here are our greatest Power Goats:</Typography>
          <Grid container spacing={2}>
            {powergoats.map((cardProps) => (
              <Grid item xs={12} sm={6} md={4}>
                <PowerGoatCard {...cardProps} />
              </Grid>
            ))}
          </Grid>
        </Stack>

        <div className="card">
          <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
