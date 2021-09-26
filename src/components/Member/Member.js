import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Member.css';

const Member = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('./members.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    return (
        <div className='member-container'>
            <div className='member-area'>
                {
                    members.map(member => <Card
                        key={member.sl}
                        member={member}
                    >
                    </Card>)
                }

            </div>
            <div className='summery-area'>
                <h2>Members Added: </h2>
                <h4>Total Collection :</h4>
            </div>

        </div>
    );
};

export default Member;