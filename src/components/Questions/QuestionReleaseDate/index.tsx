import { FormControl, FormLabel, Slider } from '@mui/material';
import { formTranslate } from '../../../utils/LanguagesDictionary/FormTranslation';
import { FC } from 'react';
import { red } from '@mui/material/colors';

interface QuestionReleaseDateProps {
  language: string;
  mediaType: string | null;
  onDataChange: (releaseYear: string) => void;
}

export const QuestionReleaseDate: FC<QuestionReleaseDateProps> = ({
  language,
  mediaType,
  onDataChange,
}) => {
  const date = new Date();
  const handleReleaseDateChange = (e) => {
    const value = e.target.value;
    onDataChange(value);
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
        id="release"
      >
        {formTranslate(language, `release-${mediaType}`)}
      </FormLabel>
      {mediaType === 'movie' && (
        <Slider
          sx={{
            marginTop: '1vw',
            color: red[700],
            '& .MuiSlider-thumb.Mui-active': {
              boxShadow: '0px 0px 0px 10px rgba(255, 255, 183, 1)',
            },
            '& .MuiSlider-thumb:hover': {
              boxShadow: '0px 0px 0px 6px rgba(255, 255, 183, 1)',
            },
            '& .MuiSlider-thumb.Mui-focusVisible': {
              boxShadow: '0px 0px 0px 10px rgba(255, 255, 183, 1)',
            },
          }}
          onChange={handleReleaseDateChange}
          aria-label="Release Date"
          defaultValue={1900}
          getAriaValueText={(e) => e.toString()}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={1900}
          max={date.getFullYear()}
        />
      )}
      {mediaType === 'tv' && (
        <Slider
          sx={{
            marginTop: '1vw',
            color: red[700],
            '& .MuiSlider-thumb.Mui-active': {
              boxShadow: '0px 0px 0px 10px rgba(255, 255, 183, 1)',
            },
            '& .MuiSlider-thumb:hover': {
              boxShadow: '0px 0px 0px 6px rgba(255, 255, 183, 1)',
            },
            '& .MuiSlider-thumb.Mui-focusVisible': {
              boxShadow: '0px 0px 0px 10px rgba(255, 255, 183, 1)',
            },
          }}
          onChange={handleReleaseDateChange}
          aria-label="Release Date"
          defaultValue={1935}
          getAriaValueText={(e) => e.toString()}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={1935}
          max={date.getFullYear()}
        />
      )}
    </FormControl>
  );
};
