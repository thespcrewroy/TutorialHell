import { posts } from "./posts.js";

posts.forEach((post) => {
  // Loop through each post
  console.log(post); // Output: {title: "Post 1", body: "This is the first post."}
});
console.clear(); // Clear the console

const filteredPosts = posts.filter((post) => {
  return post.userId === 5; // Filter posts by userId
});
console.log(filteredPosts); // Output: [{title: "Post 1", body: "This is the first post."}]

const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10; // Multiply the id by 10
});
console.log(mappedPosts); // Output: [10]

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post; // Add the post to the sum
});
console.log(reducedPostsValue); // Output: 10
