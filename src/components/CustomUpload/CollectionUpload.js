import React from "react";
import PictureUpload from "components/CustomUpload/PictureUpload";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Cancel from "@material-ui/icons/Cancel";
import productPlaceHolder from "assets/img/product-placeholder.jpeg";

const style = {
  thumbs: {
    position: "relative",
    "& svg": {
      color: "red",
      position: "absolute",
      top: 2,
      right: 15,
    },
  },
  img: {
    width: "100%",
    maxWidth: "100%",
  },
};
export default class CollectionUpload extends React.Component {
  state = {
    imageThumbs: [],
  };

  onThumbsUpload = (file, url) => {
    const { onUpload } = this.props;

    const thumbs = Object.assign([], this.state.imageThumbs);
    thumbs.push({
      file,
      url,
    });
    this.setState({ imageThumbs: thumbs });

    onUpload(thumbs);
  };

  render() {
    const { imageThumbs } = this.state;
    return (
      <>
        <PictureUpload
          showImage={false}
          onUpload={this.onThumbsUpload}
          image={productPlaceHolder}
          title={"Add Thumbs"}
        />
        <GridContainer>
          {imageThumbs &&
            imageThumbs.map((item) => (
              <GridItem
                xs={12}
                sm={12}
                md={6}
                style={style.thumbs}
                key={item.url}
              >
                <Cancel />
                <img src={item.url} style={style.img} />
              </GridItem>
            ))}
        </GridContainer>
      </>
    );
  }
}
