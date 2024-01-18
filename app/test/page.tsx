import Footer from '@/components/footer/Footer';
import Subscribe from '@/components/subscribe/Subscribe';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        margin: '1rem',
      }}
    >
      {/* <Hero />
      <About />
      <Services />
      <Testimonials />
      <Team /> */}
      <Subscribe />
      <Footer />
    </Box>
  );
}
