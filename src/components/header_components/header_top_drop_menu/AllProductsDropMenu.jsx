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
        {
            id: 1, img: icon_1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 8, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 2, img: icon_2, path: "m-iaso-ryba-ptytsia", name: "М'ясо, риба, птиця", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 3, img: icon_3, path: "m-iaso-kovbasni-vyroby", name: "М'ясо-ковбасні вироби", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,

            }
        },
        {
            id: 4, img: icon_4, path: "syry", name: "Сири", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 5, img: icon_5, path: "khlib-ta-khlibobulochni-vyroby", name: "Хліб та хлібобулочні вироби", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,

            }
        },
        {
            id: 6, img: icon_6, path: "silpo-resto", name: "«Сільпо» Resto", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,

            }
        },
        {
            id: 7, img: icon_7, path: "kulinariia", name: "Кулінарія", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 8, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 9, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 10, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 11, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 12, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 13, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 14, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 8, img: icon_8, path: "molochni-produkty-ta-iaitsia", name: "Молочні продукти та яйця", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 8, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 9, img: icon_9, path: "zamorozhena-produktsiia", name: "Заморожена продукція", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 8, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 9, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 10, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 11, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 12, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 10, img: icon_10, path: "bakaliia", name: "Бакалія", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 8, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 9, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 10, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 11, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 11, img: icon_11, path: "konservy-sousy-prypravy", name: "Консерви, соуси, приправи", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 8, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 9, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 10, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 11, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 12, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 13, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 14, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 15, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 16, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 17, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 12, img: icon_12, path: "solodoshchi", name: "Солодощі", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 8, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 9, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 10, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 11, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 13, img: icon_13, path: "sneky", name: "Снеки", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 14, img: icon_14, path: "kava-chai", name: "Кава, чай", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 8, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 9, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 10, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 11, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 12, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 13, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 15, img: icon_15, path: "napoi", name: "Напої", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 8, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 9, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 10, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 11, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 12, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 13, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 16, img: icon_16, path: "alkohol", name: "Алкоголь", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 8, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 9, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 10, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 11, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 12, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 13, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 17, img: icon_17, path: "kvity-tovary-dlia-sadu-ta-gorodu", name: "Квіти, товари для саду та городу", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 18, img: icon_18, path: "tiutiunovi-vyroby-ta-aksesuary", name: "Тютюнові вироби та аксесуари", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 19, img: icon_19, path: "gigiiena", name: "Гігієна", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 20, img: icon_20, path: "dlia-domu", name: "Для дому", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 5, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 6, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 7, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 8, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,

            }
        },
        {
            id: 21, img: icon_21, path: "dytiachi-tovary", name: "Дитячі товари", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 4, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
        {
            id: 22, img: icon_22, path: "dlia-tvaryn", name: "Для тварин", isSelected: false,
            menu_level_2: {
                id: 1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 2, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
                id: 3, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            }
        },
    ]);

    const handleChangeCategory = (e) => {
        e.preventDefault();
        //  console.log(e.target.closest('li').id)
        setWidgetElements(prevState =>
            prevState.map((obj, i) => +e.target.closest('li').id === i + 1 ? { ...obj, isSelected: true } : { ...obj, isSelected: false })
        )
    }

    return (
        isVisibleAllProductsMenu ?
            <div className={classes.menu_wrapper} >
                <div className={classes.main_menu}>
                    <ul className={`${classes.main_menu_levels} ${classes.level_1}`} id='allProductMenu'>
                        {widgetElements.map(el =>
                            <li
                                className={el.isSelected ? classes.active : ""}
                                role="link" tabIndex="0" key={el.id} id={el.id}
                                onMouseOver={handleChangeCategory}
                            >
                                <div>
                                    <a href={`/category/${el.path}`}>
                                        <img className={classes.menu_item_icon} src={el.img} alt="" title={el.name} aria-hidden="true" />
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

{/* <ul class="main-menu-levels level_2">
    <li class="capital">
        <a href="/category/frukty-ovochi-solinnia-374">
            <span>Все у&nbsp;</span>
            Фрукти, овочі, соління
        </a>
    </li>
    <li class="" role="link" tabindex="0">
        <div>
            <a href="/category/gryby-svizhi-376">
                Гриби свіжі
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
            <a href="/category/zelen-377">
                Зелень
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
            <a href="/category/salat-379">
                Салат
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
            <a href="/category/ovochi-378">
                Овочі
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
            <a href="/category/frukty-381">
                Фрукти
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
            <a href="/category/fruktovi-delikatesy-380">
                Фруктові делікатеси
            </a>
        </div>
    </li>
    <li class="" role="link" tabindex="0">
        <div>
            <a href="/category/solinnia-marynovani-stravy-375">
                Соління, мариновані страви
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
            <a href="/category/susheni-frukty-gryby-gorikhy-382">
                Сушені фрукти, гриби, горіхи
            </a>
            <i class="icon icon-chevron-right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12">
                    <path d="M1.2 12 0 10.8 4.6 6 0 1.2 1.2 0 7 6l-5.8 6z">
                    </path>
                </svg>
            </i>
        </div>
    </li>
</ul> */}