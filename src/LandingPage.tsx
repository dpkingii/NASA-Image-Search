import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function LandingPage() {
  const [searchText, setSearchText] = useState("");
  const [startYear, setStartYear] = useState(1920);
  const [endYear, setEndYear] = useState(2024);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (startYear > endYear) {
      setError("Start year cannot be greater than end year.");
      return;
    }

    if (!searchText.trim()) {
      setError("Please enter a valid search term.");
      return;
    }

    setError("");
    navigate("/display", { state: { searchText, startYear, endYear } });
  };

  return (
    <div className="container text-center vh-100 d-flex flex-column justify-content-center">
      <h1 className="border-2 mb-4 bg-white h1">NASA Image Search</h1>
      <div className="border-3 mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a search phrase"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="mb-4 year-range">
        <label className="text-white ">Select Year Range: </label>
        <select
          value={startYear}
          onChange={(e) => setStartYear(Number(e.target.value))}
        >
          {Array.from({ length: 105 }, (_, i) => (
            <option key={1920 + i} value={1920 + i}>
              {1920 + i}
            </option>
          ))}
        </select>
        <span>to</span>
        <select
          value={endYear}
          onChange={(e) => setEndYear(Number(e.target.value))}
        >
          {Array.from({ length: 105 }, (_, i) => (
            <option key={1920 + i} value={1920 + i}>
              {1920 + i}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}

      <button className="searchBtn btn btn-primary h2" onClick={handleSearch}>
        Search!
      </button>
    </div>
  );
}

export default LandingPage;
