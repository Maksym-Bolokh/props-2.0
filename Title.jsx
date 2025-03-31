import React from "react";
import { Typography } from "@mui/material";

const Title = () => {
   return (
      <Typography
         variant="h4"
         component="h3"
         sx={{ textAlign: "center", fontWeight: "bold", mt: 4 }}
      >
         Лабораторна робота №12, Назаренко
      </Typography>
   );
};

export default Title;
