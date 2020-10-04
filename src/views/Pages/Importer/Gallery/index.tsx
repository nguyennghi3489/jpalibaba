import React from "react";

import product2 from "assets/img/product-2.jpg";
import product5 from "assets/img/product-5.jpg";
import product6 from "assets/img/product-6.jpg";
import product7 from "assets/img/product-7.jpg";
import { AddImageCard } from "./AddNewImageCard";
import { ImageCard } from "./ImageCard";

const mockData = [
  {
    created: "September 14, 2016",
    key: "M123",
    title: "Product 1",
    largeUrl: product2,
    mediumUrl: product2,
    originalUrl: product2,
    thumbUrl: product2,
  },
  {
    created: "September 14, 2016",
    key: "M124",
    title: "Product 1",
    largeUrl: product5,
    mediumUrl: product5,
    originalUrl: product5,
    thumbUrl: product5,
  },

  {
    created: "September 14, 2016",
    key: "M1245",
    title: "Product 1",
    largeUrl: product6,
    mediumUrl: product6,
    originalUrl: product6,
    thumbUrl: product6,
  },

  {
    created: "September 14, 2016",
    key: "M1246",
    title: "Product 1",
    largeUrl: product7,
    mediumUrl: product7,
    originalUrl: product7,
    thumbUrl: product7,
  },
  {
    created: "September 14, 2016",
    key: "M1247",
    title: "Product 1",
    largeUrl: product7,
    mediumUrl: product7,
    originalUrl: product7,
    thumbUrl: product7,
  },

  {
    created: "September 14, 2016",
    key: "M1248",
    title: "Product 1",
    largeUrl: product7,
    mediumUrl: product7,
    originalUrl: product7,
    thumbUrl: product7,
  },
];

export const GalleryManagement = () => {
  return (
    <div style={styles.container}>
      <div style={styles.cardWrapper}>
        <AddImageCard />
      </div>
      {mockData.map((item) => (
        <div style={styles.cardWrapper} key={item.key}>
          <ImageCard item={item} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row" as "row",
    flexWrap: "wrap" as "wrap",
  },
  cardWrapper: {
    width: "25%",
    padding: 8,
  },
};
