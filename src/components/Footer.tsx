
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4">
              <span className="text-instocks-teal">Food</span>
              <span className="text-instocks-dark">Stocks</span>
            </h2>
            <p className="text-sm text-instocks-gray">
              Modern grocery inventory management and product showcase solution.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-instocks-dark">Food Categories</h3>
            <ul className="space-y-2">
              {['Fruits', 'Vegetables', 'Dairy', 'Bakery'].map((category) => (
                <li key={category}>
                  <a 
                    href={`#${category.toLowerCase()}`}
                    className="text-sm text-instocks-gray hover:text-instocks-teal transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-instocks-gray">
          <p>© {currentYear} FoodStocks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
