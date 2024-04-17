const URL_API = 'http://luisivmaraz.onrender.com/api/products/'


export const getProducts=async()=>{
    const products=await fetch(URL_API + "getAll");
    return await products.json();
}

export const deleteProduct=async(barcode)=>{
    const res=await fetch(URL_API+ "deleteProduct/" + barcode,{
        method:"DELETE",
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json',
        }
        
    })
    return await res.json();
}


export const insertProduct=async(product)=>{
    const res=await fetch(URL_API + "insertProduct",{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json',
           
        },
        body:JSON.stringify(product)
    });
    return await res.json();
}



export const updateProduct = async (product, barcode) =>{
    const res= await fetch(URL_API + "updateProduct/" + barcode, {
        method: "PUT",
        headers:{
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(product)
    });
    return await res.json();
}
