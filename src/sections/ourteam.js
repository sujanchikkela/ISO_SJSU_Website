/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import Avatar1 from 'assets/team/president.jpg';
import Avatar2 from 'assets/team/vicepresident.jpg';
import Avatar3 from 'assets/team/vpalumni.jpg';
import Avatar4 from 'assets/team/vpevents.jpg';
import Avatar5 from 'assets/team/vpfinance.jpg';
import Avatar6 from 'assets/team/vpsocial.jpg';
// import Avatar4 from 'assets/team/vpevents';
// import Avatar4 from 'assets/team/vpevents';
import PatternBG from 'assets/patternBG.png';

const data = [
  {
    id: 1,
    title: 'President',
    description:
      '',
    avatar: Avatar1,
    name: 'Nithin Reddy Govindugari',
    department: 'Masters in Electrical Engineering',
    review: 4,
  },
  {
    id: 2,
    title: 'Vice President',
    description:
      '',
    avatar: Avatar2,
    name: 'Sujan Rao Chikkela',
    department: 'Masters in Software Engineering',
    review: 5,
  },
  {
    id: 3,
    title: 'VP of Social Media',
    description:
      '',
    avatar: Avatar6,
    name: 'Rashmeet Kaur Bagga',
    department: 'Bachelors in Computer Engineering',
    review: 4,
  },
  {
    id: 4,
    title: 'VP of Events',
    description:
      '',
    avatar: Avatar4,
    name: 'Sathvick Reddy Narahari',
    department: 'Masters in Artificial Intelligence',
    review: 4,
  },
  {
    id: 5,
    title: 'VP of Finance',
    description:
      '',
    avatar: Avatar5,
    name: 'Het Tikawala',
    department: 'Bachelors in Management Information Systems',
    review: 5,
  },
  {
    id: 6,
    title: 'VP of Alumni Relations',
    description:
      '',
    avatar: Avatar3,
    name: 'Ambika Puligilla',
    department: 'Masters in Electrical Engineering',
    review: 5,
  },
];

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

export default function OurTeamCard() {
  return (
    <section id="ourteam" sx={{ variant: 'section.testimonial'  }}>
      <Container>
        <SectionHeader slogan="If you pass by, Say Hello to" title="Our Amazing Team" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              {/* <Rating rating={item.review} /> */}
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.department}>{item.department}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    backgroundColor: 'primary',
      backgroundImage: `url(${PatternBG})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      py: [8, null, 9, null, null, 10],
      
    
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-35px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'center',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'yellow',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'column',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'column',
        img: {
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 5],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [3, null, null, 4],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.5,
  },
  department: {
    color: '#25A0FF',
    fontWeight: '500',
    fontSize: 2,
    lineHeight: 1.4,
  },
};
