import HomeContainer from "@/containers/home/home_container";
import React from "react";

import Movies from "@/mocks/movies.json";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomePage({ params }) {
  await delay(20000);
  let selectedCategory;
  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}
export default HomePage;
