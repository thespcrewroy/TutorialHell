import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

/* Create a props interface for the page component that has a searchTerm property of type string */
type Props = {
  params: {
    searchTerm: string;
  };
};

/* Take in a search term property from the props object and return a promise of type SearchResult */
export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm); // get the wiki data for the search term
  const data = await wikiData; // wait for the wikiData promise to resolve
  const displayTerm = searchTerm.replaceAll("%20", " "); // replace %20 with a space in the search term

  // if there are no pages in the data
  if (!data?.query?.pages) {
    // Return an object with the title property set to `${displayTerm} Not Found`
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  // Else, return an object with its title property and description property set to the displayTerm
  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

// Destructure the searchTerm from the params object by taking the searchTerm property from the params object
export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm); // get the wiki data for the search term
  const data = await wikiData; // wait for the wikiData promise to resolve
  const results: Result[] | undefined = data.query?.pages; // get an array of results, however, it may be undefined

  /*
  1. Create a main element with the following classes: bg-slate-200, mx-auto, max-w-lg, py-1, and min-h-screen
  2. If results is truthy, map over the values of results and return a paragraph element with the stringified result
  3. If results is falsy, return an h2 element with the text `${searchTerm} Not Found`
  */
  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
