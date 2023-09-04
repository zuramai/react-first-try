import Button from "@/components/Button"
import { useAuth } from "@/hooks/useAuth"
import { Product } from "@/types/product"
import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

interface Cart {
    products: (Product & {
        quantity: number
        total: number
    })[]
    id: number
}
export default function () {
    const [cart, setCart] = useState<Cart|null>(null)
    const {user} = useAuth()
    const fetchCart = () => {
        axios.get('/carts/user/'+user?.id)
            .then(res => {
                console.log(res.data.carts[0])
                setCart(res.data.carts[0])
            })
    }
    const checkout = () => {
        alert("Success checkout!")
    }

    useEffect(() => fetchCart(), [])
    return (
        <>
            <div className="page">
                <div className="container mx-auto">
                    <section className="products">
                        <div className="section-header mb-8">
                            <h2 className="section-title mb-3">
                                Cart
                            </h2>
                        </div>
                        <div className="section-body">
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                                <table className="cart-products col-span-2">
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total Price</th>
                                    </tr>
                                    {cart && cart.products.map((c, index) => {
                                        return (
                                            <tr className="cart-product" key={c.id}>
                                                <td>
                                                    <NavLink to={'/'}>{index + 1}</NavLink>
                                                </td>
                                                <td>
                                                    <NavLink to={'/'}>{c.title}</NavLink>
                                                </td>
                                                <td>
                                                    <NavLink to={'/'}>${c.price}</NavLink>
                                                </td>
                                                <td>
                                                    <NavLink to={'/'}>{c.quantity}</NavLink>
                                                </td>
                                                <td>
                                                    <NavLink to={'/'}>${c.total}</NavLink>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </table>
                                <div className="summary bg-slate-100 p-5">
                                    <div className="flex justify-between border-b border-gray-300 p-3">
                                        <span>Price:</span>
                                        <span>$50</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-300 p-3">
                                        <span>Discount:</span>
                                        <span className="text-green-500">-$15</span>
                                    </div>
                                    <div className="flex justify-between p-3 mb-5">
                                        <span>Total:</span>
                                        <span className="font-bold">$35</span>
                                    </div>
                                    <Button onClick={checkout} full={true}>Check out</Button>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}