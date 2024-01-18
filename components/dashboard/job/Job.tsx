import { Box, Button, Typography } from '@mui/material';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { BiMoneyWithdraw, BiTime } from 'react-icons/bi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GiAbstract034 } from 'react-icons/gi';
import './styles.css';

const Job = ({ items }) => {
  const { title, jobType, engagement, locationType, description } = items;
  return (
    <Box
      sx={{
        boxShadow: 2,
        width: '100%',
      }}
      className="job-main-card"
    >
      <Box className="job-whole-wrapper">
        <Box className="job-header-wrapper">
          <Box className="job-card-items">
            <Box>
              <GiAbstract034 className="job-icon" />
            </Box>
            <Box className="job-card-text">
              <Typography variant="h4">{title}</Typography>
              <Typography variant="h6">{locationType} - Nairobi</Typography>
            </Box>
          </Box>
          <Box className="job-apply-btn">
            <Button variant="contained">
              Apply <BsFillArrowRightCircleFill className="job-apply-icon" />
            </Button>
          </Box>
        </Box>
        <Box className="job-details">
          <Box className="job-item-detail">
            <BiTime className="job-detail-item" />
            <h6>{engagement}</h6>
          </Box>
          <Box className="job-item-detail">
            <AiOutlineFieldNumber className="job-detail-item" />
            <h6>{jobType}</h6>
          </Box>
          <Box className="job-item-detail">
            <BiMoneyWithdraw className="job-detail-item" />
            <h6>Ksh 120,000</h6>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Job;
