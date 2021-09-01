import {
  CardActionArea,
  CardContent,
  Typography,
  Card,
  CardMedia,
  Divider,
  Grid,
} from "@material-ui/core";
import Link from "next/link";

import React from "react";

const GridItem = ({
  imagePath,
  label,
  path,
}: {
  imagePath: string;
  label: string;
  path: string;
}) => {
  return (
    <Link href={path}>
      <Grid item xs={6} sm={4} md={3}>
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
              image={imagePath}
              title={label}
              style={{
                height: "15em",
                width: "100%",
              }}
            />
            <CardContent
              style={{
                borderTop: "1px solid rgba(71,71,71, 0.1)",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                align="center"
                style={{ color: "#474747" }}
              >
                {label}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Link>
  );
};

export default GridItem;
