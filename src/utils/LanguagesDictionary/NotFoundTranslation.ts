export const notFoundTranslate = (language: string): string => {
  switch (language) {
    case 'jp':
      return '申し訳ございませんが、お探しのページは見つかりませんでした。';
    case 'kr':
      return '죄송합니다. 찾는 페이지를 찾을 수 없습니다.';
    case 'cn':
      return '很抱歉，找不到您要找的頁面。';
    case 'pt':
    default:
      return 'Desculpe, a página que você está procurando não foi encontrada.';
  }
};
