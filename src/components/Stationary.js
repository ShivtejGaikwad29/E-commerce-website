import React, { useState } from "react";
import SearchBar from "./SearchBar"; // Import the SearchBar component

const Stationary = () => {
  const categories = [
    {
      name: "PENCIL",
      image: "https://m.media-amazon.com/images/I/618qhwScG-L.jpg",
      description: "Ideal for sketching and writing.",
      varieties: [
        {
          name: "HB Pencil",
          image: "https://www.dickblick.com/items/20508-2001-3ww-l.jpg",
          description: "Standard HB pencil for everyday use.",
        },
        {
          name: "2B Pencil",
          image: "https://www.dickblick.com/items/20508-2022-3ww-l.jpg",
          description: "Soft 2B pencil, ideal for sketching.",
        },
        {
          name: "Mechanical Pencil",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/41/Mechanical_pencil.jpg",
          description: "Refillable mechanical pencil for precision.",
        },
      ],
    },
    {
      name: "PEN",
      image: "https://5.imimg.com/data5/AU/YL/MY-33953112/fountain-ink-pen.png",
      description: "Smooth writing experience.",
      varieties: [
        {
          name: "Ball Pen",
          image:
            "https://m.media-amazon.com/images/I/41zPrM-Gz2L._AC_UF1000,1000_QL80_.jpg",
          description: "Smooth and long-lasting ballpoint pen.",
        },
        {
          name: "Gel Pen",
          image:
            "https://m.media-amazon.com/images/I/61cbAZzBflL._AC_SL1500_.jpg",
          description: "Water-based gel ink for effortless writing.",
        },
        {
          name: "Fountain Pen",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/32/Fountain_Pen_Transparent.png",
          description: "Classic fountain pen for elegant handwriting.",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredCategories, setFilteredCategories] = useState(categories);

  // Function to filter categories
  const handleSearch = (query) => {
    if (!query) {
      setFilteredCategories(categories);
    } else {
      const filtered = categories
        .map((category) => ({
          ...category,
          varieties: category.varieties.filter((variety) =>
            variety.name.toLowerCase().includes(query)
          ),
        }))
        .filter((category) => category.varieties.length > 0);
      setFilteredCategories(filtered);
    }
  };

  return (
    <div className="container my-4">
      <SearchBar categories={categories} onSearch={handleSearch} />

      {!selectedCategory ? (
        <div className="row">
          {filteredCategories.map((category, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div
                className="card"
                style={{
                  width: "100%",
                  border: "1.5px solid black",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedCategory(category)}
              >
                <img
                  src={category.image}
                  className="card-img-top"
                  alt={category.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  <p className="card-text">{category.description}</p>
                  <button className="btn btn-primary">View Varieties</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <h3>{selectedCategory.name} Varieties</h3>
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setSelectedCategory(null)}
          >
            Back to Categories
          </button>
          <div className="row w-100">
            {selectedCategory.varieties.map((variety, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4">
                <div
                  className="card shadow"
                  style={{
                    width: "100%",
                    minHeight: "400px",
                    border: "1.5px solid black",
                  }}
                >
                  <img
                    src={variety.image}
                    className="card-img-top"
                    alt={variety.name}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between text-center">
                    <h5 className="card-title">{variety.name}</h5>
                    <p className="card-text">{variety.description}</p>
                    <button className="btn btn-primary">ADD TO CART</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Stationary;
