import React, { useState } from 'react';
import Categories from './Components/Categories';
import Menu from './Components/Menu';
import menus from './data';

function App() {

  const [selectedCategory, setSelectedCategory]= useState("All")

  const filteredMenus =
  selectedCategory === "All"
    ? menus
    : menus.filter(item => item.category === selectedCategory);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Menu menus={filteredMenus} />
    </main>
  );
}

export default App;