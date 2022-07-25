import React from 'react';
import { useState, useRef } from 'react';

import Loader from './loader/Loader';

import elem1_icon from '../images/button_elem_1.jpg'
import elem2_icon from '../images/button_elem_2.jpg'
import basket_icon from '../images/basket.jpg'
import logo_icon from '../images/Silpo_logo.svg'
import clear_input_button from '../images/clear_input_button.svg'

import { ReactComponent as LocationIcon } from '../images/location.svg'
import { ReactComponent as UserIcon } from '../images/user_icon.svg'
import { ReactComponent as SearchIcon } from '../images/search_icon.svg'



const Header = () => {

    const [locationColor, setLocationColor] = useState('#494c4e');
    const [userColor, setUserColor] = useState('#494c4e');
    const [SearchColor, setSearchColor] = useState('#494c4e');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const inputEl = useRef(null);
    const backdropEl = useRef(null);
    const dropdownEl = useRef(null);

    const inputFocused = () => {
        setIsInputFocused(true);
        inputEl.current.focus();
        backdropEl.current.className = 'backdrop visible'
    }

    const inputUnFocused = () => {
        backdropEl.current.className = 'backdrop';
        setIsInputFocused(false);
        dropdownEl.current.className = 'header-search-dropdown';
    }

    const handlerInputValue = (e) => {
        setInputValue(e.target.value);
        dropdownEl.current.className = e.target.value ? 'header-search-dropdown visible' : 'header-search-dropdown'
    }


    return (
        <div className='header__wrapper'>
            <div className='header-top content'>
                <div className='header-top logo' title='Онлайн замовлення товарів з «Сільпо»' >
                    <img alt='Logo' src={logo_icon} />
                </div>
                <div className='header-top button-product'>
                    <img alt='btn1' src={elem1_icon} />
                    Всі товари
                    <img alt='btn2' src={elem2_icon} />
                </div>
                <div className='header-top search-field'>
                    <div
                        ref={backdropEl}
                        onMouseDown={inputUnFocused}
                        className='backdrop'
                    >
                    </div>
                    <div
                        className={`header-top search ${isInputFocused ? 'focused' : ''}`}
                        onMouseOver={() => setSearchColor('#ff8522')}
                        onMouseOut={() => setSearchColor('#494c4e')}
                        onClick={inputFocused}
                    >
                        <SearchIcon fill={SearchColor} />
                        <input
                            type="text"
                            placeholder='Пошук на сайті'
                            value={inputValue}
                            ref={inputEl}
                            onMouseDown={inputFocused}
                            onChange={handlerInputValue}
                        />
                        <div className='header__input__dellBtn active'  onClick={()=> setInputValue('')} >
                            <img alt='button' src={clear_input_button} />
                        </div>
                        <div
                            className="header-search-dropdown"
                            ref={dropdownEl}>
                            <div className="loader"></div>
                            {inputValue}
                        </div>
                    </div>
                </div>
                <ul className='header-top-info'>
                    <li title='Вхід/Реєстрація'>
                        <div
                            className='userReg'
                            onMouseOver={() => setUserColor('#ff8522')}
                            onMouseOut={() => setUserColor('#494c4e')}
                        >
                            <UserIcon fill={userColor} />
                            <span >
                                Вхід/
                                <br />
                                Реєстрація
                            </span>
                        </div>
                    </li>
                    <li>
                        <div
                            className='location'
                            onMouseOver={() => setLocationColor('#ff8522')}
                            onMouseOut={() => setLocationColor('#494c4e')}
                        >
                            <LocationIcon fill={locationColor} />
                            <span>
                                <b>Доставка</b>
                                <br />
                                <mark style={{ color: '#ff8522', background: 'transparent' }}>
                                    <b>Вкажіть адресу достав...</b>
                                </mark>
                            </span>
                        </div>
                    </li>
                </ul>
                <div className='header-top button-basket' title='Перейти в кошик'>
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
                <Loader />
            </div>
        </div>
    )
}

export default Header;