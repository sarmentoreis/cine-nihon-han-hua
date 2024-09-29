import { useContext, useState } from 'react';
import { Button, Box } from '@mui/material';
import { LanguageContext } from '../../contexts/LanguageContext';
import { formTranslate } from '../../utils/LanguagesDictionary/FormTranslation';
import { QuestionAge } from '../Questions/QuestionAge';
import { QuestionDiscovery } from '../Questions/QuestionDiscovery';
import { QuestionMovieGenre } from '../Questions/QuestionMovieGenre';
import { QuestionTvGenre } from '../Questions/QuestionTvGenre';
import { useDiscoveryQuestion } from '../../hooks/useDiscoveryQuestion';
import { QuestionReleaseDate } from '../Questions/QuestionReleaseDate';
import { QuestionRegion } from '../Questions/QuestionRegion';

interface IFormData {
  discovery: string;
  age: boolean;
  genre: string;
  releaseYear: string;
  isAsian: boolean;
}

export const Form = () => {
  const { language } = useContext(LanguageContext);
  const { discoveryResponse, handleDiscoveryChange } = useDiscoveryQuestion();
  const [formData, setFormData] = useState<IFormData>({
    discovery: '',
    age: false,
    genre: '',
    releaseYear: '',
    isAsian: true,
  });

  const handleDataChange = (data: Partial<IFormData>) => {
    console.log(data);
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: 'auto',
        margin: '2vh auto',
      }}
      onSubmit={handleSubmit}
    >
      <QuestionDiscovery
        language={language}
        onDiscoveryChange={handleDiscoveryChange}
        onDataChange={(value) => handleDataChange({ discovery: value })}
      />
      <QuestionAge
        language={language}
        onDataChange={(value) =>
          handleDataChange({ age: value === 'yes' ? true : false })
        }
      />
      {discoveryResponse === 'movie' && (
        <QuestionMovieGenre
          language={language}
          onDataChange={(value) => handleDataChange({ genre: value })}
        />
      )}
      {discoveryResponse === 'tv' && (
        <QuestionTvGenre
          language={language}
          onDataChange={(value) => handleDataChange({ genre: value })}
        />
      )}
      <QuestionReleaseDate
        language={language}
        mediaType={discoveryResponse}
        onDataChange={(value) => handleDataChange({ releaseYear: value })}
      />
      <QuestionRegion
        language={language}
        onDataChange={(value) => handleDataChange({ isAsian: value })}
      />
      <Button
        sx={{
          marginTop: '3vh',
          borderColor: '#700917',
          background: '#700917',
          color: '#FFFFB7',
          fontFamily: 'Sawarabi Mincho',
        }}
        variant="outlined"
        type="submit"
      >
        {formTranslate(language, 'btn-submit')}
      </Button>
    </Box>
  );
};
