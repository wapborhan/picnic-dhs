import { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import "./frame.css";

function Frame() {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const frameRef = useRef(null);

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);
      setImage(file);
    }
  };

  const getCroppedImage = async () => {
    const imageObj = await createImage(image);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 350;
    canvas.height = 350;

    // Draw cropped image
    const scaleX = imageObj.naturalWidth / imageObj.width;
    const scaleY = imageObj.naturalHeight / imageObj.height;

    ctx.drawImage(
      imageObj,
      croppedAreaPixels.x * scaleX,
      croppedAreaPixels.y * scaleY,
      croppedAreaPixels.width * scaleX,
      croppedAreaPixels.height * scaleY,
      0,
      0,
      300,
      300
    );

    // Draw frame
    const frameImage = frameRef.current;
    ctx.drawImage(frameImage, 0, 0, 350, 350);

    // Download
    const link = document.createElement("a");
    link.download = "framed-photo.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });

  return (
    <div className="App">
      <h2>Photo Frame App 📸</h2>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      {image && (
        <>
          <div className="crop-container">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <img
              src="assets/img/frame.png"
              alt="Frame"
              className="frame-overlay"
              ref={frameRef}
            />
          </div>

          <div className="controls">
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(e.target.value)}
            />
            <button onClick={getCroppedImage}>Download</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Frame;
