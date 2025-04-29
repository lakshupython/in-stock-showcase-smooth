
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';

// Mock data for our food inventory items
const inventoryData = {
  fruits: [
    { id: 1, name: "Organic Apples", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6", price: 3.99, stockCount: 45, category: "fruits" },
    { id: 2, name: "Bananas", image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e", price: 1.99, stockCount: 68, category: "fruits" },
    { id: 3, name: "Fresh Strawberries", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2", price: 4.99, stockCount: 32, category: "fruits" },
    { id: 4, name: "Oranges", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12", price: 2.99, stockCount: 29, category: "fruits" },
    { id: 5, name: "Blueberries", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e", price: 5.99, stockCount: 17, category: "fruits" },
    { id: 6, name: "Avocados", image: "https://images.unsplash.com/photo-1601039641847-7857b994d704", price: 2.49, stockCount: 0, category: "fruits" },
  ],
  vegetables: [
    { id: 7, name: "Fresh Spinach", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb", price: 2.49, stockCount: 23, category: "vegetables" },
    { id: 8, name: "Tomatoes", image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469", price: 1.99, stockCount: 42, category: "vegetables" },
    { id: 9, name: "Carrots", image: "https://images.unsplash.com/photo-1447175008436-054170c2e979", price: 1.49, stockCount: 38, category: "vegetables" },
    { id: 10, name: "Bell Peppers", image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83", price: 2.99, stockCount: 15, category: "vegetables" },
    { id: 11, name: "Broccoli", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc", price: 2.79, stockCount: 19, category: "vegetables" },
    { id: 12, name: "Onions", image: "https://images.unsplash.com/photo-1618512496248-a3c25032447b", price: 1.29, stockCount: 0, category: "vegetables" },
  ],
  dairy: [
    { id: 13, name: "Whole Milk", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b", price: 3.49, stockCount: 27, category: "dairy" },
    { id: 14, name: "Greek Yogurt", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777", price: 4.99, stockCount: 21, category: "dairy" },
    { id: 15, name: "Cheddar Cheese", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d", price: 6.99, stockCount: 14, category: "dairy" },
    { id: 16, name: "Butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d", price: 4.49, stockCount: 32, category: "dairy" },
    { id: 17, name: "Eggs", image: "https://images.unsplash.com/photo-1598965402089-897c69f5bf60", price: 3.99, stockCount: 48, category: "dairy" },
    { id: 18, name: "Sour Cream", image: "https://images.unsplash.com/photo-1638156775314-8ebe3fdaf85a", price: 2.99, stockCount: 0, category: "dairy" },
  ],
  bakery: [
    { id: 19, name: "Sourdough Bread", image: "https://images.unsplash.com/photo-1585478259789-837b96f455a7", price: 4.99, stockCount: 12, category: "bakery" },
    { id: 20, name: "Croissants", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a", price: 3.49, stockCount: 23, category: "bakery" },
    { id: 21, name: "Blueberry Muffins", image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023", price: 2.99, stockCount: 18, category: "bakery" },
    { id: 22, name: "Bagels", image: "https://images.unsplash.com/photo-1627308595260-3197f33bf252", price: 3.99, stockCount: 34, category: "bakery" },
    { id: 23, name: "Cinnamon Rolls", image: "https://images.unsplash.com/photo-1586724332853-f3bbb942d519", price: 4.49, stockCount: 9, category: "bakery" },
    { id: 24, name: "Whole Grain Bread", image: "https://images.unsplash.com/photo-1586444248890-2e3be0b2c7b1", price: 3.99, stockCount: 0, category: "bakery" },
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
            <h2 className="text-3xl font-bold text-instocks-dark mb-6">About FoodStocks</h2>
            <p className="text-instocks-gray">
              FoodStocks is a modern inventory management system designed for grocery stores and food markets. 
              Keep track of fresh produce, dairy products, bakery items, and more with our intuitive 
              interface. Ensure your customers always have access to the freshest ingredients.
            </p>
          </div>
        </div>
      </section>

      <CategorySection 
        id="fruits"
        title="Fresh Fruits"
        description="Explore our selection of fresh, seasonal fruits sourced from local farms."
        products={inventoryData.fruits}
      />
      
      <CategorySection 
        id="vegetables"
        title="Fresh Vegetables"
        description="Quality, farm-fresh vegetables to complete your healthy meals."
        products={inventoryData.vegetables}
        reversed={true}
      />
      
      <CategorySection 
        id="dairy"
        title="Dairy & Eggs"
        description="Fresh dairy products and free-range eggs from trusted suppliers."
        products={inventoryData.dairy}
      />
      
      <CategorySection 
        id="bakery"
        title="Bakery Items"
        description="Freshly baked breads and treats made daily in our bakery."
        products={inventoryData.bakery}
        reversed={true}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
