type Result = {
  pageid: string; // every result has a unique pageid
  title: string; // every result has a title
  extract: string; // every result has an extract

  // some results have a thumbnail (? means optional)
  thumbnail?: {
    source: string; // every thumbnail has a source
    width: number; // every thumbnail has a width
    height: number; // every thumbnail has a height
  };
};

/* We are not gauranteed to get a result from the Wikipedia API, so we need to account for that. */
type SearchResult = {
  // The query object is optional
  query?: {
    pages?: Result[]; // The pages array is optional
  };
};
