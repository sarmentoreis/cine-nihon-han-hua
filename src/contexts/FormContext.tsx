import { createContext, ReactNode, useState } from 'react';

export interface IFormData {
  discovery: string;
  age: boolean | null;
  genre: string;
  releaseYear: string;
  decade: number;
  asian: boolean;
}

interface FormDataContextType {
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
}

const defaultFormData: IFormData = {
  discovery: '',
  age: null,
  genre: '',
  releaseYear: '',
  decade: 0,
  asian: true,
};

export const FormDataContext = createContext<FormDataContextType>({
  formData: defaultFormData,
  setFormData: () => {},
});

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<IFormData>(defaultFormData);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
