
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  stockCount: number;
  category: string;
}

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
  reversed?: boolean;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  id, 
  title, 
  description, 
  products,
  reversed = false 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          
          if (productsRef.current) {
            const products = productsRef.current.querySelectorAll('.stagger-item');
            products.forEach((product, index) => {
              setTimeout(() => {
                product.classList.add('stagger-visible');
              }, 300 + index * 100);
            });
          }
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn(
        "py-20 px-4 md:px-8 section-reveal",
        reversed ? "bg-gray-50" : "bg-white"
      )}
    >
      <div className="container mx-auto">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-10", 
          reversed && "md:flex-row-reverse"
        )}>
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-instocks-dark mb-4">
              {title}
            </h2>
            <p className="text-instocks-gray mb-6">
              {description}
            </p>
            <div className="h-1 w-20 bg-instocks-teal rounded"></div>
          </div>
          
          <div ref={productsRef} className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                {...product}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
