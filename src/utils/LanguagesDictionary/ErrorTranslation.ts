export const errorTranslate = (language: string, id: string): string => {
  if (id === 'discovery') {
    switch (language) {
      case 'jp':
        return '推奨事項を選択してください';
      case 'kr':
        return '추천을 선택하세요';
      case 'cn':
        return '選擇推薦';
      case 'pt':
      default:
        return 'Selecione uma recomendação';
    }
  }

  if (id === 'age') {
    switch (language) {
      case 'jp':
        return '18 歳以上であるかどうかを明記してください';
      case 'kr':
        return '18세 이상인지 표시해주세요.';
      case 'cn':
        return '請註明您是否年滿18歲';
      case 'pt':
      default:
        return 'Informe se você é maior de 18 anos';
    }
  }

  if (id === 'genre') {
    switch (language) {
      case 'jp':
        return 'あなたの個性に合わせてオプションを入力してください';
      case 'kr':
        return '성격에 따라 옵션을 입력하세요';
      case 'cn':
        return '根據您的個性輸入選項';
      case 'pt':
      default:
        return 'Informe uma opção de acordo com sua personalidade';
    }
  }

  if (id === 'release') {
    switch (language) {
      case 'jp':
        return 'リリースの年代を選択してください';
      case 'kr':
        return '출시 연도 선택';
      case 'cn':
        return '選擇發布的十年';
      case 'pt':
      default:
        return 'Escolha a década de lançamentos';
    }
  }
  return '';
};
