export const formTranslate = (language: string, id: string): string => {
  if (id === 'discovery') {
    switch (language) {
      case 'jp':
        return 'どのようなお勧めをご希望ですか？';
      case 'kr':
        return '어떤 추천을 원하시나요?';
      case 'cn':
        return '您想要什麼建議？';
      case 'pt':
      default:
        return 'Que tipo de recomendação você gostaria?';
    }
  }

  if (id === 'discovery-options-movie') {
    switch (language) {
      case 'jp':
        return '膜';
      case 'kr':
        return '영화';
      case 'cn':
        return '電影';
      case 'pt':
      default:
        return 'Filmes';
    }
  }

  if (id === 'discovery-options-tv') {
    switch (language) {
      case 'jp':
        return '連続テレビ番組';
      case 'kr':
        return 'TV 시리즈';
      case 'cn':
        return '電視劇';
      case 'pt':
      default:
        return 'Séries';
    }
  }

  if (id === 'age') {
    switch (language) {
      case 'jp':
        return 'あなたは18歳以上ですか？';
      case 'kr':
        return '18세 이상입니까?';
      case 'cn':
        return '你已經18歲以上了嗎？';
      case 'pt':
      default:
        return 'Você tem mais de 18 anos?';
    }
  }

  if (id === 'age-options-y') {
    switch (language) {
      case 'jp':
        return 'はい';
      case 'kr':
        return '예';
      case 'cn':
        return '是的';
      case 'pt':
      default:
        return 'Sim';
    }
  }

  if (id === 'age-options-n') {
    switch (language) {
      case 'jp':
        return 'いいえ';
      case 'kr':
        return '아니요';
      case 'cn':
        return '不';
      case 'pt':
      default:
        return 'Não';
    }
  }

  if (id === 'genre') {
    switch (language) {
      case 'jp':
        return 'あなたの性格によれば、あなたは自分自身を次のように考えていますか?';
      case 'kr':
        return '당신의 성격에 따르면, 당신은 자신을 다음과 같이 생각합니까?';
      case 'cn':
        return '根據您的性格，您認為自己：';
      case 'pt':
      default:
        return 'De acordo com sua personalidade, você se considera uma pessoa: ';
    }
  }

  if (id === 'genre-options-visionary-adventure') {
    switch (language) {
      case 'jp':
        return 'エネルギッシュな, 大胆な, 好奇心旺盛, クリエイティブ';
      case 'kr':
        return '에너지가 넘치는, 용감한, 궁금한, 창의적인';
      case 'cn':
        return '精力充沛, 大膽的, 好奇的, 有創造力的';
      case 'pt':
      default:
        return 'Enérgica, Ousada, Curiosa e Criativa';
    }
  }

  if (id === 'genre-options-curious-adventure') {
    switch (language) {
      case 'jp':
        return '勇敢な, 大胆な, 挑戦的, 複雑な物語の愛好家';
      case 'kr':
        return '용감한, 단호한, 도전적인, 복잡한 이야기를 좋아하는 사람들';
      case 'cn':
        return '勇敢的, 大膽的, 具有挑戰性的, 複雜故事愛好者';
      case 'pt':
      default:
        return 'Corajosa, Determinada, Desafiadora e Amante de Histórias Complexas';
    }
  }

  if (id === 'genre-options-emotional-dreamer') {
    switch (language) {
      case 'jp':
        return '敏感, 共感的な, ロマンチック, 懐かしい';
      case 'kr':
        return '감성적, 감정 이입, 낭만적인, 향수를 불러일으키는';
      case 'cn':
        return '情緒化的, 有同理心的, 浪漫的, 懷舊的';
      case 'pt':
      default:
        return 'Sensível, Empática, Romântica e Nostálgica';
    }
  }

  if (id === 'genre-options-sensitive-dreamer') {
    switch (language) {
      case 'jp':
        return '敏感, 共感的な, 懐かしい, 感動的な家族の物語が好きな人';
      case 'kr':
        return '감성적, 감정 이입, 향수를 불러일으키는, 감성적인 가족 이야기를 사랑하는 사람';
      case 'cn':
        return '情緒化的, 有同理心的, 懷舊的, 喜歡感人的家庭故事的人';
      case 'pt':
      default:
        return 'Sensível, Empática, Nostálgica, Amante de Histórias Familiares Emocionantes';
    }
  }

  if (id === 'genre-options-analytical-investigator') {
    switch (language) {
      case 'jp':
        return '分析する, 好奇心旺盛, 合理的な, 研究者';
      case 'kr':
        return '분석하다, 궁금한, 합리적인, 연구자';
      case 'cn':
        return '分析, 好奇的, 合理的, 調查性的';
      case 'pt':
      default:
        return 'Analítica, Curiosa, Racional e Investigativa';
    }
  }

  if (id === 'genre-options-rational-investigator') {
    switch (language) {
      case 'jp':
        return '合理的な, 好奇心旺盛, 犯罪捜査マニア, 政治的なテーマへの感謝';
      case 'kr':
        return '합리적인, 궁금한, 범죄 수사에 열광하는 사람, 정치적 주제에 대한 감상';
      case 'cn':
        return '合理的, 好奇的, 犯罪調查狂熱, 政治題材的鑑賞';
      case 'pt':
      default:
        return 'Racional, Curiosa, Entusiasta de Investigação Criminal e Temas Políticos ';
    }
  }

  if (id === 'genre-options-relaxed-spirit') {
    switch (language) {
      case 'jp':
        return '可笑しい, 優雅な, 懐かしい, クリエイティブ';
      case 'kr':
        return '재미있는, 우아한, 향수를 불러일으키는, 창의적인';
      case 'cn':
        return '有趣的, 優雅的, 懷舊的, 有創造力的';
      case 'pt':
      default:
        return 'Engraçada, Leve, Nostálgica e Criativa';
    }
  }

  if (id === 'genre-options-relaxed-sociable') {
    switch (language) {
      case 'jp':
        return '可笑しい, 優雅な, 気安い, 社交する';
      case 'kr':
        return '재미있는, 우아한, 편안한, 창의적인, 사회의';
      case 'cn':
        return '有趣的, 優雅的, 便宜的, 社會的';
      case 'pt':
      default:
        return 'Engraçada, Leve, Descontraída e Social';
    }
  }

  if (id === 'release-movie') {
    switch (language) {
      case 'jp':
        return 'どの 10 年間の映画公開を見たいですか?';
      case 'kr':
        return '어떤 10년의 영화가 개봉되기를 원하시나요?';
      case 'cn':
        return '您想看哪個年代上映的電影？';
      case 'pt':
      default:
        return 'Qual década de lançamento de filmes gostaria de assistir?';
    }
  }

  if (id === 'release-tv') {
    switch (language) {
      case 'jp':
        return 'どの 10 年間の TV シリーズの開始を見たいですか?';
      case 'kr':
        return '어떤 10 년간 TV 시리즈의 시작을보고 싶습니까?';
      case 'cn':
        return '您希望看到哪個十年的電視劇開始？';
      case 'pt':
      default:
        return 'Qual década de lançamento de séries gostaria de assistir?';
    }
  }

  if (id === 'region') {
    switch (language) {
      case 'jp':
        return '西/東';
      case 'kr':
        return '서쪽/동쪽';
      case 'cn':
        return '西/東';
      case 'pt':
      default:
        return 'Ocidente/Oriente';
    }
  }

  if (id === 'btn-submit') {
    switch (language) {
      case 'jp':
        return '提出する';
      case 'kr':
        return '제출하다';
      case 'cn':
        return '提交';
      case 'pt':
      default:
        return 'Submeter';
    }
  }
  return '';
};
