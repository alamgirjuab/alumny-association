import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    const memberName = [];
    for (const member of cart) {
        total = total + member.subscription;
        memberName.push(member.name);
    }
    console.log(memberName)

    return (
        <div>
            <h2>Members Added: {props.cart.length}</h2>
            <h4>Total Collection : {total}</h4>
            <h2>Name: {memberName}</h2>
        </div>
    );
};

export default Cart;