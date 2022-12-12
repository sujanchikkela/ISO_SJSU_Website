/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';
import { Link } from './link';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
  linktext,
  link,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />

      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
        <Link sx={styles.wrapper.link} path={link}>{linktext}</Link>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
  },

  img: {
    width: ['60px', null, null, null, '55px', '70px', null, '80px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4, null, null, 3, 4, null, 5],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
      mt: '2px',
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
    link: {
      fontSize: 1,
      textAlign: 'center',
      fontWeight: 500,
      lineHeight: [1.85, null, 2],
      color: 'white',
      backgroundColor: '#0055A2',
      textDecoration: 'none',
    },
  },
};
