import React from 'react';

const AddProduct = () => {
    const [name, setName ] = React.useState("");
    const [price, setPrice ] = React.useState("");
    const [category, setCategory ] = React.useState("");
    const [company, setCompany ] = React.useState("");

    const addProduct = () => {
        console.log(name,price,category,company);
    }

    return(
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" className='input_box' placeholder='Enter product name'
            value={name} onChange={(e) => setName(e.target.value)} />

            <input type="text" className='input_box' placeholder='Enter product price' 
            value={price} onChange={(e) => setPrice(e.target.value)}/>

            <input type="text" className='input_box' placeholder='Enter product category' 
            value={category} onChange={(e) => setCategory(e.target.value)}/>

            <input type="text" className='input_box' placeholder='Enter product company' 
            value={company} onChange={(e) => setCompany(e.target.value)}/>

            <button className='btn' onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct
