import React, { useState } from "react"

import classes from './AllProductsDropMenu.module.scss';

import icon_1 from "../../../images/drop_down_menu_icons/1.svg";
import icon_2 from "../../../images/drop_down_menu_icons/2.svg";
import icon_3 from "../../../images/drop_down_menu_icons/3.svg";
import icon_4 from "../../../images/drop_down_menu_icons/4.svg";
import icon_5 from "../../../images/drop_down_menu_icons/5.svg";
import icon_6 from "../../../images/drop_down_menu_icons/6.svg";
import icon_7 from "../../../images/drop_down_menu_icons/7.svg";
import icon_8 from "../../../images/drop_down_menu_icons/8.svg";
import icon_9 from "../../../images/drop_down_menu_icons/9.svg";
import icon_10 from "../../../images/drop_down_menu_icons/10.svg";
import icon_11 from "../../../images/drop_down_menu_icons/11.svg";
import icon_12 from "../../../images/drop_down_menu_icons/12.svg";
import icon_13 from "../../../images/drop_down_menu_icons/13.svg";
import icon_14 from "../../../images/drop_down_menu_icons/14.svg";
import icon_15 from "../../../images/drop_down_menu_icons/15.svg";
import icon_16 from "../../../images/drop_down_menu_icons/16.svg";
import icon_17 from "../../../images/drop_down_menu_icons/17.svg";
import icon_18 from "../../../images/drop_down_menu_icons/18.svg";
import icon_19 from "../../../images/drop_down_menu_icons/19.svg";
import icon_20 from "../../../images/drop_down_menu_icons/20.svg";
import icon_21 from "../../../images/drop_down_menu_icons/21.svg";
import icon_22 from "../../../images/drop_down_menu_icons/22.svg";

import { ReactComponent as ChevronRightSVG } from '../../../images/chevron_right_icon.svg'


const AllProductsDropMenu = ({ isVisibleAllProductsMenu }) => {


    const [widgetElements, setWidgetElements] = useState([
        { id: 1, img: icon_1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false },
        { id: 2, img: icon_2, path: "", name: "М'ясо, риба, птиця", isSelected: false },
        { id: 3, img: icon_3, path: "", name: "М'ясо-ковбасні вироби", isSelected: false },
        { id: 4, img: icon_4, path: "", name: "Сири", isSelected: false },
        { id: 5, img: icon_5, path: "", name: "Хліб та хлібобулочні вироби", isSelected: false },
        { id: 6, img: icon_6, path: "", name: "«Сільпо» Resto", isSelected: false },
        { id: 7, img: icon_7, path: "", name: "Кулінарія", isSelected: false },
        { id: 8, img: icon_8, path: "", name: "Молочні продукти та яйця", isSelected: false },
        { id: 9, img: icon_9, path: "", name: "Заморожена продукція", isSelected: false },
        { id: 10, img: icon_10, path: "", name: "Бакалія", isSelected: false },
        { id: 11, img: icon_11, path: "", name: "Консерви, соуси, приправи", isSelected: false },
        { id: 12, img: icon_12, path: "", name: "Солодощі", isSelected: false },
        { id: 13, img: icon_13, path: "", name: "Снеки", isSelected: false },
        { id: 14, img: icon_14, path: "", name: "Кава, чай", isSelected: false },
        { id: 15, img: icon_15, path: "", name: "Напої", isSelected: false },
        { id: 16, img: icon_16, path: "", name: "Алкоголь", isSelected: false },
        { id: 17, img: icon_17, path: "", name: "Квіти, товари для саду та городу", isSelected: false },
        { id: 18, img: icon_18, path: "", name: "Тютюнові вироби та аксесуари", isSelected: false },
        { id: 19, img: icon_19, path: "", name: "Гігієна", isSelected: false },
        { id: 20, img: icon_20, path: "", name: "Для дому", isSelected: false },
        { id: 21, img: icon_21, path: "", name: "Дитячі товари", isSelected: false },
        { id: 22, img: icon_22, path: "", name: "Для тварин", isSelected: false },

    ]);

    const handleChangeCategory = (e) => {
        // e.preventDefault();
        //  console.log(e.target.closest('li').id)
        setWidgetElements(prevState =>
            prevState.map((obj, i) => e.target.closest('li').id == i + 1 ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
        )
    }

    return (
        isVisibleAllProductsMenu ?
            <div className={classes.menu_wrapper} >
                <div className={classes.main_menu}>
                    <ul className={`${classes.main_menu_levels} ${classes.level_1}`} id='allProductMenu'>
                        {widgetElements.map(el =>
                            <li onMouseOver={handleChangeCategory} className={el.isSelected ? classes.active : ""} role="link" tabIndex="0" key={el.id} id={el.id}>
                                {/* // <li className={classes.active} role="link" tabIndex="0" key={el.id}> */}
                                <div>
                                    <a href="/category/frukty-ovochi-solinnia-374">
                                        <img className={classes.menu_item_icon} src={el.img} alt="" title={el.name} aria-hidden="true" />
                                        {/* <img className={classes.menu_item_icon} src={Icon_1} alt="" title={el.name} aria-hidden="true" /> */}
                                        {el.name}
                                    </a>
                                    <i className={classes.icon_chevron_right}>
                                        <ChevronRightSVG />
                                    </i>
                                    <div className="main_menu_levels_wrapper">
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            :
            <></>
    )
}

export default AllProductsDropMenu;





{/* <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/m-iaso-ryba-ptytsia-277">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/277.svg" alt="" title="М'ясо, риба, птиця" aria-hidden="true" />М'ясо, риба, птиця</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12"><path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z">
                                </path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/m-iaso-kovbasni-vyroby-316">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/316.svg" alt="" title="М'ясо-ковбасні вироби" aria-hidden="true" />М'ясо-ковбасні вироби</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z"></path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/syry-1468">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/1468.svg" alt="" title="Сири" aria-hidden="true" />Сири
                            </a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z">
                                    </path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/khlib-ta-khlibobulochni-vyroby-486">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/486.svg" alt="" title="Хліб та хлібобулочні вироби" aria-hidden="true" />Хліб та хлібобулочні вироби</a>
                            <i class="icon icon-chevron-right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12"><path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z">
                            </path>
                            </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/silpo-resto-3601">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/3601.svg" alt="" title="«Сільпо» Resto" aria-hidden="true" />«Сільпо» Resto</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z">
                                    </path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/kulinariia-433">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/433.svg" alt="" title="Кулінарія" aria-hidden="true" />Кулінарія</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z">
                                    </path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/molochni-produkty-ta-iaitsia-234">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/234.svg" alt="" title="Молочні продукти та яйця" aria-hidden="true" />Молочні продукти та яйця</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z">
                                    </path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/zamorozhena-produktsiia-264">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/264.svg" alt="" title="Заморожена продукція" aria-hidden="true" />Заморожена продукція</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z"></path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/bakaliia-65">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/65.svg" alt="" title="Бакалія" aria-hidden="true" />Бакалія</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z">
                                    </path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/konservy-sousy-prypravy-130">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/130.svg" alt="" title="Консерви, соуси, приправи" aria-hidden="true" />Консерви, соуси, приправи</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z"></path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/solodoshchi-498">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/498.svg" alt="" title="Солодощі" aria-hidden="true" />Солодощі</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z"></path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/sneky-308">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/308.svg" alt="" title="Снеки" aria-hidden="true" />Снеки</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z"></path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/kava-chai-359">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/359.svg" alt="" title="Кава, чай" aria-hidden="true" />Кава, чай</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z"></path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/napoi-52">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/52.svg" alt="" title="Напої" aria-hidden="true" />Напої</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z"></path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/alkogol-22">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/22.svg" alt="" title="Алкоголь" aria-hidden="true" />Алкоголь</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z">
                                    </path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/kvity-tovary-dlia-sadu-ta-gorodu-476">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/476.svg" alt="" title="Квіти, товари для саду та городу" aria-hidden="true" />Квіти, товари для саду та городу</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z"></path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/tiutiunovi-vyroby-ta-aksesuary-470">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/470.svg" alt="" title="Тютюнові вироби та аксесуари" aria-hidden="true" />Тютюнові вироби та аксесуари</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z"></path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/gigiiena-535">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/535.svg" alt="" title="Гігієна" aria-hidden="true" />Гігієна</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z"></path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/dlia-domu-567">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/567.svg" alt="" title="Для дому" aria-hidden="true" />Для дому</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z">
                                    </path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/dytiachi-tovary-449">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/449.svg" alt="" title="Дитячі товари" aria-hidden="true" />Дитячі товари</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z">
                                    </path>
                                </svg>
                            </i>
                        </div>
                    </li>
                    <li class="" role="link" tabindex="0">
                        <div>
                            <a href="/category/dlia-tvaryn-653">
                                <img class="menu-item-icon" src="https://content.silpo.ua/ecom/categoryclassifier/iconsforsite/653.svg" alt="" title="Для тварин" aria-hidden="true" />Для тварин</a>
                            <i class="icon icon-chevron-right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z"></path>
                                </svg>
                            </i>
                        </div>
                    </li> */}



