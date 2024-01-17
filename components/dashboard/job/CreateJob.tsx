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
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [engagement, setEngagement] = useState('uuuuuuu');
  const [age, setAge] = useState(0);

  const handleChangeEngagement = (e) => {
    e.preventDefault();
    console.log({ value: e.target.value });
    setEngagement(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };
  return (
    <Box
      sx={{
        mt: '5%',
        mx: '4%',
      }}
    >
      <form>
        <CustomTextField
          variant="filled"
          fullWidth
          type="text"
          placeholder="Job Title"
        />
        <CustomTextField
          variant="filled"
          fullWidth
          type="text"
          placeholder="Job Position"
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
            value=""
            label="Apply as"
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
            value=""
            label="Job Type"
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

        <Box>
          <Typography
            variant="h4"
            sx={{
              color: 'gray',
              fontSize: '1.4rem',
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
        <Button variant="contained">Submit</Button>
      </form>
    </Box>
  );
};

export default CreateJob;
