import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';

import Sidebar from './Sidebar';
import Footer from './Footer';


const sections = [
  { title: 'Packages', url: '#' },
  { title: 'Bookings', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Resorts', url: '#' },
  
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'WANDERLUST ',
  description:
   " Travel Explore Flights Hotels Vacation rentals Tracked flight prices Price guarantee Change language Change currency Change location Change currency Feedback Help Plan your trip ",
  image: 'https://www.wallpapers13.com/wp-content/uploads/2018/12/United-Arab-Emirates-Calm-night-in-Dubai-City-and-Architecture-HD-Desktop-Wallpapers-For-Tablets-And-Mobile-Phones-Free-Download-3840x2160.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Feb 12',
    description:
      'Plan your holiday with tour packages from India to various destinations around the world. Choose from a wide range of best-selling, budget-friendly, and customizable tour packages',
    image:'https://wallpapercave.com/wp/wp2678229.jpg',
  },
  {
    title: 'Post title',
    date: 'Feb 22',
    description:
    'Take in cutting-edge architecture like the Burj Khalifa and Dubai Fountain with a city tour or try some more adventure activities and explore the desert by camel or ATV.',
    image: 'https://i.pinimg.com/originals/10/39/d3/1039d3383061ccffd6cfa291fd46b833.jpg',
  },
];



const sidebar = {
  title: 'About',
  description:
   'A travel website is a website that provides travel reviews, trip fares, or a combination of both. Over 1.5 billion people book travel per year, 70% of which is done online. People writing travel blogs about their own experiences, sometimes including advice for travelling in particular areas, or in general.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="WANDERLUST"
        description="It is a Travel and Tourism Website ,Your Jouney Starts With a Single Click"
      />
    </ThemeProvider>
  );
}