import getUser from "@/lib/getUser"; // import the getUser function from the lib folder
import getUserPosts from "@/lib/getUserPosts"; // import the getUserPosts function from the lib folder
import { Suspense } from "react"; // import the suspense function from react
import UserPosts from "./components/UserPosts"; // import the UserPosts component from the components folder
import type { Metadata } from "next"; // import the Metadata type from next
import getAllUsers from "@/lib/getAllUsers"; // import the getAllUsers function from the lib folder
import { notFound } from "next/navigation"; // import the notFound function from next/navigation

type Params = {
  // define a Params type
  params: {
    // define a params object
    userId: string; // the object has a userId property of type string
  };
};

// Generate metadata for the page
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId); // get an individual user based on the userId
  const user: User = await userData; // get the user data

  // If the user is not found, return a 404 page
  if (!user.name) {
    return {
      title: "User Not Found",
    };
  }

  // Return the title and description of the page
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

// Get the userId from the params object
export default async function page({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId); // get an individual user based on the userId
  const userPostsData: Promise<Post[]> = getUserPosts(userId); // get the posts of the user based on the userId
  // const [user, userPosts] = await Promise.all([userData, userPostsData]); // request the user and thir posts in parallel
  const user = await userData;
  if (!user.name) return notFound(); // if the user is not found, return a 404 page
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading ... </h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers(); // get an array of all users
  const users = await usersData; // get the users data

  // Return the userIds as an array of objects
  return users.map((user) => ({
    userId: user.id.toString(), // return the userId as a string
  }));
}
