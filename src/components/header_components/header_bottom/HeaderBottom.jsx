import React, { useState } from "react";

import classes from './HeaderBottom.module.scss';

import flag from '../../../images/flag.png'
import { ReactComponent as PhoneSVG } from '../../../images/phone_icon.svg'

const HeaderBottom = () => {

    const [navList, setNavList] = useState([
        { id: 1, name: 'Акції', isSelected: false },
        { id: 2, name: 'Суші', isSelected: false },
        { id: 3, name: 'Піца', isSelected: false },
        { id: 4, name: 'Готові страви', isSelected: false },
        { id: 5, name: 'Свіжий врожай', isSelected: false },
        { id: 6, name: 'Барбекю', isSelected: false },
        { id: 7, name: 'Акція вино та ігристе', isSelected: false },
        { id: 8, name: 'Знижки від МК Ювілейний', isSelected: false },
        { id: 9, name: 'Акція ковбасні вироби', isSelected: false },
        { id: 10, name: 'Акція сири', isSelected: false },
        { id: 11, name: 'Акція морозиво', isSelected: false },
        { id: 12, name: 'Акція товари для дітей', isSelected: false },
    ]);


    return (
        <nav className={classes.header__bottom}>
            <ul className={classes.nav_list}>
                <li className={classes.item_flag} >
                    <img src={flag} alt="Ukraine flag" />
                </li>
                {navList.map(el =>
                    <li key={el.id}>
                        <a href="">{el.name}</a>
                    </li>
                )}
            </ul>
            <ul className={classes.additional_pages}>
                <li><a href="">
                    <span>Поширені питання</span>
                </a></li>
                <li>
                    <a href="tel:0800 301 707" className={classes.hot_line_phone} aria-label='Телефон гарячої лінії: 0800 301 707'>
                        <PhoneSVG />
                        <div className={classes.phone_holder}>
                            <div className={classes.phone_holder_text}>Гаряча лінія</div>
                            <div className={classes.phone_holder_tel}>0 800 301 707</div>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderBottom;