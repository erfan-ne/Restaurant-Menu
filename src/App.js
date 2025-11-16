import React, { useState } from 'react';
import Categories from './Components/Categories';
import Menu from './Components/Menu';

function App() {

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories/>
      <Menu />
    </main>
  );
}

export default App;
