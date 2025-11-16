import React, { useState } from 'react';
import Categories from './Components/Categories';

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
    </main>
  );
}

export default App;
