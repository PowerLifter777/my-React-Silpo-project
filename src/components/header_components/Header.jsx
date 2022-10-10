import { React, Fragment } from 'react';
import { useState } from 'react';

// import elem2_icon from '../../images/button_elem_2.jpg'
import logo_icon from '../../images/Silpo_logo.svg'

import { ReactComponent as BasketSVG } from '../../images/basket_icon.svg'
import { ReactComponent as CategoriesSVG } from '../../images/categories_icon.svg'
import { ReactComponent as ArrowDownSVG } from '../../images/chevron_down_icon.svg'

import HeaderSearch from './header_search/HeaderSearch';
import UserInfo from './header_user_Info/UserInfo';
import HeaderBottom from './header_bottom/HeaderBottom';


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
            <div className={`header__bottom__wrapper ${!visible ? 'hide' : ''}`}>
                <HeaderBottom />
            </div>
        </Fragment >
    )
}

export default Header;