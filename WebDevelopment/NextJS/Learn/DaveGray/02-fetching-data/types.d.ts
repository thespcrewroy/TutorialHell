// Elements of the Post type for the 02-fetching-data/lib/getUserPosts.tsx
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Elements of the User type for the 02-fetching-data/lib/getUser.tsx and 02-fetching-data/lib/getUserPosts.tsx
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
