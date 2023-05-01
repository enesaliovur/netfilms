import React from "react";

import FeaturedMovie from "@/components/featured_movie/featured_movie";

function MovieContainer({ movie }) {
  return (
    <div>
      <FeaturedMovie movie={movie} isCompact={false} />
    </div>
  );
}

export default MovieContainer;
