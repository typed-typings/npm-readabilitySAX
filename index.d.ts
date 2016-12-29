export class Readability {
  constructor(options?: Options);

  getTitle(): string;
  getNextPage(): string;
  getHTML(): string;
  getText(): string;
  getArticle(): Article;

  onopentagname(tagname: string): void;
  onattribute(name: string, value: string): void;
  ontext(text: string): void;
  onclosetag(tagname: string): void;
  onreset(): void;
}

export interface Options {
  stripUnlikelyCandidates?: boolean;
  weightClasses?: boolean;
  cleanConditionally?: boolean;
  cleanAttributes?: boolean;
  searchFurtherPages?: boolean;
  linksToSkip?: {
    [url: string]: boolean;
  };
  pageURL?: string;
  type?: 'html' | 'text';
  resolvePaths?: boolean;
}

export interface Article {
  title: string;
  nextPage: string;
  textLength: number;
  score: number;
  html?: string;
  text?: string;
}
