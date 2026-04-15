import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, animate, useTransform, MotionValue } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Category } from '../../data/menuData';
import './PizzaView.css';

interface PizzaViewProps {
  category: Category;
  onBack: () => void;
}

const FlavorLabel = ({ 
  v, 
  idx, 
  activeIdx, 
  angleStep, 
  rotation, 
  rotateTo 
}: { 
  v: any, 
  idx: number, 
  activeIdx: number, 
  angleStep: number, 
  rotation: MotionValue<number>, 
  rotateTo: (i: number) => void 
}) => {
  const angle = idx * angleStep;
  const labelRotate = useSpring(useTransform(rotation, (v) => v + angle));

  return (
    <motion.div
      className={`flavor-label ${idx === activeIdx ? 'active' : ''}`}
      style={{ rotate: labelRotate }}
      onClick={() => rotateTo(idx)}
    >
      {v.name}
    </motion.div>
  );
};

const PizzaView: React.FC<PizzaViewProps> = ({ category, onBack }) => {
  const rotation = useMotionValue(0);
  const [activeIdx, setActiveIdx] = useState(0);

  const count = category.variants.length;
  const angleStep = 60;

  const [ingredients] = useState(() => [...Array(8)].map((_, i) => ({
    id: i,
    image: i % 2 === 0 ? '/sticker_lettuce.png' : '/sticker_tomato.png',
    x: Math.random() * 100 + '%',
    y: Math.random() * 100 + '%',
    size: 40 + Math.random() * 40,
  })));

  useEffect(() => {
    const unsub = rotation.on("change", (v) => {
      const idx = Math.round(v / -angleStep);
      const clampedIdx = Math.max(0, Math.min(count - 1, idx));
      if (clampedIdx !== activeIdx) setActiveIdx(clampedIdx);
    });
    return () => unsub();
  }, [rotation, angleStep, count, activeIdx]);

  const rotateTo = (idx: number) => {
    animate(rotation, idx * -angleStep, { type: "spring", stiffness: 100, damping: 20 });
  };

  const currentItem = category.variants[activeIdx];

  return (
    <motion.div
      className="pizza-premium-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="back-btn-minimal" onClick={onBack}>
        <ArrowLeft size={24} color="white" />
      </button>

      {/* Floating Ingredients */}
      {ingredients.map((ing) => (
        <motion.img
          key={ing.id}
          src={ing.image}
          className="parallax-ingredient"
          animate={{ y: [0, -20, 0], rotate: [0, 360] }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          style={{ left: ing.x, top: ing.y, width: ing.size, opacity: 0.1, filter: 'blur(1px)' }}
        />
      ))}

      <div className="pizza-selection-area">
        <div className="nav-buttons-pizza">
          <button onClick={() => rotateTo(Math.max(0, activeIdx - 1))} className="nav-btn-pizza">
            <ChevronLeft size={32} />
          </button>
          <button onClick={() => rotateTo(Math.min(count - 1, activeIdx + 1))} className="nav-btn-pizza">
            <ChevronRight size={32} />
          </button>
        </div>

        <motion.div 
          className="flavor-arc-container"
          drag="x"
          onDrag={(_, info) => {
            rotation.set(rotation.get() + info.delta.x * 0.5);
          }}
          onDragEnd={(_, info) => {
            const current = rotation.get();
            const snapped = Math.round(current / angleStep) * angleStep;
            const clamped = Math.max((count - 1) * -angleStep, Math.min(0, snapped));
            animate(rotation, clamped, { type: "spring", stiffness: 100, damping: 20 });
          }}
        >
          {category.variants.map((v, idx) => (
            <FlavorLabel 
              key={v.id} 
              v={v} 
              idx={idx} 
              activeIdx={activeIdx} 
              angleStep={angleStep} 
              rotation={rotation} 
              rotateTo={rotateTo} 
            />
          ))}
        </motion.div>

        <div className="main-pizza-stage">
          {/* Circular Rotating Text Overlay */}
          <motion.div 
            className="circular-text-svg-wrap"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 500 500" className="pizza-svg-text">
              <path
                id="curve"
                d="M 250, 250 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                fill="transparent"
              />
              <text fontSize="22" fontWeight="900" letterSpacing="8" fill="rgba(255,255,255,0.4)">
                <textPath xlinkHref="#curve">
                  PREMIUM ARTISAN PIZZA • HAND-CRAFTED • WOOD FIRED • FRESH INGREDIENTS •
                </textPath>
              </text>
            </svg>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 1.5, opacity: 0, rotate: 45 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="pizza-plate-container"
            >
              <div className="radial-glow"></div>
              <img 
                src="/pizza_clean.png" 
                alt={currentItem.name} 
                className="premium-pizza-img-clean"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pizza-premium-info">
          <motion.div
            key={`info-${activeIdx}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="info-box"
          >
            <h3>{currentItem.name}</h3>
            <p>{currentItem.description}</p>
            <div className="premium-price-badge">{currentItem.price}</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PizzaView;
