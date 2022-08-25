import { React, Fragment } from 'react';
import { useState } from 'react';

// import elem2_icon from '../../images/button_elem_2.jpg'
import logo_icon from '../../images/silpo_logo.svg'
import flag from '../../images/flag.png'
import { ReactComponent as PhoneSVG } from '../../images/phone_icon.svg'
import { ReactComponent as BasketSVG } from '../../images/basket_icon.svg'
import { ReactComponent as CategoriesSVG } from '../../images/categories_icon.svg'
import { ReactComponent as ArrowDownSVG } from '../../images/arrow_down_icon.svg'

import HeaderSearch from './header_search/HeaderSearch';
import UserInfo from './header_user_Info/UserInfo';


const Header = ({ visible, ...props }) => {

    return (
        <Fragment>
            <div className={`header ${visible ? 'header_disabled_shadow' : ''}`}
                // onClick={() => console.log(visible)}
            >
                <div className='header__wrapper'>
                    <div className='header_top content'>
                        <div className='header_top logo' title='Онлайн замовлення товарів з «Сільпо»' >
                            <img alt='Logo' src={logo_icon} />
                        </div>
                        <div className='header_top button-product'>
                            <CategoriesSVG />
                            Всі товари
                            <ArrowDownSVG />
                        </div>
                        <HeaderSearch />
                        <UserInfo />
                        <div className='header_top button-basket' title='Перейти в кошик'>
                            <BasketSVG />
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
                        <li className="item_flag" >
                            <img src={flag} alt="Ukraine flag" />
                        </li>
                        <li><a href="">Акції</a></li>
                        <li><a href="">Суші</a></li>
                        <li><a href="">Піца</a></li>
                        <li><a href="">Готові страви</a></li>
                        <li><a href="">Свіжий врожай</a></li>
                        <li><a href="">Барбекю</a></li>
                        <li><a href="">Акція вино та ігристе</a></li>
                        <li><a href="">Акція ковбасні вироби</a></li>
                        <li><a href="">Акція сири</a></li>
                        <li><a href="">Акція товари для дітей</a></li>
                    </ul>
                    <ul className="additional_pages">
                        <li><a href="">
                            <span>
                                Поширені питання
                            </span>
                        </a></li>
                        <li>
                            <a href="tel:0800 301 707" className='hot_line_phone' aria-label='Телефон гарячої лінії: 0800 301 707'>
                                <PhoneSVG className='PhoneIcon' />
                                <div className="phone_holder">
                                    <div className="phone_holder_text">Гаряча лінія</div>
                                    <div className="phone_holder_tel">0 800 301 707</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment >
    )
}

export default Header;