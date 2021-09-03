import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import FsLightbox from "fslightbox-react";
import GalleryButton from "./GalleryButton";

const PhotoSection = ({
  imgPath,
  galleryPaths,
}: {
  imgPath: string;
  galleryPaths: string[];
}) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginBottom: "2rem" }}
      >
        Cas cliniques
      </Typography>

      <div>
        <div onClick={() => setToggler(!toggler)}>
          <GalleryButton imgPath={imgPath} />
        </div>

        <FsLightbox toggler={toggler} sources={galleryPaths} />
      </div>
    </>
  );
};

export default PhotoSection;
