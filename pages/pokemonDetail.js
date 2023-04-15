import { Box, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { pokemonDetailContext } from "../pages/_app.js";
import { BarChart } from "@/components/Barchart.js";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import PokemonEvolution from "@/components/pokemonEvolution.js";

export default function PokemonDetailPage() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { selectedPokemon, setSelectedPokemon } =
    useContext(pokemonDetailContext);

  //   console.log(selectedPokemon);
  let id = selectedPokemon.id;
  let name = selectedPokemon.name;
  if (selectedPokemon.length !== 0) {
    const pokemonEvolutionData = gql`
      {
        pokemon(id: "${id}", name: "${name}") {
          id
          name
          evolutions {
            id
            number
            name
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            image
          }
        }
      }
    `;
    const { loading, error, data } = useQuery(pokemonEvolutionData);
    if (data) {
      console.log(data);
      let resistancesArr = selectedPokemon.resistant.map((e) => {
        return e + ", ";
      });

      let weaknessArr = selectedPokemon.weaknesses.map((e) => {
        return e + ", ";
      });

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
                              <Typography variant="h5" backgroundColor="#917FB3" borderRadius={2} padding={1}>
                                Height:{" "}
                                {parseFloat(
                                  selectedPokemon.height.maximum
                                ).toFixed(2)}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h5" backgroundColor="#A9907E" borderRadius={2} padding={1}>
                                Weight:
                                {parseFloat(
                                  selectedPokemon.weight.maximum
                                ).toFixed(2)}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h5" backgroundColor="#C7E9B0" borderRadius={2} padding={1}>
                                Category:{selectedPokemon.classification}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h5" backgroundColor="#F9D949" borderRadius={2} padding={1}>
                                Resistant:{...resistancesArr}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h5" backgroundColor="#F45050" borderRadius={2} padding={1}s>
                                Weaknesses:{...weaknessArr}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  {/* <Button
                      variant="contained"
                      sx={{ marginTop: 2, marginBottom: 2 }}
                    >
                      Query Evoltuion Data
                    </Button> */}
                  <div>
                    <Button variant="outlined" onClick={handleClickOpen} sx={{marginBottom:1}}>
                      Evolution Data
                    </Button>
                    <Dialog
                      fullWidth
                      maxWidth="lg"
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle
                        id="alert-dialog-title"
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                      >
                        {"Evolution Data"}
                      </DialogTitle>
                      <DialogContent>
                        {/* <DialogContentText id="alert-dialog-description"></DialogContentText> */}
                        <PokemonEvolution data={data} />
                      </DialogContent>
                      <DialogActions>
                        {/* <Button onClick={handleClose}>Disagree</Button> */}
                        <Button onClick={handleClose} autoFocus>
                          close
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </Stack>
              </Box>
            </Container>
          </div>
        </>
      );
    }
  }
}
