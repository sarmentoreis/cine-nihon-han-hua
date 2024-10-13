import axios, { AxiosResponse } from 'axios';
import { token } from '../config/config';
import { ITMDBResponse } from '../components/DiscoveryMedia/ITmdb';
import { IFormData } from '../contexts/FormContext';

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/discover',
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchMovie = async (
  formData: IFormData,
  page: number
): Promise<AxiosResponse<ITMDBResponse, any> | undefined> => {
  try {
    const response = await tmdb.get<ITMDBResponse>('/movie', {
      params: {
        with_origin_country: formData.asian ? 'JP|KR|CN' : 'US',
        include_adult: formData.age,
        with_genres: formData.genre,
        'primary_release_date.gte': `${formData.releaseYear}-01-01`,
        'primary_release_date.lte': `${formData.decade.toString()}-12-31`,
        page,
      },
    });
    return response;
  } catch (error) {}
};

export const fetchTv = async (
  formData: IFormData,
  page: number
): Promise<AxiosResponse<ITMDBResponse, any> | undefined> => {
  try {
    const response = await tmdb.get<ITMDBResponse>('/tv', {
      params: {
        with_origin_country: formData.asian ? 'JP|KR|CN' : 'US',
        include_adult: formData.age,
        with_genres: formData.genre,
        'first_air_date.gte': `${formData.releaseYear}-01-01`,
        'first_air_date.lte': `${formData.decade.toString()}-12-31`,
        page,
      },
    });
    return response;
  } catch (error) {}
};
