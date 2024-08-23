type Props = {
  promise: Promise<Post[]>; // define the promise property as an array of Post objects
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise; // wait for the promise to resolve

  /* Hello
  1. Map each post to an article element
  2. Display the title and body of each post
  3. Make the post key, the id of the article element
  */
  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });

  return content; // return the content
}
