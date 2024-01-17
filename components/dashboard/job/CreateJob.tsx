'use client';
import { CustomTextField } from '@/components/missilenious/TextFieldItems';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import axios from 'axios';
import dayjs from 'dayjs';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateJob = () => {
  const { data: session } = useSession();
  const { user } = session;
  const { id } = user;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [engagement, setEngagement] = useState('FULLTIME');
  const [locationType, setLocation] = useState('ONSITE');
  const [jobType, setJob] = useState('PERMANENT');
  const [expiresAt, setExpiresAt] = useState(dayjs(Date.now()));

  const handleChangeLocation = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };

  const handleChangeJobType = (e) => {
    e.preventDefault();
    setJob(e.target.value);
  };

  const handleChangeEngagement = (e) => {
    e.preventDefault();
    setEngagement(e.target.value);
  };

  const myDate = () => {
    const newDate = dayjs(expiresAt).format('MM/DD/YYYY');
    return newDate;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      jobType,
      locationType,
      engagement,
      description,
      expiresAt: myDate(),
      userId: id,
    };
    axios
      .post('/api/job/create', {
        data,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <Box
      sx={{
        mt: '5%',
        mx: '4%',
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <CustomTextField
          variant="outlined"
          fullWidth
          type="text"
          placeholder="Job Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormControl
          fullWidth
          sx={{
            marginBottom: '1rem',
          }}
        >
          <InputLabel id="location">Location</InputLabel>
          <Select
            labelId="location"
            id="location-select"
            value={locationType}
            label="Apply as"
            onChange={handleChangeLocation}
          >
            <MenuItem value={'HYBRID'}>Hybrid</MenuItem>
            <MenuItem value={'ONSITE'}>OnSite</MenuItem>
            <MenuItem value={'REMOTE'}>Remote</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            marginBottom: '1rem',
          }}
        >
          <InputLabel id="jobType">Job Type</InputLabel>
          <Select
            labelId="jobType"
            id="jobType-select"
            value={jobType}
            label="Job Type"
            onChange={handleChangeJobType}
          >
            <MenuItem value={'PERMANENT'}>Permanent</MenuItem>
            <MenuItem value={'TEMPORARY'}>Temporary</MenuItem>
            <MenuItem value={'CONTRACT'}>Contract</MenuItem>
            <MenuItem value={'INTERNSHIP'}>Internship</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            marginBottom: '1rem',
          }}
          variant="outlined"
        >
          <InputLabel id="engagement">Engagement</InputLabel>
          <Select
            labelId="engagement"
            id="engagement-select"
            value={engagement}
            label="Engagement"
            onChange={handleChangeEngagement}
          >
            <MenuItem value={'FULLTIME'}>FullTime</MenuItem>
            <MenuItem value={'PARTTIME'}>PartTime</MenuItem>
            <MenuItem value={'PIECEWORK'}>PieceWork</MenuItem>
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Application Deadline"
              value={expiresAt}
              onChange={(newValue) => setExpiresAt(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: 'gray',
              fontSize: '0.8rem',
              mt: '2rem',
            }}
          >
            Enter Details
          </Typography>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
          />
        </Box>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CreateJob;
