import { useState } from "react";
import pictionary from "../words.json";
import useSound from 'use-sound';
import clickSfx from '../click.mp3';

import {
  Grid,
  Typography,
} from "@mui/material";

const PictionaryGenerator = () => {

  const [play] = useSound(clickSfx);
  const [currentWord, setCurrentWord] = useState("");

  const generateRandomWord = () => {
    const randomIndex = Math.floor(
      Math.random() * pictionary["PALABRAS"].length
    );
    setCurrentWord(pictionary["PALABRAS"][randomIndex]);
    play();
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        sx={{ fontWeight: "bold", marginBottom: "1em", fontSize: "70px" }}
      >
        Pictionary
      </Typography>
      <Typography
        component="p"
        variant="body1"
        align="center"
        color="text.primary"
        sx={{ marginBottom: "1em", fontSize: "30px" }}

      >
        Click en la palabra para generar una nueva
      </Typography>



      <Grid
        alignItems="center"
        justify="center"
        onClick={generateRandomWord}
        sx={{
          borderRadius: "10em",
          backgroundColor: "primary.light",
          width: "70em",
          height: "30em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography component="h1" variant="h2" align="center" color="black" sx={{ fontWeight: "bold", fontSize: "160px" }}>
          {currentWord ? currentWord : "Click aquí"}
        </Typography>
      </Grid>
    </>
  );
};

export default PictionaryGenerator;
