import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

interface ILanguageContext {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: 'pt',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
