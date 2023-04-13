import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";

// component imports
import PokemonCard from "../components/pokemonCard.js";
import PaginationComp from "../components/pagination.js";
import { paginate } from "../utils/paginate.js";

// what do i need > build card component passing props = image,number,name,types

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const pokemonQuery = gql`
    {
      pokemons(first: 300) {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
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
  `;
  const { loading, error, data } = useQuery(pokemonQuery);
  if (loading) {
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
      >
        <HourglassBottomIcon />
      </Box>
    );
  }

  if (error) {
    return <h1>error,{error.message}</h1>;
  }

  if (data) {
    const pokemonData = data.pokemons;
    const paginatePosts = paginate(pokemonData, currentPage, pageSize);
    // total pokemons 151
    return (
      <>
        <Box
          sx={{
            width: "100vw",
            //   height="100vh"
            placeItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            {paginatePosts.map((e) => {
              return (
                <Grid item md={3} xs={6}>
                  <Box mt={2} ml={6}>
                    <PokemonCard
                      name={e.name}
                      number={e.number}
                      image={e.image}
                      types={e.types}
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box
          width="100vw"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <PaginationComp
            currentPage={currentPage}
            onPageChange={(event, value) => {
              setCurrentPage(value);
            }}
          />
        </Box>
      </>
    );
  }
}

export default HomePage;
