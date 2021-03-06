const PUNCTUATION = {
  // @see http://www.unicode.org/cldr/charts/29/summary/en.html#4
  en: '[-‐–—,;:!?.…\'‘’"“”()[\\]§@*/&#†‡′″]',
  fr: '[-‐–—,;:!?.…’"“”«»()[\\]§@*/&#†‡]',
  ja: '[-‾_＿－‐—―〜・･,，、､;；:：!！?？.．‥…。｡＇‘’"＂“”(（)）\\[［\\]］{｛}｝' +
  '〈〉《》「｢」｣『』【】〔〕‖§¶@＠*＊/／\\＼&＆#＃%％‰†‡′″〃※]',
};

export default class SalutationsCleaner {
  clean(obj = { cleaned: '' }) {
    const cleaned = obj.cleaned
      .replace(
        new RegExp(`^(?:Hello|Hey|Hi|Yo)${PUNCTUATION.en}* (.)`, 'i'),
        // Capitalise the first letter.
        (match, letter) => letter.toUpperCase()
      );

    obj.cleaned = cleaned;

    return Promise.resolve(obj);
  }
}
