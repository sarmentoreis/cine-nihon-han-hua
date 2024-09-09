export const headerTranslate = (language: string): string => {
  switch (language) {
    case 'jp':
      return 'シネ日本 韓華';
    case 'kr':
      return '시네 니혼 한화';
    case 'cn':
      return '日本韩华影院';
    case 'pt':
    default:
      return 'Cine Nihon Han Hua';
  }
};
