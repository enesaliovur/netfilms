import Link from "next/link";
import React from "react";
import styles from "./style.module.css";

function Categories({ categories }) {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Link
          key={category.id}
          className={styles.category}
          href={`/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}

export default Categories;
