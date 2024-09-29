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

interface QuestionMovieProps {
  language: string;
  onDataChange: (genre: string) => void;
}

export const QuestionMovieGenre: FC<QuestionMovieProps> = ({
  language,
  onDataChange,
}) => {
  const handleMovieChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    onDataChange(selectedValue);
  };
  return (
    <FormControl>
      <FormLabel
        sx={{
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
        sx={{ justifyContent: 'center' }}
        row
        aria-labelledby="genre"
        name="radio-buttons-genre"
        onChange={handleMovieChange}
      >
        <FormControlLabel
          value="28|12|878|14|53"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(language, 'genre-options-visionary-adventure')}
        />
        <FormControlLabel
          value="18|10749|10402|10751|36"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(language, 'genre-options-emotional-dreamer')}
        />
        <FormControlLabel
          value="80|9648|99|10752|27"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(
            language,
            'genre-options-analytical-investigator'
          )}
        />
        <FormControlLabel
          value="35|16|37|10770|10751"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: red[700],
                },
              }}
            />
          }
          label={formTranslate(language, 'genre-options-relaxed-spirit')}
        />
      </RadioGroup>
    </FormControl>
  );
};
