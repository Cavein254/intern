import { CustomTextField } from '@/components/missilenious/TextFieldItems';
import { Box } from '@mui/material';

const CreateJob = () => {
  return (
    <Box>
      <CustomTextField
        variant="outlined"
        fullWidth
        type="text"
        placeholder="Job Title"
      />
    </Box>
  );
};

export default CreateJob;
