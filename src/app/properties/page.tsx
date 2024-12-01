"use client";

import sampleImage from "@/assets/aerial-view.png";
import { ImageCardWelcomeSearched } from "@/components/ImageCardWelcomeSearched";
import { Footer } from "@/sections/Footer";
import { NavBarContainer } from "@/sections/NavBarContainer";
import { CardMedia, Typography } from "@mui/material";

export default function Properties() {
  return (
    <>
      <NavBarContainer />
      <div className="image-container">
        <CardMedia
          component="img"
          image={sampleImage.src}
          alt="This is a land image"
          sx={{
            marginTop: "-50px",
            objectFit: "cover",
            maxHeight: "250px",
            filter: "brightness(70%)",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            top: {
              lg: "37%",
              md: "33%",
              sm: "30%",
              xs: "23%",
            },
            fontSize: "25px",
            left: "5%",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Welcome To SlasProp
        </Typography>

        <Typography
          sx={{
            position: "absolute",
            top: {
              lg: "44%",
              md: "40%",
              sm: "36%",
              xs: "28%",
            },
            fontSize: "12px",
            left: "5%",
            color: "white",
          }}
        >
          Where Innovation meets Real Estate. You property adventure starts
          here.
        </Typography>
      </div>
      <ImageCardWelcomeSearched />
      <Footer />
    </>
  );
}
