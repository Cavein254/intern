import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Subscribe from "@/components/subscribe/Subscribe";
import Team from "@/components/team/Team";
import Testimonials from "@/components/testimonial/Testimonials";
import { Box } from "@mui/material";

export default function Home() {
  return (
     <Box
      sx={{
        margin: '1rem',
      }}
    >
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Subscribe />
      <Footer />
    </Box>
  )
}
