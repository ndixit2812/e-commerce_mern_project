import React, {useState, useEffect} from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
      let result = await fetch('http://localhost:5000/products');
      result = await result.json();
      setProducts(result);
    }
     console.log("products", products);


    return(
        <div className='product_list'>
            <h1>ProductList</h1>
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Company</li>
                <li>Category</li>
            </ul>
            {
                products.map((currElem, index) => {
                    return(
                    <ul>
                        <li>{index+1}</li>
                        <li>{currElem.name}</li>
                        <li>Rs. {currElem.price}</li>
                        <li>{currElem.company}</li>
                        <li>{currElem.category}</li>
                    </ul>
                    )
                })
            }
        </div>
    )
}

export default ProductList;