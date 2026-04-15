import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Plus } from 'lucide-react';
import type { Category } from '../../data/menuData';
import './PastaView.css';

interface PastaViewProps {
  category: Category;
  onBack: () => void;
}

const PastaView: React.FC<PastaViewProps> = ({ category, onBack }) => {
  return (
    <motion.div
      className="pasta-grid-wrapper horizontal-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pasta-nav-header">
        <div className="foodeat-logo">FOOD<span>EAT</span></div>
        <div className="header-links">
          <span className="active">HOME</span>
          <span>MENU</span>
          <span>ABOUT</span>
        </div>
      </div>

      <button className="back-btn-floated" onClick={onBack}>
        <ArrowLeft size={20} />
      </button>

      <div className="pasta-horizontal-container">
        <div className="horizontal-header">
          <h2>Pasta Selection</h2>
          <p>Hand-crafted Italian perfection. Scroll to explore.</p>
        </div>

        <div className="p-horizontal-scroll">
          {category.variants.map((item, idx) => (
            <motion.div
              key={item.id}
              className="p-menu-card horizontal-card"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 + idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="card-img-top">
                <img src="/pasta_clean.png" alt={item.name} style={{ clipPath: 'circle(38%)' }} />
              </div>
              <div className="card-details">
                <div className="rating-row">
                  <Star size={14} fill="#f1c40f" color="#f1c40f" />
                  <span>{(8.5 + idx * 0.3).toFixed(1)}</span>
                </div>
                <h3>{item.name}</h3>
                <p className="card-desc">Authentic Italian flavors with fresh ingredients and secret spices.</p>
                <div className="card-price-row">
                  <span className="p-price">{item.price}</span>
                  <button className="p-plus-btn"><Plus size={16} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PastaView;
