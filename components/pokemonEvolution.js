import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function PokemonEvolution({ data }) {
  let evolutions = data.pokemon.evolutions;
  return (
    <>
      <Stack direction="row" justifyContent="space-around">
        {evolutions.map((e, i) => {
          return (
            <>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  sx={{ height: 250, objectFit: "contain" }}
                  image={e.image}
                  title={e.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Stack direction="row" spacing={1}>
                      {e.types.map((e, i) => {
                        let colorArray = ["#F45050", "#F9D949"];
                        return (
                          <Box
                            bgcolor={colorArray[i]}
                            borderRadius="5px"
                            minWidth="max-content"
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            padding={1}
                          >
                            {e}
                          </Box>
                        );
                      })}
                    </Stack>
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
              {i === evolutions.length - 1 ? null : (
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <ArrowRightAltIcon />{" "}
                </Box>
              )}
            </>
          );
        })}
      </Stack>
    </>
  );
}

export default PokemonEvolution;
