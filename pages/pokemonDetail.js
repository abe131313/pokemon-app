import { Box, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useContext, useEffect } from "react";
import { pokemonDetailContext } from "../pages/_app.js";
import { BarChart } from "@/components/Barchart.js";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import e from "cors";

export default function PokemonDetailPage() {
  const { selectedPokemon, setSelectedPokemon } =
    useContext(pokemonDetailContext);

  let resistancesArr = selectedPokemon.resistant.map((e) => {
    return e + ", ";
  });

  let weaknessArr = selectedPokemon.weaknesses.map((e) => {
    return e + ", ";
  });

  // useEffect(() => {
  //     console.log(selectedPokemon)
  // },[selectedPokemon]);
  return (
    <>
      <div>
        <Container maxWidth="100vw">
          <Box sx={{ bgcolor: "#F0F0F0", height: "100%" }}>
            <Stack
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Card sx={{ width: "50vw", backgroundColor: "#E4DCCF" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    style={{ height: "30vh", objectFit: "contain" }}
                    image={selectedPokemon.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="div"
                      display="flex"
                      flexDirection="row"
                      justifyContent="center"
                    >
                      {selectedPokemon.name}
                    </Typography>
                    <BarChart chartData={selectedPokemon} />
                    {/* height weight category gender abilities */}
                  </CardContent>
                  <CardContent
                    sx={{ backgroundColor: "#FFBF9B", borderRadius: "40" }}
                  >
                    {/* height weight category gender abilities */}
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6}>
                          <Typography variant="h5">
                            Height:{" "}
                            {parseFloat(selectedPokemon.height.maximum).toFixed(
                              2
                            )}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="h5">
                            Weight:
                            {parseFloat(selectedPokemon.weight.maximum).toFixed(
                              2
                            )}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="h5">
                            Category:{selectedPokemon.classification}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="h5">
                            Resistant:{...resistancesArr}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="h5">
                            Weaknesses:{...weaknessArr}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }}>
                Query Evoltuion Data
              </Button>
            </Stack>
          </Box>
        </Container>
      </div>
    </>
  );
}
