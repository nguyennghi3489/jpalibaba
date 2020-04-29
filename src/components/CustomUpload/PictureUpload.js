import React from "react";

import defaultImage from "assets/img/default-avatar.png";

export default function PictureUpload({
  image = defaultImage,
  title = "Choose Picture",
}) {
  const [file, setFile] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(image);
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let newFile = e.target.files[0];
    console.log(newFile);
    reader.onload = () => {
      console.log(reader.result);
      setFile(newFile);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(newFile);
  };
  // eslint-disable-next-line
  const handleSubmit = (e) => {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  };
  return (
    <div className="picture-container">
      <div className="picture">
        <img src={imagePreviewUrl} className="picture-src" alt="..." />
        <input type="file" onChange={(e) => handleImageChange(e)} />
      </div>
      <h6 className="description">{title}</h6>
    </div>
  );
}
