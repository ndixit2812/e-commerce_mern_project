import React from 'react';

const AddProduct = () => {
    const [name, setName ] = React.useState("");
    const [price, setPrice ] = React.useState("");
    const [category, setCategory ] = React.useState("");
    const [company, setCompany ] = React.useState("");
    const [error, setError] = React.useState(false);

    const addProduct = async() => {
            
           console.log(!name);
           if(!name || !price || !category || !company)
           {
               setError(true);
               return false;
           }
           

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = fetch("http://localhost:5000/add-product", {
            method: 'post',
            body: JSON.stringify({name, price, category, company, userId}),
            headers:{
                "Content-Type":"application/json"            
            }
        });
        result = await result.json();
        console.log(result);

    }

    return(
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" className='input_box' placeholder='Enter product name'
            value={name} onChange={(e) => setName(e.target.value)} />
            {error && !company && <span className='invalid_input'>Enter valid name</span>}

            <input type="text" className='input_box' placeholder='Enter product price' 
            value={price} onChange={(e) => setPrice(e.target.value)}/>
            {error && !company && <span className='invalid_input'>Enter valid price</span>}

            <input type="text" className='input_box' placeholder='Enter product category' 
            value={category} onChange={(e) => setCategory(e.target.value)}/>
            {error && !company && <span className='invalid_input'>Enter valid category</span>}

            <input type="text" className='input_box' placeholder='Enter product company' 
            value={company} onChange={(e) => setCompany(e.target.value)}/>
            {error && !company && <span className='invalid_input'>Enter valid company</span>}

            <button className='btn' onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct
