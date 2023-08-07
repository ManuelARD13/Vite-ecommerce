import React, { useContext, useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { CartCTX } from '../../context/CartContext';
import { useParams } from 'react-router-dom';


function Home() {

  const category = useParams().id
  console.log(category)
  const { products, userInput, setUserInput } = useContext(CartCTX);
  
  const filterByTitle = (filteredProducts) => {
    const newfilteredProducts = filteredProducts?.filter(product =>
      product.title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
    )
    return newfilteredProducts
  }
  const renderView = () => {
    
    if (category && category !== "all") {
      const filteredProducts = products?.filter(product =>
        product.category.name.toLocaleLowerCase() === category
      )
      if (userInput.length > 3) {
        const filteredProductsToRender = filterByTitle(filteredProducts)
        return filteredProductsToRender.map((product, index) => <Card key={product.id} product={product} />)
      } else {
        return filteredProducts.map(product => <Card key={product.id} product={product} />)
      }
    } else {
      if (userInput.length > 3) {
        const filteredProductsToRender = filterByTitle(products)
        return filteredProductsToRender.map(product => <Card key={product.id} product={product} />)
      } else {
        return products.map(product => <Card key={product.id} product={product} />)
      }
    }
  }

  return (
    <div className='mt-10 flex flex-col items-center'>
      <h1 className='text-2xl font-medium mb-4'>Exclusive Products</h1>
      <input
        type="text"
        placeholder='Search' value={userInput}
        className='rounded-lg border border-black w-full p-3 mb-4 focus:outline-none'
        onChange={(e) => setUserInput(e.target.value.toLocaleLowerCase())}
      />
      <div className='grid grid-cols-4 gap-6 w-full max-screen-w-lg mt-10'>
        {
          renderView()
        }
      </div>
    </div>
  );
}

export default Home;