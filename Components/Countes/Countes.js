import React, { useEffect, useState } from "react";
import styles from "./Countes.module.css";


export default function Countes({ count }) {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 50);

    counter === count && clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <span className={`${styles.counter__desc_items_details_social_count}`}>
      {counter}
    </span>
  );
}
