import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import FsLightbox from "fslightbox-react";

const PhotoSection = () => {
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
        <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
        <FsLightbox
          toggler={toggler}
          sources={[
            "https://i.imgur.com/fsyrScY.jpg",
            "https://www.youtube.com/watch?v=xshEZzpS4CQ",
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          ]}
        />
      </div>
    </>
  );
};

export default PhotoSection;
