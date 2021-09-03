import React from "react";
import {
  CardActionArea,
  CardContent,
  Typography,
  Card,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  cardImg: {
    [theme.breakpoints.up("md")]: {
      height: "10rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "7rem",
    },
  },
}));

const GridItem = ({
  imagePath,
  label,
  path,
}: {
  imagePath: string;
  label: string;
  path: string;
}) => {
  const classes = useStyles();

  return (
    <Link href={path} passHref>
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
              className={classes.cardImg}
              style={{
                width: "100%",
              }}
            />
            <CardContent>
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
