import Link from "next/link";
import React from "react";
import Skeleton from "../skeleton/skeleton";

import styles from "./style.module.css";

function CategoriesShimmer() {
  return (
    <div className={styles.categories}>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={72} />
        ))}
    </div>
  );
}

export default CategoriesShimmer;
