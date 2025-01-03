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
    <div className="gallery-card container vh-100">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Date Created:</strong> {dateCreated}
      </p>
    </div>
  );
};

export default GalleryCard;
