/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Calendar26 from "assets/calendar26.svg";
import Calendar30 from "assets/calendar30.png";
import Calendar from "assets/calendar.svg";
import Winner from "assets/feature/winner.svg";
import Cloud from "assets/feature/cloud.svg";
import Setting from "assets/feature/setting.svg";
import Design from "assets/feature/design.svg";
import Chat from "assets/feature/chat.svg";

const data = [
  {
    id: 1,
    imgSrc: Calendar26,
    altText: "parichay",
    title: "Parichay - Meet, Greet & Uniwind on Aug 26th, 2022",
    text: "Thank you for making it a huge success! All eyes on next event...!!",
    linktext: "",
    link: "",
  },
  {
    id: 2,
    imgSrc: Calendar30,
    altText: "Performance",
    title: "RAAS GARBA X DJ NIGHT, Oct 30th, 2022",
    text: "Thank you all for attending and making ISO-SJSU part of your memories.",
  },
  {
    id: 3,
    imgSrc: Calendar,
    altText: "Content",
    title: "October 2022",
    text: "Do you have any suggestions?",
  },
  {
    id: 4,
    imgSrc: Calendar,
    altText: "Oct 1st - Duserra",
    title: "November 2022",
    text: "Stay Tuned",
  },
  {
    id: 5,
    imgSrc: Calendar,
    altText: "December",
    title: "December",
    text: "Santa is Arriving...!!",
  },
  {
    id: 6,
    imgSrc: Calendar,
    altText: "January",
    title: "January 2023",
    text: "Watch this space for updates!",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }} id="isoevents">
      <Container>
        <SectionHeader
          slogan="Social | Culture | Academic"
          title="Experience the ISO Events"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
              linktext={item.linktext}
              link={item.link}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      "37px 0",
      null,
      "45px 30px",
      null,
      "50px 30px",
      null,
      null,
      "90px 70px",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
