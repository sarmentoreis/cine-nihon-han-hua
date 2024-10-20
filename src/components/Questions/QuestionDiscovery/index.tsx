import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { formTranslate } from '../../../utils/LanguagesDictionary/FormTranslation';
import { FC } from 'react';
import { red } from '@mui/material/colors';

interface QuestionDiscoveryProps {
  language: string;
  onDiscoveryChange: (value: string) => void;
  onDataChange: (discovery: string) => void;
}

export const QuestionDiscovery: FC<QuestionDiscoveryProps> = ({
  language,
  onDiscoveryChange,
  onDataChange,
}) => {
  const handleDiscoveryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = event.target.value;
    onDiscoveryChange(selectedValue);
    onDataChange(selectedValue);
  };

  return (
    <FormControl>
      <FormLabel
        sx={{
          fontSize: 'clamp(0.7em, 1vw, 1em)',
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'black',
          transition: 'color 0.5s ease',
          '&.Mui-focused': {
            color: '#700917',
            fontWeight: 'bold',
          },
        }}
        id="discovery"
      >
        {formTranslate(language, 'discovery')}
      </FormLabel>
      <RadioGroup
        sx={{ justifyContent: 'center' }}
        row
        aria-labelledby="discovery"
        name="radio-buttons-discovery"
        onChange={handleDiscoveryChange}
      >
        <FormControlLabel
          value="movie"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(language, 'discovery-options-movie')}
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: 'clamp(0.7em, 1vw, 1em)',
            },
          }}
        />
        <FormControlLabel
          value="tv"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(language, 'discovery-options-tv')}
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: 'clamp(0.7em, 1vw, 1em)',
            },
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};
