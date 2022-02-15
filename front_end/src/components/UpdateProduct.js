import React, {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName ] = React.useState("");
    const [price, setPrice ] = React.useState("");
    const [category, setCategory ] = React.useState("");
    const [company, setCompany ] = React.useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async() => {
        console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async() => {
           console.log(name,price,company,category)
               let result =await fetch(`http://localhost:5000/product/${params.id}`,{
                   method:'Put',
                   body:JSON.stringify({name,price,company,category}),
                   headers:{
                       'Content-Type': "application/json"
                   }
               });
               result = await result.json()
               console.log(result)
               navigate('/')
    }

    return(
        <div className='product'>
            <h1>Update Product</h1>
            <input type="text" className='input_box' placeholder='Enter product name'
            value={name} onChange={(e) => setName(e.target.value)} />
            {/* {error && !company && <span className='invalid_input'>Enter valid name</span>} */}

            <input type="text" className='input_box' placeholder='Enter product price' 
            value={price} onChange={(e) => setPrice(e.target.value)}/>
            {/* {error && !company && <span className='invalid_input'>Enter valid price</span>} */}

            <input type="text" className='input_box' placeholder='Enter product category' 
            value={category} onChange={(e) => setCategory(e.target.value)}/>
            {/* {error && !company && <span className='invalid_input'>Enter valid category</span>} */}

            <input type="text" className='input_box' placeholder='Enter product company' 
            value={company} onChange={(e) => setCompany(e.target.value)}/>
            {/* {error && !company && <span className='invalid_input'>Enter valid company</span>} */}

            <button className='btn' onClick={updateProduct}>Update Product</button>
        </div>
    )
}

export default UpdateProduct
