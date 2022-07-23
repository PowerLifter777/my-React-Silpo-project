import React from 'react';
import logo from '../images/logo.jpg'
import elem_1 from '../images/button_elem_1.jpg'
import elem_2 from '../images/button_elem_2.jpg'

const Header = () => {
    return (
        <div className='header__wrapper'>
            <div className='header-top content'>
                <div className='header-top logo' ><img alt='Logo' src={logo}></img></div>
                <div className='header-top button-product'>
                    <img alt='btn1' src={elem_1}></img>
                    Всі товари
                    <img alt='btn2' src={elem_2}></img>
                </div>
                <div className='header-top search'>
                    {/* <div className='header-top search-field'> */}
                        <input type="text" placeholder='Пошук на сайті' />
                    {/* </div> */}
                </div>
                <div className='header-top userReg'></div>
                <div className='header-top location'></div>
                <div className='header-top button-basket'></div>
            </div>
            <div className='header-bottom__wrapper'>
                <nav className='header-bottom'>
                    <ul className="nav-list">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul className="additional-pages">
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
                <div style={{display: 'flex'}}>
                    <img alt='Logo' src={logo} className='loader-logo'  ></img>
                    <div className='loader'>
                        <div id='el1'></div>
                        <div id='el2'></div>
                        <div id='el3'></div>
                        <div id='el4'></div>
                        <div id='el5'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;