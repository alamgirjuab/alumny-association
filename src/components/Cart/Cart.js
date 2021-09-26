import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let memberName = '';

    /* -----------------------------------------------------------------------
     | Sum of Subscription and show the selected persons's name in cart area |
     -----------------------------------------------------------------------*/
    for (const member of cart) {
        total = total + member.subscription;
        memberName = memberName + member.name + ', ';
    }


    return (
        <div className='cart-area'>
            <h2>Members Added: {props.cart.length}</h2>
            <h4>Total Collection : {total}</h4>
            <h2>{memberName}</h2>
        </div>
    );
};

export default Cart;