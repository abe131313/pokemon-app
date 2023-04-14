// import "@/styles/globals.css";
import "@/styles/card.css";
import "@/styles/pokemonDetail.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createContext,useState } from "react";

export const pokemonDetailContext = createContext();

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  let [selectedPokemon, setSelectedPokemon] = useState("");

  return (
    <pokemonDetailContext.Provider value={{selectedPokemon,setSelectedPokemon}}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </pokemonDetailContext.Provider >
  );
}
