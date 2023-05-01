import React from "react";
import CategoriesShimmer from "@/components/categories/categories_shimmer";
import FeaturedMovieShimmer from "@/components/featured_movie/featured_movie_shimmer";
import MoviesSectionShimmer from "@/components/movies_section/movies_section_shimmer";

function loading() {
  return (
    <div>
      <CategoriesShimmer />
      <FeaturedMovieShimmer />
      <MoviesSectionShimmer />
      <MoviesSectionShimmer />
      <MoviesSectionShimmer />
    </div>
  );
}

export default loading;
