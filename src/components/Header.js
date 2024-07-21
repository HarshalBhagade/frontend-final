import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <div className="ui fixed menu"> 
            <div className='ui container center'>
                <Link to='/'><h2>E-SHOP</h2></Link>
            </div>
            <Link to='/cart'><h3 style={{ textAlign: 'right', margin:'0px 50px 0px 0px' }}>Cart</h3></Link>
        </div>
    );
}

export default Header;