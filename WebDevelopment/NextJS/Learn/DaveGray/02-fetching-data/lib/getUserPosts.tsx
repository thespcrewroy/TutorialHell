// takes a userId as a string
export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } } // queries and gets the posts based on the userId
  );
  if (!res.ok) return undefined; // if the response is not ok, return undefined
  return res.json(); // returns the response as json
}
