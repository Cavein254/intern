"use client"
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { BsFan } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import Overlay from '../overlay/Overlay';
import { HeaderLinks } from './LinkData';
import './styles.css';
const StyledSignUp = styled(Button)`
  background-color: #ff6600;
  color: #fff;
  font-size: 0.8rem;
  border-radius: 0;
  '&:hover': {
    background-color: '#fff';
    color: '#ff6600';
  }
`;
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const {data:session} = useSession();
  console.log(session)
  const linkNavs = HeaderLinks.map((link) => {
    return (
      <span key={link.id} className="header-links">
        <Link href={link.path} className="header-link">
          {link.name}
        </Link>
      </span>
    );
  });
  return (
    <Box component="nav">
      {isOpen && <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Box className="header-container">
        <Box className="header-icon-container">
          <GiHamburgerMenu
            className="header-icon"
            onClick={() => setIsOpen(!isOpen)}
          />
        </Box>
        <Box className="header-details">
          <BsFan className="header-company-logo" />
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Merriweather',
              fontWeight: '900',
              fontSize: '1.8rem',
            }}
          >
            GPOL
          </Typography>
        </Box>
        <Box className="header-links-container">
          <Box className="header-links-wrapper">{linkNavs}</Box>
        </Box>
        <Box className="header-btns">
          <Box>
          <Link href="/signin" className="header-link">
            <Button
              variant="text"
              className="header-login-btn"
              sx={{
                marginRight: '0.4rem',
                fontSize: '1rem',
              }}
            >
              Log In
            </Button>
          </Link>
          </Box>
          <Box>
          <Link href="/signup" className="header-link">
            <StyledSignUp variant="contained">Sign Up</StyledSignUp>
          </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;


