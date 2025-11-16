import React, { useEffect, useRef, useState } from "react";
import menus from "../data"

const Categories = () => {

  const mainCategories = ["All", ...new Set(menus.map(menu => menu.category))];
  const [selectCategory, setSelectCategory] = useState("All")

  return (
    <div className="btn-container">
      {mainCategories.map(mainCategory => 
        <button key={mainCategory}
        type="button"
        className={`filter-btn ${selectCategory === mainCategory ? "highlight" : ""}`}
        onClick={() => setSelectCategory(mainCategory)}
      >
        {mainCategory}
      </button>
      )}
      
    </div>
  );
};

export default Categories;
