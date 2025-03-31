import React from "react";
import {
   Card,
   CardMedia,
   CardContent,
   Typography,
   Button,
} from "@mui/material";

const CardItem = ({ title, image, description }) => {
   return (
      <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
         <CardMedia component="img" height="140" image={image} alt={title} />
         <CardContent>
            <Typography variant="h6" component="div">
               {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               {description}
            </Typography>
            <Button
               variant="contained"
               color="primary"
               fullWidth
               sx={{ mt: 2 }}
               onClick={() => alert(title)}
            >
               Дізнатись більше
            </Button>
         </CardContent>
      </Card>
   );
};

export default CardItem;
