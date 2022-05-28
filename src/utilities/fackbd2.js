const addToDb = (id)=>{
    let productObject;

    // get items
    const proStorage = localStorage.getItem('shopping-cart')
    if(proStorage){
        productObject = JSON.parse(proStorage);
    }else {
        productObject = {};
    }

    // set items 
    const quantity = productObject[id];
    if(quantity){
        console.log(quantity);
        console.log('already eixist');
        const newQuantity = quantity + 1;
        productObject[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
        
    }
    else{
        productObject[id] = 1;
        // localStorage.setItem(id, 1);
    }

    localStorage.setItem('shopping-cart', JSON.stringify(productObject));
    console.log(productObject);
}

const removedb = (id)=>{
    const removeStorage = localStorage.getItem('shopping-cart');
    if(removeStorage){
        const shoppingCart = JSON.parse(removeStorage);
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

export {
    addToDb,
    removedb
}