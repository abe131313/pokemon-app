import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { pokemonDetailContext } from "../pages/_app.js";
import { useRouter } from 'next/router'

// import '../styles/card.css';

export default function MediaCard({ item, name, image, number, types }) {
  const router = useRouter();
  const { selectedPokemon, setSelectedPokemon } =
    useContext(pokemonDetailContext);
  const handleClick = (specificItem) => {
    setSelectedPokemon(specificItem);
  };
  return (
    <Card
      sx={{ maxWidth: "15rem" }}
      className="hover-card"
      onClick={() => {
        handleClick(item);
        router.push('/pokemonDetail')
      }}
    >
      <CardMedia
        component="img"
        style={{ height: 140, objectFit: "contain" }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{ color: "#B2B2B2" }}
        >
          #{number}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Box display="flex" flexDirection="row" justifyContent="flex-start">
          {types.map((e, i) => {
            let colorArray = ["#F45050", "#F9D949"];
            // async function getColors() {
            //   const url =
            //     "https://corsproxy.io/?" +
            //     encodeURIComponent(
            //       `https://api.imagga.com/v2/colors?image_url=${image}`
            //     );
            //   let response = await axios.get(url, {
            //     auth: {
            //       username: "acc_681253e9a0d402b",
            //       password: "29b559c37847d002516bb74493903385",
            //     },
            //   });
            //   console.log(response);
            //   setResponse(response);
            // getColors();

            return (
              <Box
                mx={1}
                backgroundColor={colorArray[i]}
                minWidth="5vw"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                borderRadius="5px"
                key={i}
              >
                <Typography variant="h6">{e}</Typography>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
}
