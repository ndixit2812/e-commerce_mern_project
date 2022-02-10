import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

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
     
    const deleteProduct = async(id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`,{
             method:"Delete"
        });
        result = await result.json()
        if(result){
            alert('This record is deleted')
            getProducts();
        }
    };


    return(
        <div className='product_list'>
            <h1>ProductList</h1>
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Company</li>
                <li>Category</li>
                <li>Operations</li>
            </ul>
            {
                products.map((currElem, index) => {
                    return(
                    <ul key={currElem._id}>
                        <li>{index+1}</li>
                        <li>{currElem.name}</li>
                        <li>Rs. {currElem.price}</li>
                        <li>{currElem.company}</li>
                        <li>{currElem.category}</li>
                        <li><button onClick={()=>deleteProduct(currElem._id)}>Delete</button>
                            <Link to={"update/"+currElem._id}>Update</Link>                       
                        </li>
                    </ul>
                    )
                })
            }
        </div>
    )
}

export default ProductList;