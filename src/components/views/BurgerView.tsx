import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { Category } from '../../data/menuData';
import './BurgerView.css';

interface BurgerViewProps {
  category: Category;
  onBack: () => void;
}

const ZigZagItem = ({ item, index }: { item: any, index: number }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div 
      className={`zigzag-row ${isLeft ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="zigzag-img-side">
        <motion.div 
          className="img-circle-wrap"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
        >
          <img src="/burger_smoky.png" alt={item.name} style={{ clipPath: 'circle(38%)' }} />
        </motion.div>
      </div>

      <div className="zigzag-spacer">
        <div className="spine-connector"></div>
      </div>

      <div className="zigzag-text-side">
        <div className="text-content">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div className="zigzag-price">{item.price}</div>
        </div>
      </div>
    </motion.div>
  );
};

const BurgerView: React.FC<BurgerViewProps> = ({ category, onBack }) => {
  return (
    <motion.div
      className="burger-zigzag-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="back-btn-minimal" onClick={onBack}>
        <ArrowLeft size={24} color="#f5f5dc" />
      </button>

      <header className="zigzag-header">
        <motion.div 
          className="menu-title-overlay"
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
        >
          FOOD
        </motion.div>
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          OUR MENU
        </motion.h1>
      </header>

      <div className="zigzag-timeline">
        <div className="central-spine-bar"></div>
        {category.variants.map((item, idx) => (
          <ZigZagItem key={item.id} item={item} index={idx} />
        ))}
      </div>

      <footer className="zigzag-footer">
        <div className="footer-line"></div>
        <p>FRESH INGREDIENTS • HONEST FLAVORS</p>
      </footer>
    </motion.div>
  );
};

export default BurgerView;
