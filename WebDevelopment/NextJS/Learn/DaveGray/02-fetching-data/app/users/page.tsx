import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers(); // promise returns an array of Users
  const users = await usersData; // wait for the promise to resolve

  console.log("Hello"); // log "Hello" to the console

  /*
   * 1. Create a heading with a link to the home page
   * 2. Create a paragraph element with a link to the user's id (page) when clicking the name for each user
   */
  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content; // return the JSX content
}
