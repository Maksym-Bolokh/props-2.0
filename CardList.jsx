import React from "react";
import { Grid, Container } from "@mui/material";
import CardItem from "../Card/Card";

const CardList = ({ cards }) => {
   return (
      <Container sx={{ mt: 2 }}>
         <Grid container spacing={3} justifyContent="center">
            {cards.map((card) => (
               <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                  <CardItem
                     title={card.title}
                     description={card.description}
                     image={card.image}
                  />
               </Grid>
            ))}
         </Grid>
      </Container>
   );
};

export default CardList;
