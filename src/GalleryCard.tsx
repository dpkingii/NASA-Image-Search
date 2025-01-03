import React from "react";
import "./index.css";

interface GalleryCardProps {
  title: string;
  description: string;
  dateCreated: string;
  imageUrl: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  description,
  dateCreated,
  imageUrl,
}) => {
  return (
    <div className="gallery-card container vh-90">
      <div className="info">
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
        <p className="date">{dateCreated}</p>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default GalleryCard;
