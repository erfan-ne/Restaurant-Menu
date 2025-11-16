import React, { useEffect, useState } from "react";
import menus from "../data"

const Categories = () => {

  const mainCategories = [...new Set(menus.map(menu => menu.category))];
  const [selectCategory, setSelectCategory] = useState("")

  useEffect( () => {console.log(selectCategory)} , [selectCategory])


  return (
    <div className="btn-container">
      <button
        type="button"
        className="filter-btn"
        onClick={() => setSelectCategory("All")}
      >
        All
      </button>
      {mainCategories.map(mainCategory => 
        <button key={mainCategory}
        type="button"
        className={selectCategory === mainCategory ? "filter-btn highlight" : "filter-btn"}
        onClick={() => setSelectCategory(mainCategory)}
      >
        {mainCategory}
      </button>
      )}
      
    </div>
  );
};

export default Categories;
