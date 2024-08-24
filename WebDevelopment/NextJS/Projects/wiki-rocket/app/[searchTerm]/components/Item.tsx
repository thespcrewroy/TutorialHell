import Link from "next/link"; // import the Link component

/* Create a functional component called Item that takes a props object of type Props */
type Props = {
  result: Result; // create a props interface with a result property of type Result
};

/* Take in a result object from the props object and return a JSX element that displays the result */
export default function Item({ result }: Props) {
  // Create the item text column that contains the title and extract of the result
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link // create a link to the Wikipedia page with the pageid
          href={`https://en.wikipedia.org/?curid=${result.pageid}`} // the title has a link back to the Wikipedia page with the result's pageid
          target="_blank" // open the link in a new tab
          className="text-xl font-bold underline" // set the text size to extra large and bold
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  /*
  1. Make sure the thumbnail and source exist before rendering the image
  2. Puts teh item text column with the thumbnail in a flex row if the thumbnail exists
  */
  const content = result?.thumbnail?.source ? (
    <article className="m-4 max-w-lg">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          {/* Create the thumbnail image with the source, alt, width, and height if the condition is true*/}
          <img
            src={result.thumbnail.source} // set the source of the image to the result's thumbnail source
            alt={result.title} // set the alt text to the result's title
            width={result.thumbnail.width} // set the width to the result's thumbnail width
            height={result.thumbnail.height} // set the height to the result's thumbnail height
            loading="lazy" // lazy load the image
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    // For the false condition, create an article that wraps around the item text column
    <article className="m-4 max-w-lg">{itemTextCol}</article>
  );

  return content;
}
