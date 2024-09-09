export const footerTranslate = (language: string): string => {
  switch (language) {
    case 'jp':
      return '© 2024 シネ日本 韓華.無断転載を禁じます。';
    case 'kr':
      return '© 2024 씨네니혼한화. 모든 권리 보유.';
    case 'cn':
      return '© 2024 日本韩华影 。院版權所有。';
    case 'pt':
    default:
      return '© 2024 Cine Nihon Han Hua. Todos os direitos reservados.';
  }
};
