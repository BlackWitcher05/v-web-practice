import ProductCard from "./ProductCard";

export default function ProductList({products}){
    if(products.length === 0){
        return (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">🔍 Товары не найдены</p>
              <p className="text-gray-500 mt-2">Попробуйте изменить поисковый запрос</p>
            </div>
        );
    }

    return(
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product =>(
                <ProductCard 
                    key={product.id}
                    product={product}
                />
            ))}
        </section>
    );
}