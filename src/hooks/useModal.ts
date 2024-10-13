import { useState } from 'react';
import { IMedia } from '../components/DiscoveryMedia/ITmdb';

export const useModal = () => {
  const [selectedMedia, setSelectedMedia] = useState<IMedia>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (media: IMedia) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMedia(undefined);
    setIsModalOpen(false);
  };

  return { openModal, closeModal, isModalOpen, selectedMedia };
};
