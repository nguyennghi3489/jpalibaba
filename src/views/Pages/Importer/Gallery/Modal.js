import { Modal, Typography } from "@material-ui/core";
import React from "react";
import { AddImageCard } from "./AddNewImageCard";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { ImageSelectCard } from "./ImageSelectCard";
import product2 from "assets/img/product-2.jpg";
import product5 from "assets/img/product-5.jpg";
import product6 from "assets/img/product-6.jpg";
import product7 from "assets/img/product-7.jpg";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";

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
export const GalleryModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={styles.modalContainer}>
        <Card>
          <CardHeader color="primary" icon>
            <Typography variant="h6" component="h6" style={styles.title}>
              Pick The Product Image
            </Typography>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} md={4} style={styles.addImageCard}>
                <AddImageCard />
              </GridItem>
              <GridItem xs={12} md={8}>
                <div style={styles.container}>
                  {mockData.map((item) => (
                    <div style={styles.cardWrapper} key={item.key}>
                      <ImageSelectCard item={item} />
                    </div>
                  ))}
                </div>
              </GridItem>
              <GridItem xs={12} md={12}>
                <Button
                  color="rose"
                  // className={classes.actionButton}
                  type="submit"
                  style={styles.button}
                  onClick={onClose}
                >
                  CANCEL
                </Button>
                <Button
                  color="rose"
                  // className={classes.actionButton}
                  type="submit"
                  style={styles.button}
                >
                  Submit
                </Button>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </div>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    width: "80%",
    margin: "0 auto",
    background: "white",
    height: "60%",
    top: "10%",
    position: "relative",
  },
  //   container: {
  //     display: "flex",
  //     flex: 1,
  //     flexDirection: "row" as "row",
  //     flexWrap: "wrap" as "wrap",
  //   },

  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardWrapper: {
    width: "33%",
    padding: "0 8px",
    marginBottom: 16,
  },
  title: {
    padding: 16,
    color: "black",
  },
  addImageCard: {
    alignSelf: "flex-start",
  },
  button: {
    float: "right",
    marginRight: "16px",
  },
};
