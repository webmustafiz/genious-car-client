import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
import Orderrow from './Orderrow';


const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrder] = useState({})
    
    
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user?.email])

    return (
        <div>
            <h2 className="text-2xl"> you have {orders.length} orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Orderrow
                                key={order._id}
                                order={order}
                            ></Orderrow>)
                        }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default Orders;