import { FormControlLabel } from '@mui/material';
import { formTranslate } from '../../../utils/LanguagesDictionary/FormTranslation';
import { FC } from 'react';
import { RegionSwitch } from '../../StyledComponents/Switch';

interface QuestionRegionProps {
  language: string;
  onDataChange: (isAsian: boolean) => void;
}

export const QuestionRegion: FC<QuestionRegionProps> = ({
  language,
  onDataChange,
}) => {
  const handleRegionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    onDataChange(value);
  };
  return (
    <FormControlLabel
      control={<RegionSwitch onChange={handleRegionChange} sx={{ m: 1 }} />}
      label={formTranslate(language, 'region')}
    />
  );
};
