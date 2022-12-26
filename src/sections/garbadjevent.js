/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Button } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import { keyframes } from "@emotion/react";
// import RaasGarbaDjEventImage from 'assets/coreFeature.png';
import RaasGarbaDjEventImage from "assets/isosjsu_garbaevent.png";
import Briefcase from "assets/core-feature/volunteer_icon.png";
import Secure from "assets/core-feature/secure.svg";

const data = {
  subTitle: "Volunteer at ISO-SJSU's Largest Event of the Year 2022",
  title: "RAAS GARBA X DJ NIGHT 2022",
  features: [
    {
      id: 1,
      imgSrc: Briefcase,
      altText: "Apply Volunteers",
      title: "Registration",
      // text: "Come be a part of ISO-SJSU's largest event of the year 2022",
    },
    {
      id: 2,
      imgSrc: Briefcase,
      altText: "Take Charge",
      title: "Food & Decoration",
      // text: "Come be a part of ISO-SJSU's largest event of the year 2022",
    },
    {
      id: 3,
      imgSrc: Briefcase,
      altText: "Take Charge",
      title: "Crowd Control",
      // text: "Come be a part of ISO-SJSU's largest event of the year 2022",
    },
    {
      id: 5,
      imgSrc: Briefcase,
      altText: "Take Charge",
      title: "Reorganizing Ball Room",
      // text: "Come be a part of ISO-SJSU's largest event of the year 2022",
    },
  ],
};

export default function CoreFeature() {
  return (
    <section sx={styles.coreFeature} id="garbadjevent">
      {/* Title */}
      <Box sx={styles.headingTop} align="left">
        <TextFeature subTitle={data.subTitle} title={data.title} />
        <Box sx={styles.thumbnail}>
          <Image
            src={RaasGarbaDjEventImage}
            alt="RaasGarbaDJEvent"
            width="50%"
          />
        </Box>
        <br></br>
        <h2>
          <q>
            <i>
              A Huge Thank You To Everyone for making ISO's Grandeur event
              Memorable. <br />
              This couldn't have been possible without you and every Volunteer
              who took part to bring this to life in 2022.
            </i>
          </q>{" "}
          <br /> -- @ Team ISO-SJSU
        </h2>
        {/* <a href="https://forms.gle/xQLNv87MdCeYNwXs6" target="_blank">
          <Button className="volButton" aria-label="Apply For Volunteer">
            Apply For Volunteer
          </Button>
        </a> */}
        <br></br>
        <br></br>
        <div align="center">
          {/* <Grid gap="5px 0" columns={2} sx={styles.grid}>
              {data.features.map((item) => (
                <Box sx={styles.card} key={item.id} align="center">
                  <Image src={item.imgSrc} alt={item.altText} sx={styles.img} />
                  <Box>
                    <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                    <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                  </Box>
                </Box>
              ))}
            </Grid> */}
        </div>
      </Box>

      {/* <Box bg="white" align="center">
        <Box sx={styles.thumbnail}>
          <Image src={RaasGarbaDjEventImage} alt="RaasGarbaDJEvent" />
        </Box>
      </Box>
      <Grid gap={2} columns={[2, null, 2]}>
        <Box>
          <Box sx={styles.headingTop} align="left">
            <TextFeature subTitle={data.subTitle} title={data.title} />
          </Box>
          <Box bg="white">
            <Box sx={styles.thumbnail}>
              <Image src={RaasGarbaDjEventImage} alt="RaasGarbaDJEvent" />
            </Box>
          </Box>
          <div align="center">
            <a href="https://forms.gle/xQLNv87MdCeYNwXs6" target="_blank">
              <Button className="volButton" aria-label="Apply For Volunteer">
                Apply For Volunteer
              </Button>
            </a>
          </div>

          <Box sx={styles.contentBox}>
            <Grid gap="5px 0" columns={2} sx={styles.grid}>
              {data.features.map((item) => (
                <Box sx={styles.card} key={item.id}>
                  <Image src={item.imgSrc} alt={item.altText} sx={styles.img} />

                  <Box sx={styles.wrapper}>
                    <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                    <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
        </Box> */}

      {/* <Box bg="white">
          <Box sx={styles.thumbnail}>
            <Image src={RaasGarbaDjEventImage} alt="RaasGarbaDJEvent" />
          </Box>
        </Box> */}
      {/* </Grid> */}
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    pt: ["150px", null, null, null, null, null, "80px", "80px"],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: ["auto", null, null, "50%"],
      bottom: ["100px", 0, null, "auto"],

      left: 0,
      background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
      height: [350, 550, "60%"],
      width: "50%",
      zIndex: -1,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      transform: ["translateY(0)", null, null, "translateY(-50%)"],
    },
  },
  containerBox: {
    // display: "flex",
    // // flexDirection: "row-reverse",
    // // flexWrap: "wrap",
    // alignItems: "center",
    // justifyContent: "space-between",
    // flexDirection: ["column", null, null, "row"],
    // width: "500px",
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [10, null, null, 0],
    height: "500%",
  },
  contentBox: {
    width: ["100%", 450, 550, 350, 500, 570],
    pr: [0, null, "auto", null, null, 80],
    pl: "auto",
    flexShrink: 0,
  },
  // glowButton: {
  //   backgroundColor: "#1c87c9",
  //   // -webkit-border-radius: 60px;
  //   borderRadius: "60px",
  //   border: "none",
  //   color: "eeeeee",
  //   cursor: "pointer",
  //   display: "inline-block",
  //   fontFamily: "sans-serif",
  //   fontsize: "20px",
  //   padding: [5, 15],
  //   textAlign: "center",
  //   textDecoration: "none",
  //   @keyframes glowing {
  //     0% {
  //       backgroundColor: "#2ba805",
  //       boxShadow: "0 0 5px #2ba805",
  //     }
  //     50% {
  //       backgroundColor: "#49e819",
  //       boxShadow: "0 0 20px #49e819",
  //     }
  //     100% {
  //       backgroundColor: "#2ba805",
  //       boxShadow: "0 0 5px #2ba805",
  //     }
  //   }
  //   button : {
  //     animation: "glowing 1300ms infinite",
  //   },
  // },
  headingTop: {
    pl: [0, null, null, null, "35px", null, "55px", 6],
    mb: [3, null, null, null, 1],
    textAlign: ["center", null, null, "center"],
  },
  grid: {
    p: ["0 0px 35px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
  },
  card: {
    display: "center",
    alignItems: "flex-start",
    p: [
      "0 17px 20px",
      null,
      null,
      "0 0 20px",
      "20px 15px 17px",
      null,
      null,
      "25px 30px 23px",
    ],
    backgroundColor: "white",
    borderRadius: "20px",
    transition: "all 0.3s",
    width: ["100%", "85%", null, "100%"],
    mx: "auto",
    "&:hover": {
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0)",
        null,
        null,
        null,
        "0px 8px 24px rgba(69, 88, 157, 0.07)",
      ],
    },
  },

  img: {
    width: ["50px", null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
