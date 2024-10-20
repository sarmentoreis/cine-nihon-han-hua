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

interface QuestionAgeProps {
  language: string;
  onDataChange: (age: string) => void;
}

export const QuestionAge: FC<QuestionAgeProps> = ({
  language,
  onDataChange,
}) => {
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onDataChange(value);
  };
  return (
    <FormControl>
      <FormLabel
        sx={{
          fontSize: 'clamp(0.7em, 1vw, 1em)',
          fontWeight: 'bold',
          color: 'black',
          transition: 'color 0.5s ease',
          '&.Mui-focused': {
            color: '#700917',
            fontWeight: 'bold',
          },
        }}
        id="age"
      >
        {formTranslate(language, 'age')}
      </FormLabel>
      <RadioGroup
        sx={{ justifyContent: 'center' }}
        row
        aria-labelledby="age"
        name="radio-buttons-age"
        onChange={handleAgeChange}
      >
        <FormControlLabel
          value="yes"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(language, 'age-options-y')}
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: 'clamp(0.7em, 1vw, 1em)',
            },
          }}
        />
        <FormControlLabel
          value="no"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(language, 'age-options-n')}
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
