import product2 from "assets/img/product-2.jpg";
import React from "react";
import { AddImageCard } from "views/Pages/Importer/Gallery/AddNewImageCard";
import { ImageCard } from "views/Pages/Importer/Gallery/ImageCard";

const mockData = [
  {
    created: "September 14, 2016",
    id: "M123",
    title: "Product 1",
    largeUrl: product2,
    mediumUrl: product2,
    originalUrl: product2,
    thumbUrl: product2,
  },
];

export const GallerySelection = () => {
  return (
    <div>
      return (
      <div style={styles.container}>
        <div style={styles.cardWrapper}>
          <AddImageCard />
        </div>
        {mockData.map((item) => (
          <div style={styles.cardWrapper} key={item.id}>
            <ImageCard item={item} />
          </div>
        ))}
      </div>
      );
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
