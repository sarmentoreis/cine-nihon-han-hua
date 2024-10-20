import axios, { AxiosResponse } from 'axios';
import { token } from '../config/config';
import {
  ITMDBResponse,
  IVideoResponse,
} from '../components/DiscoveryMedia/ITmdb';
import { IFormData } from '../contexts/FormContext';

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchMovie = async (
  formData: IFormData,
  page: number,
  languageContext: string
): Promise<AxiosResponse<ITMDBResponse, any> | undefined> => {
  try {
    const language = getLanguage(languageContext);
    const response = await tmdb.get<ITMDBResponse>('/discover/movie', {
      params: {
        with_origin_country: formData.asian
          ? filterCountry(languageContext)
          : 'US',
        include_adult: formData.age,
        with_genres: formData.genre,
        'primary_release_date.gte': `${formData.releaseYear}-01-01`,
        'primary_release_date.lte': `${formData.decade.toString()}-12-31`,
        language,
        page,
      },
    });
    return response;
  } catch (error) {}
};

export const fetchTv = async (
  formData: IFormData,
  page: number,
  languageContext: string
): Promise<AxiosResponse<ITMDBResponse, any> | undefined> => {
  try {
    const language = getLanguage(languageContext);
    const response = await tmdb.get<ITMDBResponse>('/discover/tv', {
      params: {
        with_origin_country: formData.asian
          ? filterCountry(languageContext)
          : 'US',
        include_adult: formData.age,
        with_genres: formData.genre,
        'first_air_date.gte': `${formData.releaseYear}-01-01`,
        'first_air_date.lte': `${formData.decade.toString()}-12-31`,
        language,
        page,
      },
    });
    return response;
  } catch (error) {}
};

export const fetchMovieTrailer = async (
  movieId: number,
  languageContext: string
): Promise<string | undefined> => {
  try {
    const language = getLanguage(languageContext);
    let response = await tmdb.get<IVideoResponse>(`/movie/${movieId}/videos`, {
      params: { language },
    });
    if (response.data.results.length === 0) {
      response = await tmdb.get<IVideoResponse>(`/movie/${movieId}/videos`, {
        params: { language: 'en-US' },
      });
    }
    const trailer = response.data.results.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );

    if (trailer) {
      return trailer.key;
    } else {
      return '';
    }
  } catch (error) {
    return '';
  }
};

export const fetchTvTrailer = async (
  seriesId: number,
  languageContext: string
): Promise<string | undefined> => {
  try {
    const language = getLanguage(languageContext);
    let response = await tmdb.get<IVideoResponse>(`/tv/${seriesId}/videos`, {
      params: { language },
    });
    if (response.data.results.length === 0) {
      response = await tmdb.get<IVideoResponse>(`/tv/${seriesId}/videos`, {
        params: { language: 'en-US' },
      });
    }
    let trailer = response.data.results.find(
      (video) =>
        (video.type === 'Trailer' && video.site === 'YouTube') ||
        (video.type === 'Featurette' && video.site === 'YouTube') ||
        (video.type === 'Opening Credits' && video.site === 'YouTube')
    );
    return trailer?.key;
  } catch (error) {
    return '';
  }
};

const getLanguage = (languageContext: string): string => {
  switch (languageContext) {
    case 'jp':
      return 'ja';
    case 'kr':
      return 'ko';
    case 'ch':
      return 'zh';
    default:
      return 'en';
  }
};

const filterCountry = (languageContext: string): string => {
  if (languageContext !== 'pt') {
    return languageContext.toUpperCase();
  } else {
    return 'JP|KR|CH';
  }
};
