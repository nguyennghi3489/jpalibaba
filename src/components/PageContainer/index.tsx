import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactChild;
}
export const PageContainer = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
