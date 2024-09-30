export const footerTranslate = (language: string, year: number): string => {
  switch (language) {
    case 'jp':
      return `© ${year} シネ日本 韓華.無断転載を禁じます。`;
    case 'kr':
      return `© ${year} 씨네니혼한화. 모든 권리 보유.`;
    case 'cn':
      return `© ${year} 日本韩华影 。院版權所有。`;
    case 'pt':
    default:
      return `© ${year} Cine Nihon Han Hua. Todos os direitos reservados.`;
  }
};
