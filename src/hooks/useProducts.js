import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    //Getting data from fake api
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])

    return [products, setProducts];
};

export default useProducts;