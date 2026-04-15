import React from 'react';
import { motion } from 'framer-motion';
import type { Category } from '../../data/menuData';
import './HomeView.css';

interface HomeViewProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ categories, onSelectCategory }) => {
  // Map categories for easier layout assignment
  const burger = categories.find(c => c.type === 'burger');
  const pizza = categories.find(c => c.type === 'pizza');
  const coffee = categories.find(c => c.type === 'coffee');
  const pasta = categories.find(c => c.type === 'pasta');

  return (
    <motion.div
      className="home-bento-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Floating Background Decorations */}
      <div className="decorations-layer">
        <motion.img src="/sticker_lettuce.png" className="float-s s1" animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.img src="/sticker_tomato.png" className="float-s s2" animate={{ y: [0, -30, 0], rotate: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.img src="/sticker_bean.png" className="float-s s3" animate={{ x: [0, 40, 0] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.img src="/sticker_fry.png" className="float-s s4" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
      </div>

      <header className="home-header-minimal">
        <div className="logo-bento">Food<span>Zen</span></div>
        <nav>
          <span>MENU</span>
          <span>SPECIALS</span>
          <span>STORY</span>
        </nav>
      </header>

      <div className="bento-grid-container">
        {/* BURGER - MAIN BIG BLOCK (Dark Green Theme) */}
        {burger && (
          <motion.div 
            className="bento-card burger-block"
            onClick={() => onSelectCategory(burger)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="torn-bg" style={{ backgroundColor: '#1a3c34' }}></div>
            <div className="card-content">
              <span>Fresh & Juicy</span>
              <h2>THE CLASSIC <br/> BURGER</h2>
              <p>Hand-crafted with 100% premium beef, <br/> melted cheese and fresh greens.</p>
              <button className="bento-btn">Explore Menu</button>
            </div>
            <img src="/burger_smoky.png" alt="Burger" className="bento-img burger-img" style={{ clipPath: 'circle(38%)' }} />
          </motion.div>
        )}

        {/* PIZZA - MEDIUM BLOCK (Deep Blue Theme) */}
        {pizza && (
          <motion.div 
            className="bento-card pizza-block"
            onClick={() => onSelectCategory(pizza)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="torn-bg" style={{ backgroundColor: '#0f2a4a' }}></div>
            <div className="card-content">
              <span>Wood Fired</span>
              <h2>ARTISAN <br/> PIZZA</h2>
              <p>Traditional sourdough with <br/> fresh buffalo mozzarella.</p>
            </div>
            <img src="/pizza_clean.png" alt="Pizza" className="bento-img pizza-img" style={{ clipPath: 'circle(38%)' }} />
          </motion.div>
        )}

        {/* COFFEE - SMALL BLOCK (Sage/Light Theme) */}
        {coffee && (
          <motion.div 
            className="bento-card coffee-block"
            onClick={() => onSelectCategory(coffee)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="torn-bg" style={{ backgroundColor: '#d8e2dc' }}></div>
            <div className="card-content">
              <h2>COFFEE <br/> BREWS</h2>
              <p>Roasted to perfection.</p>
            </div>
            <img src="/coffee_clean.png" alt="Coffee" className="bento-img coffee-img" style={{ clipPath: 'circle(38%)' }} />
          </motion.div>
        )}

        {/* PASTA - SMALL BLOCK (Cream Theme) */}
        {pasta && (
          <motion.div 
            className="bento-card pasta-block"
            onClick={() => onSelectCategory(pasta)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="torn-bg" style={{ backgroundColor: '#fdf0d5' }}></div>
            <div className="card-content">
              <h2>ITALIAN <br/> PASTA</h2>
              <p>Authentic handmade recipes.</p>
            </div>
            <img src="/pasta_clean.png" alt="Pasta" className="bento-img pasta-img" style={{ clipPath: 'circle(38%)' }} />
          </motion.div>
        )}

        {/* DECORATIVE EXTRA BLOCK (Vibrant Accent) */}
        <motion.div className="bento-card deco-block">
          <div className="torn-bg" style={{ backgroundColor: '#c1121f' }}></div>
          <div className="card-content">
            <h2>SPECIALS <br/> 40% OFF</h2>
            <span>EVERY TUESDAY</span>
          </div>
        </motion.div>
      </div>

      <footer className="home-footer-bento">
        <div className="social-links-bento">
          <span>INSTAGRAM</span>
          <span>TIKTOK</span>
          <span>WHATSAPP</span>
        </div>
      </footer>
    </motion.div>
  );
};

export default HomeView;
