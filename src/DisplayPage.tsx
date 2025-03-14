import { useEffect, useState } from "react";
import axios from "axios";
import GalleryCard from "./GalleryCard";
import { useLocation, useNavigate } from "react-router-dom";

interface ImageData {
  title: string;
  description: string;
  date_created: string;
  href: string;
}

const DisplayPage = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = location.state; // Pass search text and year range from LandingPage

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://images-api.nasa.gov/search", {
          params: {
            q: queryParams.searchText,
            year_start: queryParams.startYear,
            year_end: queryParams.endYear,
            media_type: "image",
          },
        });

        const items = response.data.collection.items;
        if (items.length === 0) {
          setError("No results found. Try a different search.");
        } else {
          const formattedImages = items.map((item: any) => ({
            title: item.data[0].title || "No Title",
            description: item.data[0].description || "No Description Available",
            date_created: item.data[0].date_created || "No Date",
            href: item.links[0].href,
          }));
          setImages(formattedImages);
        }
      } catch (err) {
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchImages();
  }, [queryParams]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="display-page">
      <button
        className="back-btn btn btn-primary"
        onClick={() => navigate("/")}
      >
        Back
      </button>

      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          {images.length > 0 && (
            <GalleryCard
              title={images[currentIndex].title}
              description={images[currentIndex].description}
              dateCreated={formatDate(images[currentIndex].date_created)}
              imageUrl={images[currentIndex].href}
            />
          )}
          <div className="arrow-button">
            <button className="arrow-left" onClick={handlePrevious}></button>
            <button className="arrow-right" onClick={handleNext}></button>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayPage;
