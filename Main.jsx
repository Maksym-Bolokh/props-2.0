import React from "react";
import { Container, Box } from "@mui/material";
import CardList from "./components/CardList/CardList";
import Title from "./components/Title/Title";
import { cardsData } from "./data";

const Main = () => {
   return (
      <Container>
         <Box sx={{ textAlign: "center", my: 4 }}>
            <Title />
         </Box>
         <CardList cards={cardsData} />
      </Container>
   );
};

export default Main;
