/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Flex, Box, Heading, Text, Image, Button } from "theme-ui";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "components/link";
// import { Link } from 'theme-ui'
import { FaPlayCircle } from "react-icons/fa";
import BannerBG from "assets/bannerBg.png";
// import BannerThumb from 'assets/banner-thumb.png';

import BannerThumb from "assets/spartanlogo.png";
// import BannerThumb from "assets/isosjsulogo_circle.png";
import ISOSJSULogo from "assets/isosjsuhead_logo.png";
import social1 from "assets/sponsor/facebook.svg";
import social2 from "assets/sponsor/instagram.svg";
import social3 from "assets/sponsor/linkedin.svg";
import { Grid } from "theme-ui";
import GetStarted from "assets/play.gif";
// import Image from "components/image";

const data = [
  {
    id: 1,
    path: "https://www.facebook.com/groups/isosjsu/",
    image: social1,
    title: "facebook",
  },
  {
    id: 2,
    path: "https://www.instagram.com/iso.sjsu/?hl=en",
    image: social2,
    title: "instagram",
    target: "_blank",
  },
  {
    id: 3,
    path: "https://www.linkedin.com/company/indian-students-organization-sjsu/",
    image: social3,
    title: "linkedin",
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            ISO-SJSU
          </Heading>
          <Text as="p" variant="heroSecondary">
            Indian Student Organization provides academic advising as well as
            social and cultural support to newly admitted students as well as
            currently enrolled students at San Jose State Univeristy. ISO-SJSU
            also arranges events like Cricket tournaments, Holi/Navratri/Diwali
            celebrations.
          </Text>
          <Flex>
            {/* <Button variant="whiteButton" aria-label="Get Started" path="feature">
              Get Started
            </Button> */}
            <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="fW-lcULFDSM"
                onClose={() => setVideoOpen(false)}
              />
              {/* <Button
                variant="whiteButton"
                aria-label="Watch Video"
                onClick={handleClick}
              >
                <FaPlayCircle /> Watch Video
              </Button> */}
              {/* <Text as="p" variant="heroSecondary">
                Get Started Now
              </Text> */}
              <a href="#garbadjevent">
                {/* <Img src={GetStarted} /> */}

                {/* <Button variant="whiteButton" aria-label="Apply For Volunteer"> */}

                <Image src={GetStarted} width="80px" />
                {/* </Button> */}
              </a>
            </>
          </Flex>
          <Flex sx={styles.sponsorBox}>
            {/* <Text sx={styles.sponsorTitle}>Reach us at:</Text> */}
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link path={item.path} key={`social-key${index}`}>
                  <Image
                    src={item.image}
                    target={item.target}
                    alt={item.title}
                  />
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerThumb} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ["150px", null, null, null, null, null, "140px", "130px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
    backgroundColor: "#0055A2",
    container: {
      display: "flex",
    },
    contentBox: {
      width: ["100%", null, "85%", "55%", "50%", "55%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ["none", null, null, "block"],
      justifyContent: "center",
      // ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, "-145px", "-160px", "-180px", "-220px", "-290px"],
      mt: [0, null, null, "40px", 4, 7, 0],
      // mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: "hidden",
      textAlign: "right",
      width: "40%",
      flexDirection: "row",
    },
  },
  sponsorTitle: {
    color: "white",
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ["35px", null, null, null, null, "45px"],
    flexDirection: ["column", null, "row"],
    sponsor: {
      display: "flex",
      width: "60%",
      alignItems: "center",
      "> a": {
        mr: [5, null, null, 4, 6],
        display: "flex",
        "&:last-of-type": {
          mr: 0,
        },
      },
    },
  },
};
