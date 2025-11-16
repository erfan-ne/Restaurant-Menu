import React from "react";
import menus from "../data"

const Categories = ({ selectedCategory, setSelectedCategory }) => {

  const mainCategories = ["All", ...new Set(menus.map(menu => menu.category))];

  return (
    <div className="btn-container">
      {mainCategories.map(mainCategory => 
        <button key={mainCategory}
        type="button"
        className={`filter-btn ${selectedCategory === mainCategory ? "highlight" : ""}`}
        onClick={() => setSelectedCategory(mainCategory)}
      >
        {mainCategory}
      </button>
      )}
      
    </div>
  );
};

export default Categories;
