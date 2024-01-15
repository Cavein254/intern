import { CustomTextField } from '@/components/missilenious/TextFieldItems';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

const CreateJob = () => {
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
            value=""
            label="Engagement"
          >
            <MenuItem value={'FULLTIME'}>FullTime</MenuItem>
            <MenuItem value={'PARTTIME'}>PartTime</MenuItem>
            <MenuItem value={'PIECEWORK'}>PieceWork</MenuItem>
          </Select>
        </FormControl>
        <FormGroup>
          <InputLabel id="Salary">Salary</InputLabel>
          <FormControlLabel control={<Checkbox />} label="0-10,000" />
          <FormControlLabel control={<Checkbox />} label="10,000-30,000" />
          <FormControlLabel control={<Checkbox />} label="30,000-50,000" />
          <FormControlLabel control={<Checkbox />} label="50,000-100,000" />
          <FormControlLabel control={<Checkbox />} label="Above 100,000" />
        </FormGroup>
      </form>
    </Box>
  );
};

export default CreateJob;
