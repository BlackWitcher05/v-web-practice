import { useMemo, useState } from "react";

import Header from "./Header";
import ProductList from "./ProductList";
import { products } from "../entities/Products";

export default function ProductCatalog(){
     const [searchTerm, setSearchTerm] = useState('');

    // Логика фильтрации (используем useMemo для оптимизации)
    const filteredProducts = useMemo(() => {
        if (!searchTerm) {
          return products;
        }
        const lowerCaseSearch = searchTerm.toLowerCase();
        return products.filter(product =>
      product.name.toLowerCase().includes(lowerCaseSearch)
    );
    }, [searchTerm]);

    return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm} 
      />
      <main className="flex-grow py-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          🛍️ Каталог товаров
        </h1>

        <ProductList 
          products={filteredProducts}
        />

      </main>
    </div>
  )
}