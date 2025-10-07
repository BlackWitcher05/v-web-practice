function groupByCategory(data){
    let grouped = {};

    data.products.forEach(product => {
        let category = product.category;
        
        if(!grouped[category]){
            grouped[category] = [];
        }

        grouped[category].push({
            productName: product.name,
            price: product.price
        });

    });

    return grouped;
}

result = {
  "products": [
    { "id": 1, "name": "Laptop", "category": "Electronics", "price": 1000 },
    { "id": 2, "name": "Book", "category": "Education", "price": 20 },
    { "id": 3, "name": "Phone", "category": "Electronics", "price": 500 },
    { "id": 4, "name": "Pen", "category": "Office", "price": 2 }
  ]
};


console.log(groupByCategory(result));