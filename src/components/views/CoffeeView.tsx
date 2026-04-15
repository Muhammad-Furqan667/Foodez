import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { Category } from '../../data/menuData';
import './CoffeeView.css';

interface CoffeeViewProps {
  category: Category;
  onBack: () => void;
}

const CoffeeView: React.FC<CoffeeViewProps> = ({ category, onBack }) => {
  return (
    <motion.div
      className="coffee-view-wrapper handcrafted-coffee"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="back-btn-minimal" onClick={onBack}>
        <ArrowLeft size={24} color="#3d2b1f" />
      </button>

      <div className="handcrafted-container">
        <motion.h1 
          className="coffee-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Freshly <br /> Brewed
        </motion.h1>

        <div className="coffee-staggered-list">
          {category.variants.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`hand-coffee-item item-${idx % 3}`}
              initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + idx * 0.15 }}
            >
              <div className="coffee-img-wrap">
                <img src="/coffee_clean.png" alt={item.name} style={{ clipPath: 'circle(45%)' }} />
                <div className="hand-price-tag">PKR {item.price.replace('PKR ', '')}</div>
              </div>
              <div className="coffee-label-side">
                <div className="dot"></div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="coffee-footer-brand">
          <div className="brand-logo">Food<span>Zen</span></div>
          <p>EST 2024 • PREMIUM BEANS</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CoffeeView;
