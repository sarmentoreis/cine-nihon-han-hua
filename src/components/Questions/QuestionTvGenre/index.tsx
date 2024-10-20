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

interface QuestionTvProps {
  language: string;
  onDataChange: (genre: string) => void;
}

export const QuestionTvGenre: FC<QuestionTvProps> = ({
  language,
  onDataChange,
}) => {
  const handleTvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
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
        id="genre"
      >
        {formTranslate(language, 'genre')}
      </FormLabel>
      <RadioGroup
        row
        sx={{ justifyContent: 'center' }}
        aria-labelledby="genre"
        name="radio-buttons-genre"
        onChange={handleTvChange}
      >
        <FormControlLabel
          value="10759|10765|9648|37|10768"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(language, 'genre-options-curious-adventure')}
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: 'clamp(0.7em, 1vw, 0.9em)',
            },
          }}
        />
        <FormControlLabel
          value="18|10766|10751|10762|16"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(language, 'genre-options-sensitive-dreamer')}
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: 'clamp(0.7em, 1vw, 0.9em)',
            },
          }}
        />
        <FormControlLabel
          value="80|99|10763|9648|10768"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(language, 'genre-options-rational-investigator')}
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: 'clamp(0.7em, 1vw, 0.9em)',
            },
          }}
        />
        <FormControlLabel
          value="35|10764|10767|16|10762"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(language, 'genre-options-relaxed-sociable')}
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: 'clamp(0.7em, 1vw, 0.9em)',
            },
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};
