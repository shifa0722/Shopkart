import {useCart} from '../context/CartContext'

const cart = () => {

    const { cart,
        increaseQuantity,
        decreaseQuantity
    } = useCart();

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity, 0
    )

    const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    )

    const handleOrderNow = () => {
        alert("order placed successfully!")
    }

    return (
        <div className='container mt-5'>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <h3>cart is empty</h3>
            ) : (
                <>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className="btn btn-success btn-sm" onClick={() => increaseQuantity(item.id)}>+</button>
                                    </td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="card mt -4">
                        <div className="card-body">
                            <h4> order summary</h4>
                            <hr />
                            <p>
                                <strong>Products : </strong> {cart.length}
                            </p>

                            <p>
                                <strong>total items : </strong>{totalItems}
                            </p>

                            <p>
                                <strong>Total amount :</strong> {totalAmount}
                            </p>

                            <button className="btn btn-primary" onClick={handleOrderNow}>
                                Order Now
                            </button>

                        </div>
                    </div>

                </>
            )
            }
        </div>
    )
}