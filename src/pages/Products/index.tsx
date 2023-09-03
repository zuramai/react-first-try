import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import axios from 'axios'



export default function() {
    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        axios.get('/products')
            .then(res => {
                setProducts(res.data.products)
                console.log(res.data)
            })    
    }
    useEffect(fetchProducts, [])

    return (
        <>
            <div className="page">
                <div className="container mx-auto">
                    <section className="products">
                        <div className="section-header mb-8">
                            <h2 className="section-title mb-3">
                                Products
                            </h2>
                            <p>Nostrum repellendus tempore voluptate</p>
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            {products.map(product => {
                                return <ProductCard title="iPhone 9" description="Nostrum repellendus tempore voluptates"/>
                            })}
                            
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}