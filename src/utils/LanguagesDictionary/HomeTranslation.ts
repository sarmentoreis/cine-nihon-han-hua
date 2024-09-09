export const homeTranslate = (language: string): string => {
  switch (language) {
    case 'jp':
      return '家';
    case 'kr':
      return '집';
    case 'cn':
      return '家';
    case 'pt':
    default:
      return 'Home';
  }
};
