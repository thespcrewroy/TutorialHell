"use client"; // error pages must be client-side only

import { useState, FormEvent } from "react"; // import the useState hook
import { useRouter } from "next/navigation"; // import the useRouter hook

export default function Search() {
  const [search, setSearch] = useState(""); // create a state variable for the search input
  const router = useRouter(); // get the router object

  // Create a submit handler that takes a FormEvent of type HTMLFormElement
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent the default form submission
    setSearch(""); // clear the search input
    router.push(`/${search}/`); // navigate to the search results page
  };

  // Return a form with an input and a button
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="Search"
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚀
      </button>
    </form>
  );
}
