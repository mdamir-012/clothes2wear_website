import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Product = ({ limit, showFilters = true, showPagination = true, showTitle = true }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState('');
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [filterBy, setFilterBy] = useState(searchParams.get('category') || '');

  const fetchProducts = async () => { 
    try {
      setLoading(true);
      let response = await fetch('https://fakestoreapi.com/products');
      let data = await response.json();
      setProducts(data);
      setSortedProducts(data);
    } catch (error) { 
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // Update URL when filter changes
    if (filterBy) {
      setSearchParams({ category: filterBy });
    } else {
      setSearchParams({});
    }

    let filtered = [...products];
    
    if (filterBy) {
      filtered = filtered.filter(product => {
        if (filterBy === 'clothing') {
          return product.category.toLowerCase().includes('clothing');
        }
        return product.category.toLowerCase() === filterBy.toLowerCase();
      });
    }

    if (order) {
      filtered.sort((a, b) => {
        if (order === 'asc') {
          return a.price - b.price;
        } else if (order === 'desc') {
          return b.price - a.price;
        }
        return 0;
      });
    }

    setSortedProducts(filtered);
    setCurrentPage(1);
  }, [order, products, filterBy, setSearchParams]);

  //  current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const displayProducts = limit 
    ? sortedProducts.slice(0, limit)
    : sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {showTitle && (
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      )}
      
      {showFilters && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="category" 
                  value="electronics"
                  checked={filterBy === "electronics"}
                  onChange={() => setFilterBy("electronics")}
                  className="w-4 h-4 text-blue-600"
                />
                <span>Electronics</span>
              </label>
              
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="category" 
                  value="clothing"
                  checked={filterBy === "clothing"}
                  onChange={() => setFilterBy("clothing")}
                  className="w-4 h-4 text-blue-600"
                />
                <span>Clothing</span>
              </label>
              
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="category" 
                  value="jewelery"
                  checked={filterBy === "jewelery"}
                  onChange={() => setFilterBy("jewelery")}
                  className="w-4 h-4 text-blue-600"
                />
                <span>Jewelery</span>
              </label>
              
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="category" 
                  value=""
                  checked={filterBy === ""}
                  onChange={() => setFilterBy("")}
                  className="w-4 h-4 text-blue-600"
                />
                <span>All Products</span>
              </label>
            </div>
          </div>

          {/* Sort Options */}
          <div>
            <h3 className="text-lg font-medium mb-3">Sort By Price</h3>
            <div className="flex space-x-4">
              <button 
                onClick={() => setOrder('asc')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  order === 'asc' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Low to High
              </button>
              <button 
                onClick={() => setOrder('desc')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  order === 'desc' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                High to Low
              </button>
              <button 
                onClick={() => setOrder('')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  order === '' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {displayProducts.map((elem) => (
          <div key={elem.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-4">
              <img 
                src={elem.image} 
                width={200} 
                height={200} 
                alt={elem.title}
                className="mx-auto mb-4 object-contain h-48"
              />
              <h1 className="font-semibold mb-2 line-clamp-2">{elem.title}</h1>
              <p className="text-lg font-bold text-blue-600">${elem.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-2 capitalize">{elem.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {showPagination && (
        <div className="mt-8 flex justify-center space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition-colors"
          >
            Previous
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
