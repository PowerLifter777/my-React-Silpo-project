import icon_1 from "../images/drop_down_menu_icons/1.svg";
import icon_2 from "../images/drop_down_menu_icons/2.svg";
import icon_3 from "../images/drop_down_menu_icons/3.svg";
import icon_4 from "../images/drop_down_menu_icons/4.svg";
import icon_5 from "../images/drop_down_menu_icons/5.svg";
import icon_6 from "../images/drop_down_menu_icons/6.svg";
import icon_7 from "../images/drop_down_menu_icons/7.svg";
import icon_8 from "../images/drop_down_menu_icons/8.svg";
import icon_9 from "../images/drop_down_menu_icons/9.svg";
import icon_10 from "../images/drop_down_menu_icons/10.svg";
import icon_11 from "../images/drop_down_menu_icons/11.svg";
import icon_12 from "../images/drop_down_menu_icons/12.svg";
import icon_13 from "../images/drop_down_menu_icons/13.svg";
import icon_14 from "../images/drop_down_menu_icons/14.svg";
import icon_15 from "../images/drop_down_menu_icons/15.svg";
import icon_16 from "../images/drop_down_menu_icons/16.svg";
import icon_17 from "../images/drop_down_menu_icons/17.svg";
import icon_18 from "../images/drop_down_menu_icons/18.svg";
import icon_19 from "../images/drop_down_menu_icons/19.svg";
import icon_20 from "../images/drop_down_menu_icons/20.svg";
import icon_21 from "../images/drop_down_menu_icons/21.svg";
import icon_22 from "../images/drop_down_menu_icons/22.svg"; 

const allProductCategories = [
    {
        id: '1', img: icon_1, path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        menu_level_2: {
            id: '1-1', path: "gryby-svizhi", name: "Гриби свіжі", isSelected: false,
            id: '1-2', path: "zelen", name: "Зелень", isSelected: false,
            id: '1-3', path: "salat", name: "Салат", isSelected: false,
            id: '1-4', path: "ovochi", name: "Овочі", isSelected: false,
            id: '1-5', path: "frukty", name: "Фрукти", isSelected: false,
            id: '1-6', path: "fruktovi-delikatesy", name: "Фруктові делікатеси", isSelected: false,
            id: '1-7', path: "solinnia-marynovani-stravy", name: "Соління, мариновані страви", isSelected: false,
            id: '1-8', path: "susheni-frukty-gryby-gorikhy", name: "Сушені фрукти, гриби, горіхи", isSelected: false,
        }
    },
    {
        id: '2', img: icon_2, path: "m-iaso-ryba-ptytsia", name: "М'ясо, риба, птиця", isSelected: false,
        menu_level_2: {
            id: '2-1', path: "svizhe-m-iaso", name: "Свіже м'ясо", isSelected: false,
            id: '2-2', path: "prygotovlena-ryba-ta-moreprodukty", name: "Приготовлена риба та морепродукти", isSelected: false,
            id: '2-3', path: "zhyva-ta-okholodzhena-ryba-ta-moreprodukty", name: "Жива та охолоджена риба та морепродукти", isSelected: false,
            id: '2-4', path: "zamorozhena-ryba-moreprodukty-i-moliusky", name: "Заморожена риба, морепродукти і молюски", isSelected: false, 
        }
    },
    {
        id: '3', img: icon_3, path: "m-iaso-kovbasni-vyroby", name: "М'ясо-ковбасні вироби", isSelected: false,
        menu_level_2: {
            id: '3-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '3-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '3-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '3-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '3-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '3-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '4', img: icon_4, path: "syry", name: "Сири", isSelected: false,
        menu_level_2: {
            id: '4-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '4-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '4-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '4-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '4-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '5', img: icon_5, path: "khlib-ta-khlibobulochni-vyroby", name: "Хліб та хлібобулочні вироби", isSelected: false,
        menu_level_2: {
            id: '5-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '5-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '5-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '5-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '5-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '5-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,

        }
    },
    {
        id: '6', img: icon_6, path: "silpo-resto", name: "«Сільпо» Resto", isSelected: false,
        menu_level_2: {
            id: '6-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '6-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '6-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '6-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,

        }
    },
    {
        id: '7', img: icon_7, path: "kulinariia", name: "Кулінарія", isSelected: false,
        menu_level_2: {
            id: '7-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-7', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-8', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-9', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-10', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-11', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-12', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-13', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '7-14', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '8', img: icon_8, path: "molochni-produkty-ta-iaitsia", name: "Молочні продукти та яйця", isSelected: false,
        menu_level_2: {
            id: '8-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '8-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '8-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '8-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '8-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '8-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '8-7', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '8-8', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '9', img: icon_9, path: "zamorozhena-produktsiia", name: "Заморожена продукція", isSelected: false,
        menu_level_2: {
            id: '9-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '9-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '9-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '9-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '9-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '9-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '9-7', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '9-8', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '9-9', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '9-10', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '9-11', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '9-12', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '10', img: icon_10, path: "bakaliia", name: "Бакалія", isSelected: false,
        menu_level_2: {
            id: '10-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '10-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '10-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '10-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '10-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '10-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '10-7', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '10-8', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '10-9', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '10-10', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '10-11', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '11', img: icon_11, path: "konservy-sousy-prypravy", name: "Консерви, соуси, приправи", isSelected: false,
        menu_level_2: {
            id: '11-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-7', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-8', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-9', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-10', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-11', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-12', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-13', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-14', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-15', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-16', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '11-17', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '12', img: icon_12, path: "solodoshchi", name: "Солодощі", isSelected: false,
        menu_level_2: {
            id: '12-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '12-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '12-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '12-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '12-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '12-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '12-7', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '12-8', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '12-9', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '12-10', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '12-11', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '13', img: icon_13, path: "sneky", name: "Снеки", isSelected: false,
        menu_level_2: {
            id: '13-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '13-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '13-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '13-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '13-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '13-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '13-7', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '14', img: icon_14, path: "kava-chai", name: "Кава, чай", isSelected: false,
        menu_level_2: {
            id: '14-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-7', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-8', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-9', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-10', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-11', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-12', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '14-13', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '15', img: icon_15, path: "napoi", name: "Напої", isSelected: false,
        menu_level_2: {
            id: '15-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-7', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-8', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-9', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-10', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-11', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-12', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '15-13', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '16', img: icon_16, path: "alkohol", name: "Алкоголь", isSelected: false,
        menu_level_2: {
            id: '16-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-7', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-8', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-9', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-10', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-11', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-12', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '16-13', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '17', img: icon_17, path: "kvity-tovary-dlia-sadu-ta-gorodu", name: "Квіти, товари для саду та городу", isSelected: false,
        menu_level_2: {
            id: '17-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '18', img: icon_18, path: "tiutiunovi-vyroby-ta-aksesuary", name: "Тютюнові вироби та аксесуари", isSelected: false,
        menu_level_2: {
            id: '18-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '18-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '18-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '18-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '19', img: icon_19, path: "gigiiena", name: "Гігієна", isSelected: false,
        menu_level_2: {
            id: '19-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '19-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '19-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '19-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '19-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '20', img: icon_20, path: "dlia-domu", name: "Для дому", isSelected: false,
        menu_level_2: {
            id: '20-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '20-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '20-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '20-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '20-5', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '20-6', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '20-7', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '20-8', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '21', img: icon_21, path: "dytiachi-tovary", name: "Дитячі товари", isSelected: false,
        menu_level_2: {
            id: '21-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '21-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '21-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '21-4', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
    {
        id: '22', img: icon_22, path: "dlia-tvaryn", name: "Для тварин", isSelected: false,
        menu_level_2: {
            id: '22-1', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '22-2', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
            id: '22-3', path: "frukty-ovochi-solinnia", name: "Фрукти, овочі, соління", isSelected: false,
        }
    },
];

export default allProductCategories;