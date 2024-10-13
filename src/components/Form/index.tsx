import { useContext } from 'react';
import { Button, Box, Snackbar } from '@mui/material';
import { LanguageContext } from '../../contexts/LanguageContext';
import { formTranslate } from '../../utils/LanguagesDictionary/FormTranslation';
import { QuestionAge } from '../Questions/QuestionAge';
import { QuestionDiscovery } from '../Questions/QuestionDiscovery';
import { QuestionMovieGenre } from '../Questions/QuestionMovieGenre';
import { QuestionTvGenre } from '../Questions/QuestionTvGenre';
import { useDiscoveryQuestion } from '../../hooks/useDiscoveryQuestion';
import { QuestionReleaseDate } from '../Questions/QuestionReleaseDate';
import { QuestionRegion } from '../Questions/QuestionRegion';
import useSnackBar from '../../hooks/useSnackBar';
import { errorTranslate } from '../../utils/LanguagesDictionary/ErrorTranslation';
import { useNavigate } from 'react-router-dom';
import { FormDataContext, IFormData } from '../../contexts/FormContext';

export const Form = () => {
  const { language } = useContext(LanguageContext);
  const { discoveryResponse, handleDiscoveryChange } = useDiscoveryQuestion();
  const { state, handleClick, handleClose, growTransition } = useSnackBar();
  const formContext = useContext(FormDataContext);
  const { formData, setFormData } = formContext || {};
  const navigate = useNavigate();
  const handleDataChange = (data: Partial<IFormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.discovery) {
      handleClick(growTransition, errorTranslate(language, 'discovery'))();
      return;
    }
    if (formData.age === null) {
      handleClick(growTransition, errorTranslate(language, 'age'))();
      return;
    }
    if (!formData.genre) {
      handleClick(growTransition, errorTranslate(language, 'genre'))();
      return;
    }
    if (!formData.releaseYear) {
      handleClick(growTransition, errorTranslate(language, 'release'))();
      return;
    }

    navigate('/media');
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
        onDataChange={(value) =>
          handleDataChange({ releaseYear: value, decade: Number(value + 10) })
        }
      />
      <QuestionRegion
        language={language}
        onDataChange={(value) => handleDataChange({ asian: value })}
      />
      <Button
        sx={{
          marginTop: '3vh',
          borderColor: 'var(--main-color)',
          background: 'var(--main-color)',
          color: 'var(--font-main-color)',
          fontFamily: 'Sawarabi Mincho',
        }}
        variant="outlined"
        type="submit"
      >
        {formTranslate(language, 'btn-submit')}
      </Button>
      <Snackbar
        sx={{
          '& .MuiPaper-root': {
            color: 'var(--font-main-color)',
            backgroundColor: 'var(--main-color)',
          },
        }}
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message={state.message}
        key={state.Transition.name}
        autoHideDuration={3000}
      />
    </Box>
  );
};
