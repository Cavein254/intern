import { Box, Button, Typography } from "@mui/material"
import { AiOutlineFieldNumber } from "react-icons/ai"
import { BiMoneyWithdraw, BiTime } from "react-icons/bi"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { GiAbstract034 } from "react-icons/gi"
import './styles.css'

const Job = () => {
  return (
    <Box sx={{
      boxShadow:2,
      width:'100%'
    }} className="job-main-card">
      <Box className="job-whole-wrapper">
     <Box className='job-header-wrapper'>
      <Box className='job-card-items'>
        <Box>
          <GiAbstract034  className='job-icon'/>
        </Box>
        <Box className='job-card-text'>
          <Typography variant="h4">German Speaking Call Centre Agents</Typography>
          <Typography variant="h6">Onsite - Nairobi</Typography>
        </Box>
      </Box>
      <Box className='job-apply-btn'>
        <Button variant="contained">
          Apply <BsFillArrowRightCircleFill className="job-apply-icon"/>
        </Button>
      </Box>
     </Box>
     <Box className="job-details">
        <Box className="job-item-detail">
          <BiTime className="job-detail-item"/>
          <h6>Full Time</h6>
        </Box>
        <Box className="job-item-detail">
          <AiOutlineFieldNumber className="job-detail-item"/>
          <h6>3-8 years</h6>
        </Box>
        <Box className="job-item-detail">
          <BiMoneyWithdraw className="job-detail-item"/>
          <h6>Ksh 120,000</h6>
        </Box>
     </Box>
     <Box>
        <Box>
          <p>
            Flexible working hours
          </p>
          <p>
             Great Medical Insurance
          </p>
          <p>
            Amaizing working culture
          </p>
        </Box>
     </Box>
     </Box>
    </Box>
  )
}

export default Job