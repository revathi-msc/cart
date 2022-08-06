import React, { useState } from 'react';

const Veg = 'Food';
const Pizza = 'Pizza';
const Dessert='Brownie';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: Pizza,
      name: 'Detroit-style pizza',
      cost: 534,
      image:'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg',
      
    },
    {
        category: Pizza,
        name: 'Corn-cheese-pizza',
        cost: 445,
        image:'https://cdn.pixabay.com/photo/2017/01/22/19/20/pizza-2000615__340.jpg',
        
      },
      {
        category: Pizza,
        name: 'cheese-pizza',
        cost: 400,
        image:'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__340.jpg',
        
      },
      {
        category: Pizza,
        name: 'Marinara pizza',
        cost: 335,
        image:'https://cdn.pixabay.com/photo/2020/04/29/03/30/pizza-5107039__340.jpg',
      },
      
      
    {
      category: Veg,
      name: 'Mutton Briyani',
      cost: 160,
      image:'https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065__340.jpg',
        
    },
    {
      category: Veg,
      name: 'Palak Tikka',
      cost: 90,
      image: 'https://cdn.pixabay.com/photo/2020/03/13/20/16/paneer-tikka-4929034__480.jpg',
    },
    {
      category: Veg,
      name: 'Idly',
      cost: 80,
      image: 'https://cdn.pixabay.com/photo/2014/12/22/12/22/food-577224__340.jpg',
        
    },
    {
      category: Veg,
      name: 'Fried-Rice',
      cost: 120,
      image: 'https://cdn.pixabay.com/photo/2015/02/10/16/18/fried-rice-631188__340.jpg',
        
    },

    {
      category: Dessert,
      name: ' Fudgy Brownies',
      cost: 100,
      image: 'https://cdn.pixabay.com/photo/2019/02/25/19/24/brownie-4020344__340.jpg',
        
    },
    {
      category: Dessert,
      name: 'Chocolate browines',
      cost: 150,
      image: 'https://cdn.pixabay.com/photo/2015/03/11/12/42/chocolate-brownies-668624__340.jpg',
        
    },
    {
      category: Dessert,
      name: 'Cashew brownie cake',
      cost: 135,
      image: 'https://cdn.pixabay.com/photo/2015/05/31/11/15/cake-791137__340.jpg',
    },
    {
      category: Dessert,
      name: 'Cup cake',
      cost: 185,
      image: 'https://cdn.pixabay.com/photo/2016/02/17/14/23/chocolate-1205153__340.jpg',
    }
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(Veg);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={Veg}>{Veg}</option>
        <option value={Pizza}>{Pizza}</option>
        <option value={Dessert}>{Dessert}</option>
      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>Rs.{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

