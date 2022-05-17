import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom"
import "./Header.css"
import { useStateValue } from '../StateProvider';

const Header = () => {


    const [{basket}, dispatch] = useStateValue()
    
    return (
        <div className='header'>

            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header_logo">
                    <StoreMallDirectoryIcon className='header_logoImg' fontSize='large' />
                    <h1 className="header_logo_title">EmmaDoc E-Shop</h1>
                </div>
            </Link>

            <div className="header_search">
                <input type="text" className='header_inputSearch' />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className="header_nav">

                <Link to="/login" style={{ textDecoration: "none" }}>
                    <div className="nav_item">
                        <span className="item_lineOne">Hello Guest</span>
                        <span className="item_lineTwo">Sign In</span>
                    </div>
                </Link>

                <div className="nav_item">
                    <span className="item_lineOne">Your</span>
                    <span className="item_lineTwo">Shop</span>
                </div>

                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <div className="nav_itemBasket">
                        <ShoppingBasketIcon fontSize='large' />
                        <span className="item_lineTwo nav_basketCount">{basket.length}</span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header