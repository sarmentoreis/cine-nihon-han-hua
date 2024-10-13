import { useContext, useEffect, useState } from 'react';
import { fetchMovie, fetchTv, tmdb } from '../../services/axios';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid2,
  CircularProgress,
  Box,
  Modal,
  Pagination,
} from '@mui/material';
import { FormDataContext } from '../../contexts/FormContext';
import { ITMDBResponse } from './ITmdb';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useModal } from '../../hooks/useModal';
import { formTranslate } from '../../utils/LanguagesDictionary/FormTranslation';
import noImage from '../../assets/no-image.png';

const DiscoveryMedia = () => {
  const { formData } = useContext(FormDataContext);
  const { language } = useContext(LanguageContext);
  const { openModal, closeModal, isModalOpen, selectedMedia } = useModal();
  const [data, setData] = useState<ITMDBResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response =
          formData.discovery === 'movie'
            ? await fetchMovie(formData, page)
            : await fetchTv(formData, page);
        setData(response!.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (formData.releaseYear && formData.decade) {
      fetchData();
    }
  }, [formData, page]);

  if (loading)
    return (
      <div
        style={{
          display: 'flex',
          height: '70vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress color="error" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data && (
        <Grid2 container spacing={2} justifyContent="center">
          {data.results.map((eachMedia) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={eachMedia.id}>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                  sx={{ height: 'auto', objectFit: 'contain' }}
                  component="img"
                  image={
                    eachMedia.poster_path !== null
                      ? `https://image.tmdb.org/t/p/w500/${eachMedia.poster_path}`
                      : noImage
                  }
                  alt={eachMedia.original_title}
                />
                <CardContent sx={{ backgroundColor: 'var(--main-color)' }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontFamily={'inherit'}
                    color={'var(--font-main-color)'}
                  >
                    {language !== 'pt'
                      ? eachMedia.original_title || eachMedia.original_name
                      : eachMedia.title || eachMedia.name}
                  </Typography>
                </CardContent>
                <Button
                  sx={{
                    color: 'var(--main-color)',
                    fontFamily: 'Sawarabi Mincho',
                    fontWeight: 'bold',
                  }}
                  size="small"
                  onClick={() => openModal(eachMedia)}
                >
                  {formTranslate(language, 'overview')}
                </Button>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      )}
      <Pagination
        count={data?.total_pages} // Define o número total de páginas
        page={page}
        onChange={changePage}
        color="primary"
        sx={{
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'var(--main-color)',
            color: 'var(--font-main-color)',
          },
          display: 'flex',
          justifyContent: 'center',
          mt: 5,
          mb: 2,
        }}
      />
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'var(--main-color)',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedMedia && (
            <>
              <Typography
                variant="h5"
                component="h2"
                fontFamily={'inherit'}
                color={'var(--font-main-color)'}
              >
                {language !== 'pt'
                  ? selectedMedia.original_title || selectedMedia.original_name
                  : selectedMedia.title || selectedMedia.name}
              </Typography>
              <Typography
                fontFamily={'inherit'}
                color={'var(--font-main-color)'}
                sx={{ mt: 2 }}
              >
                {selectedMedia.overview}
              </Typography>
            </>
          )}
          <Button
            onClick={closeModal}
            sx={{ paddingLeft: '0', color: 'var(--font-main-color)', mt: 3 }}
          >
            {formTranslate(language, 'close-modal')}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default DiscoveryMedia;