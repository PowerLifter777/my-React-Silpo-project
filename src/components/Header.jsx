import React from 'react';
import { useState } from 'react';

import LoaderMain from './loader_main/LoaderMain';

import elem1_icon from '../images/button_elem_1.jpg'
import elem2_icon from '../images/button_elem_2.jpg'
import basket_icon from '../images/basket.jpg'
import logo_icon from '../images/Silpo_logo.svg'



import HeaderSearch from './headerSearch/HesderSearch';
import UserInfo from './userInfo/UserInfo';


const Header = () => {

     return (
        <div className='header__wrapper'>
            <div className='header_top content'>
                <div className='header_top logo' title='Онлайн замовлення товарів з «Сільпо»' >
                    <img alt='Logo' src={logo_icon} />
                </div>
                <div className='header_top button-product'>
                    <img alt='btn1' src={elem1_icon} />
                    Всі товари
                    <img alt='btn2' src={elem2_icon} />
                </div>

                <HeaderSearch />

                <UserInfo />

                <div className='header_top button-basket' title='Перейти в кошик'>
                    <img alt='btn2' src={basket_icon} />
                    <div style={{ margin: '0 auto' }}>
                        Кошик
                    </div>
                </div>
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
                <LoaderMain />
            </div>
        </div>
    )
}

export default Header;