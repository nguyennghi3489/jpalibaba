import React from "react";

import defaultImage from "assets/img/default-avatar.png";

export default function PictureUpload({
  image = defaultImage,
  title = "Choose Picture",
  onUpload,
  showImage,
}) {
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(image);
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let newFile = e.target.files[0];
    reader.onload = () => {
      setImagePreviewUrl(reader.result);
      onUpload(newFile, reader.result);
    };
    reader.readAsDataURL(newFile);
  };
  return (
    <div className="picture-container">
      <div className="picture">
        {showImage ? (
          <img src={imagePreviewUrl} className="picture-src" alt="..." />
        ) : (
          <img src={image} className="picture-src" alt="..." />
        )}
        <input type="file" onChange={(e) => handleImageChange(e)} />
      </div>
      <h6 className="description">{title}</h6>
    </div>
  );
}
