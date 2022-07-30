import { React, Fragment } from 'react';

import LoaderMain from './loader_main/LoaderMain';

import elem1_icon from '../images/button_elem_1.jpg'
import elem2_icon from '../images/button_elem_2.jpg'
import basket_icon from '../images/basket.jpg'
import logo_icon from '../images/Silpo_logo.svg'



import HeaderSearch from './headerSearch/HeaderSearch';
import UserInfo from './userInfo/UserInfo';
import { useState } from 'react';


const Header = ({ visible, ...props }) => {



    return (
        <Fragment>
            <div className="header"
                onClick={() => console.log(visible)}
                style = { !visible ? { boxShadow: '0 0 20px rgba(0, 0, 0, .2)' } : {boxShadow: 'none'} }>
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
                </div>
            </div>
            <div
                className={`header__bottom__wrapper ${!visible ? 'hide' : ''}`}
            >
                <nav className='header__bottom'>
                    <ul className="nav_list">
                        <li><a href="">Акції</a></li>
                        <li><a href="">Суші</a></li>
                        <li><a href="">Піца</a></li>
                        <li><a href="">Готові страви</a></li>
                        <li><a href="">Свіжий врожай</a></li>
                        <li><a href="">Акція вино та ігристе</a></li>
                        <li><a href="">Акція ковбасні вироби</a></li>
                        <li><a href="">Акція сири</a></li>
                        <li><a href="">Акція товари для дітей</a></li>
                    </ul>
                    <ul className="additional_pages">
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </div>



            <LoaderMain />

        </Fragment>
    )
}

export default Header;