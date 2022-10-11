import { React, Fragment } from 'react';
import { useState } from 'react';

import classes from './Header.module.scss';

import logo_icon from '../../../images/silpo_logo.svg'

import { ReactComponent as BasketSVG } from '../../../images/basket_icon.svg'
import { ReactComponent as CategoriesSVG } from '../../../images/categories_icon.svg'
import { ReactComponent as ChevronDownSVG } from '../../../images/chevron_down_icon.svg'

import HeaderSearch from '../header_top_search/HeaderSearch';
import UserInfo from '../header_top_userInfo/UserInfo';
import HeaderBottom from '../header_bottom/HeaderBottom';
import AllProductsDropMenu from '../header_top_drop_menu/AllProductsDropMenu';


const Header = ({ isHeaderVisible, isAllProductsMenuOpen, isVisibleAllProductsMenu, ...props }) => {


    const handleOpenProductsMenu = () => {
        isAllProductsMenuOpen(true);
    }

    return (
        <Fragment>
            <div className={`${classes.header} ${isHeaderVisible ? classes.header_disabled_shadow : ''} ${isVisibleAllProductsMenu ? classes.scrollable_catalog : ''}`}>
                {isVisibleAllProductsMenu ?
                    <div className={classes.shadow_layer}></div>
                    :
                    <></>
                }
                <div className={classes.header_content_wrapper}>
                    <div className={classes.header_content}>
                        <div className={classes.header_top}>
                            <div className={classes.header_logo} title='Онлайн замовлення товарів з «Сільпо»' >
                                <img alt='Logo' src={logo_icon} />
                            </div>
                            {/* <div className={classes.all_products_btn} onClick={handleOpenProductsMenu}> */}
                            <div
                                className={classes.all_products_btn}
                                onClick={handleOpenProductsMenu}
                            >
                                <CategoriesSVG />
                                Всі товари
                                <ChevronDownSVG />
                                <AllProductsDropMenu
                                    // isVisibleAllProductsMenu={isVisibleAllProductsMenu}
                                />
                            </div>
                            <HeaderSearch />
                            <UserInfo />
                            <div className={classes.basket_btn} title='Перейти в кошик'>
                                <BasketSVG />
                                <div style={{ margin: '0 auto' }}>
                                    Кошик
                                </div>
                                <del>&nbsp;</del>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`header__bottom__wrapper ${!isHeaderVisible ? 'hide' : ''}`}>
                    <HeaderBottom />
                </div>
            </div>
        </Fragment >
    )
}

export default Header;