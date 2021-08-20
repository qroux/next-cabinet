import {
  CardActionArea,
  CardContent,
  Typography,
  Card,
  CardMedia,
  Divider,
} from "@material-ui/core";
import Link from "next/link";

import React from "react";

const NavCard = ({ imagePath, label, path }) => {
  return (
    <Link href={path}>
      <Card
        style={{
          width: "20rem",
          backgroundColor: "white",
        }}
        elevation={3}
      >
        <CardActionArea
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "2rem",
          }}
        >
          <CardMedia
            image={imagePath}
            title={imagePath}
            style={{
              height: "6rem",
              width: "6rem",
            }}
          />
          <CardContent
            style={{
              borderTop: "1px solid rgba(71,71,71, 0.1)",
              marginTop: "1rem",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              align="center"
              style={{ color: "#474747" }}
            >
              {label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default NavCard;
