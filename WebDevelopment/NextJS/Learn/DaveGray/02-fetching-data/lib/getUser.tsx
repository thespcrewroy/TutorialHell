// takes a userId as a string
export default async function getUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}` // fetches user data from jsonplaceholder based on the id
  );
  if (!res.ok) return undefined; // if the response is not ok, return undefined
  return res.json(); // returns the response as json
}
