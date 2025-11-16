import React, { useState } from "react";
import menus from "../data"

const Categories = () => {

  const mainCategories = [...new Set(menus.map(menu => menu.category))];
  const [selectCategory, setSelectCategory] = useState("")


  return (
    <div className="btn-container">
      <button
        type="button"
        // highlight class  for highlight main category
        className="filter-btn"
      >
        All
      </button>
      {mainCategories.map(mainCategory => 
        <button
        type="button"
        className="filter-btn"
      >
        {mainCategory}
      </button>
      )}
      
    </div>
  );
};

export default Categories;
