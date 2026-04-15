import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { categoriesData, type Category } from './data/menuData';
import HomeView from './components/views/HomeView';
import BurgerView from './components/views/BurgerView';
import PizzaView from './components/views/PizzaView';
import PastaView from './components/views/PastaView';
import CoffeeView from './components/views/CoffeeView';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const handleBack = () => setActiveCategory(null);

  const renderView = () => {
    if (!activeCategory) {
      return <HomeView categories={categoriesData} onSelectCategory={setActiveCategory} />;
    }

    switch (activeCategory.type) {
      case 'burger':
        return <BurgerView category={activeCategory} onBack={handleBack} />;
      case 'pizza':
        return <PizzaView category={activeCategory} onBack={handleBack} />;
      case 'pasta':
        return <PastaView category={activeCategory} onBack={handleBack} />;
      case 'coffee':
        return <CoffeeView category={activeCategory} onBack={handleBack} />;
      default:
        return (
          <div style={{ color: 'white', padding: '2rem' }}>
            <button onClick={handleBack}>Back</button>
            <h2>{activeCategory.title}</h2>
          </div>
        );
    }
  };

  return (
    <div className="app-container" style={{ background: activeCategory?.type === 'coffee' ? '#2b1b11' : 'var(--color-bg)' }}>
      <AnimatePresence mode="wait">
        <React.Fragment key={activeCategory ? activeCategory.id : 'home'}>
          {renderView()}
        </React.Fragment>
      </AnimatePresence>
    </div>
  );
}

export default App;
