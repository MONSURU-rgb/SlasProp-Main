import { Box, CardMedia, Container, Typography } from "@mui/material";
import { KeyFeatureCard } from "./KeyFeatureCard";

import accelerateProcess from "../assets/accelerate-process.png";
import blockchain from "../assets/blockchain.png";
import sampleImage from "../assets/house.png";
import userInterface from "../assets/user-interface.png";

const keyFeatures = [
  {
    id: 1,
    imageUrl: blockchain.src,
    heading: "Blockchain Foundation",
    desc: "Your transactions, titles, and information enjoy an extra layer of security through blockchain, promoting trust and transparency.",
  },
  {
    id: 2,
    imageUrl: userInterface.src,
    heading: "User-Friendly Interface",
    desc: "Seamlessly navigate through listings, transactions, and property details with our intuitive design.",
  },
  {
    id: 3,
    imageUrl: accelerateProcess.src,
    heading: "Accelerated Processes",
    desc: "SlasProp expedites every stage of your property journey, ensuring rapid and efficient transactions.",
  },
];

export function KeyFeatures() {
  return (
    <Container>
      <Container sx={{ display: "flex", my: 4, justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: 2,
            maxWidth: "600px",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Discover The Key Features:
          </Typography>
          <Container
            sx={{ display: "flex", flexDirection: "column", ml: "-25px" }}
          >
            {keyFeatures.map((keyFeature) => (
              <KeyFeatureCard key={keyFeature.id} {...keyFeature} />
            ))}
          </Container>
        </Box>

        <CardMedia
          component="img"
          image={sampleImage.src}
          onLoad={() => console.log("this is loading")}
          onError={() => console.log("this is error")}
          alt="This is a property image"
          sx={{
            maxWidth: "45%",
            objectFit: "cover",
          }}
        />
      </Container>

      <Typography sx={{ textAlign: "center", px: 4, fontSize: "14px" }}>
        Whether you're a first-time homebuyer, seasoned investor, or property
        enthusiast, SlasProp caters to your needs. Explore our platform, unveil
        exciting listings and embark on a property adventure where transactions
        are as thrilling as finding your dream home.
      </Typography>
    </Container>
  );
}