export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); // fetch users from the JSONPlaceholder API
  if (!res.ok) throw new Error("Failed to fetch users"); // throw an error if the response is not ok
  return res.json(); // return the JSON response
}
