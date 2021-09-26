import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Member.css';

const Member = () => {
    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([]);

    /* -------------------
     | Fetching API data |
     -------------------*/
    useEffect(() => {
        fetch('./members.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    /* -------------------------------
     | Button Event Handler Function |
     -------------------------------*/
    const handleAddMember = (member) => {
        const newCart = [...cart, member];
        setCart(newCart);
    }

    return (
        <div className='member-container'>
            <div className='member-area'>
                {
                    members.map(member => <Card
                        key={member.sl}
                        member={member}
                        handleAddMember={handleAddMember}
                    >
                    </Card>)
                }

            </div>
            <div className='summery-area'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Member;