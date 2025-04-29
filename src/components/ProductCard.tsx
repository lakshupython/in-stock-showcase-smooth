
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  stockCount: number;
  category: string;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  image, 
  price, 
  stockCount, 
  category,
  index = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getStockStatus = () => {
    if (stockCount === 0) return { text: "Out of Stock", color: "bg-red-500" };
    if (stockCount < 5) return { text: "Low Stock", color: "bg-amber-500" };
    return { text: "In Stock", color: "bg-green-500" };
  };
  
  const stockStatus = getStockStatus();
  
  // Fix for images - ensure they have the right path format
  const getImageUrl = (url: string) => {
    if (!url) return "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&h=300&fit=crop";
    if (url.includes("?")) return url;
    return `${url}?q=80&w=400&h=300&fit=crop`;
  };
  
  return (
    <div 
      className={cn(
        "stagger-item group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300",
        isHovered && "shadow-lg"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={getImageUrl(image)} 
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isHovered && "brightness-105"
          )}
        />
        
        <div className="absolute top-3 right-3">
          <Badge className={cn('text-xs font-medium text-white', stockStatus.color)}>
            {stockStatus.text}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg text-instocks-dark">{name}</h3>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-instocks-teal font-semibold">${price.toFixed(2)}</span>
          <span className="text-sm text-instocks-gray">{stockCount} units</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
