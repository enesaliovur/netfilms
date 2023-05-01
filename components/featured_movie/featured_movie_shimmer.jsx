import React from "react";
import CustomLoadingIndicator from "@/components/loading/custom_loading_indicator";

import styles from "./styles.module.css";

function FeaturedMovieShimmer() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <CustomLoadingIndicator />
    </div>
  );
}

export default FeaturedMovieShimmer;
