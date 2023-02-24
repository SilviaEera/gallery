import React, { useEffect, useState } from "react";
import "./Gallery.css";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";
import { Image } from "lightbox.js-react";
import loader from "../../assets/loader.gif";

const ImageGallery = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  let data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1532157345990-d3ab4df99902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=552&q=80",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1586699253884-e199770f63b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1532157345990-d3ab4df99902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=552&q=80",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1586699253884-e199770f63b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1532157345990-d3ab4df99902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=552&q=80",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1586699253884-e199770f63b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1532157345990-d3ab4df99902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=552&q=80",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1586699253884-e199770f63b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1532157345990-d3ab4df99902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=552&q=80",
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1586699253884-e199770f63b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1532157345990-d3ab4df99902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=552&q=80",
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1586699253884-e199770f63b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <>
      {loading ? (
        <div className="loader">
          <img src={loader} alt="" />
        </div>
      ) : (
        <div className="galleryContainer container">
          <div className="gallery">
            {data.map((item, index) => {
              return (
                <>
                  <Image image={{ src: `${item.img}` }} />
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
