
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';

// Mock data for our inventory items
const inventoryData = {
  electronics: [
    { id: 1, name: "Wireless Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", price: 129.99, stockCount: 23, category: "electronics" },
    { id: 2, name: "Smart Watch", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", price: 199.99, stockCount: 15, category: "electronics" },
    { id: 3, name: "Bluetooth Speaker", image: "https://images.unsplash.com/photo-1589003077984-894e133dabab", price: 79.99, stockCount: 42, category: "electronics" },
    { id: 4, name: "Laptop Pro 15\"", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", price: 1299.99, stockCount: 7, category: "electronics" },
    { id: 5, name: "Wireless Earbuds", image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb", price: 89.99, stockCount: 31, category: "electronics" },
    { id: 6, name: "Digital Camera", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32", price: 449.99, stockCount: 0, category: "electronics" },
  ],
  furniture: [
    { id: 7, name: "Ergonomic Chair", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c", price: 249.99, stockCount: 12, category: "furniture" },
    { id: 8, name: "Coffee Table", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88", price: 179.99, stockCount: 8, category: "furniture" },
    { id: 9, name: "Bookshelf", image: "https://images.unsplash.com/photo-1593562970123-5135c9c2d2fb", price: 229.99, stockCount: 4, category: "furniture" },
    { id: 10, name: "King Size Bed", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", price: 899.99, stockCount: 3, category: "furniture" },
    { id: 11, name: "Standing Desk", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd", price: 349.99, stockCount: 17, category: "furniture" },
    { id: 12, name: "Dining Set", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc", price: 799.99, stockCount: 2, category: "furniture" },
  ],
  clothing: [
    { id: 13, name: "Men's T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", price: 29.99, stockCount: 45, category: "clothing" },
    { id: 14, name: "Women's Jeans", image: "https://images.unsplash.com/photo-1475178626620-a4d074967452", price: 59.99, stockCount: 38, category: "clothing" },
    { id: 15, name: "Sweater", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99", price: 49.99, stockCount: 27, category: "clothing" },
    { id: 16, name: "Winter Coat", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3", price: 129.99, stockCount: 13, category: "clothing" },
    { id: 17, name: "Running Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", price: 89.99, stockCount: 22, category: "clothing" },
    { id: 18, name: "Summer Dress", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03", price: 69.99, stockCount: 0, category: "clothing" },
  ],
  accessories: [
    { id: 19, name: "Leather Belt", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62", price: 39.99, stockCount: 18, category: "accessories" },
    { id: 20, name: "Sunglasses", image: "https://images.unsplash.com/photo-1577803645773-f96470509666", price: 79.99, stockCount: 24, category: "accessories" },
    { id: 21, name: "Weekender Bag", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a45", price: 119.99, stockCount: 9, category: "accessories" },
    { id: 22, name: "Watch", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3", price: 199.99, stockCount: 11, category: "accessories" },
    { id: 23, name: "Scarf", image: "https://images.unsplash.com/photo-1520903383915-70fce5c989c7", price: 24.99, stockCount: 29, category: "accessories" },
    { id: 24, name: "Backpack", image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7", price: 59.99, stockCount: 3, category: "accessories" },
  ]
};

const Index = () => {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-instocks-light font-inter">
      <Header />
      <Hero />
      
      <section id="about" className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-instocks-dark mb-6">About InStocks</h2>
            <p className="text-instocks-gray">
              InStocks is a modern inventory management system designed to help you showcase 
              and track your store's available products. With intuitive design and smooth interactions, 
              managing your inventory has never been easier.
            </p>
          </div>
        </div>
      </section>

      <CategorySection 
        id="electronics"
        title="Electronics"
        description="Explore our range of high-quality electronics, from headphones to laptops."
        products={inventoryData.electronics}
      />
      
      <CategorySection 
        id="furniture"
        title="Furniture"
        description="Quality furniture pieces to enhance any space in your home or office."
        products={inventoryData.furniture}
        reversed={true}
      />
      
      <CategorySection 
        id="clothing"
        title="Clothing"
        description="Stylish clothing options for all seasons and occasions."
        products={inventoryData.clothing}
      />
      
      <CategorySection 
        id="accessories"
        title="Accessories"
        description="Complete your look with our range of carefully selected accessories."
        products={inventoryData.accessories}
        reversed={true}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
