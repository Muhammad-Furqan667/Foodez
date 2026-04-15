import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import './MenuCard.css';

interface MenuCardProps {
  item: {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
  };
  index: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="menu-card-wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="menu-card"
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-bg"></div>
        <div className="image-container" style={{ transform: "translateZ(60px)" }}>
          <img src={item.image} alt={item.name} className="food-image" />
        </div>
        <div className="card-content" style={{ transform: "translateZ(30px)" }}>
          <div className="card-header">
            <h3 className="food-name">{item.name}</h3>
            <p className="food-price">{item.price}</p>
          </div>
          <p className="food-desc">{item.description}</p>
          <button className="add-btn">
            <PlusCircle size={20} />
            <span>Add to Cart</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MenuCard;
