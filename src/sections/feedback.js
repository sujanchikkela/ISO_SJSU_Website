/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";
import { Embed } from "theme-ui";
import Avatar1 from "assets/testimonial/avatar1.png";
import Avatar2 from "assets/testimonial/avatar2.png";
import Avatar3 from "assets/testimonial/avatar3.png";
import Avatar4 from "assets/testimonial/avatar4.png";
import PatternBG from "assets/patternBG.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function FeedbackCard() {
  return (
    <section id="feedback" sx={{ variant: "section.testimonial" }}>
      <Container>
        <SectionHeader
          slogan="Let us know what you think"
          title="Quick Feedback"
        />
      </Container>
      <Box sx={styles.carouselWrapper}>
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdgaEFlYV9NnKmgfOmJQakFKJtKILjikFm-oWmMHqGBF3NTpA/viewform?embedded=true" width="1500" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
        <Embed
          frameborder="0"
          src="https://s.surveyplanet.com/62fed271ce16007705a794aa"
        />
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    py: [8, null, 9, null, null, 10],
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "center",
    mt: "-35px",
    px: "15px",
  },
  // responsiveIframe: {
  //   position: "absolute",
  //   top: "0",
  //   left: "0",
  //   bottom: "0",
  //   right: "0",
  //   width: "100%",
  //   height: "100%",
  // },
};
