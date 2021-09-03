import { Card, CardActionArea, CardMedia, Grid } from "@material-ui/core";
import React from "react";

const GalleryButton = ({ imgPath }: { imgPath: string }) => {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card
        style={{
          backgroundColor: "white",
        }}
        elevation={3}
        square={false}
      >
        <CardActionArea
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardMedia
            image={imgPath}
            title={"label"}
            style={{
              height: "15em",
              width: "100%",
            }}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default GalleryButton;
