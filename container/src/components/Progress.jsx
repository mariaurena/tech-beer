import { styled } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressContainer = styled('div')(({ theme }) => ({
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2),
  },
}));

const Progress = () => {
  return (
    <ProgressContainer>
      <LinearProgress />
    </ProgressContainer>
  );
};

export default Progress;
