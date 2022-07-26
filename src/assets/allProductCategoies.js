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
        menu_level_2: [
            {
                id: '1-1', path: "gryby-svizhi", name: "Гриби свіжі", isSelected: false, menu_level_3: [
                    { id: '1-1-1', path: "glyvy-svizhi", name: "Гливи свіжі", isSelected: false },
                    { id: '1-1-2', path: "pecherytsi-svizhi", name: "Печериці свіжі", isSelected: false },
                    { id: '1-1-3', path: "ekzotychni-gryby-svizhi", name: "Екзотичні гриби свіжі", isSelected: false },
                ]
            },
            {
                id: '1-2', path: "zelen", name: "Зелень", isSelected: false, menu_level_3: [
                    { id: '1-2-1', path: "bazylik", name: "Базилік", isSelected: false },
                    { id: '1-2-2', path: "zelena-tsybulia", name: "Зелена цибуля", isSelected: false },
                    { id: '1-2-3', path: "zelen-miks", name: "Зелень мікс", isSelected: false },
                    { id: '1-2-4', path: "kinza", name: "Кінза", isSelected: false },
                    { id: '1-2-5', path: "krip", name: "Кріп", isSelected: false },
                    { id: '1-2-6', path: "m-iata", name: "М'ята", isSelected: false },
                    { id: '1-2-7', path: "petrushka", name: "Петрушка", isSelected: false },
                    { id: '1-2-8', path: "priani-travy", name: "Пряні трави", isSelected: false },
                    { id: '1-2-9', path: "selera", name: "Селера", isSelected: false },
                    { id: '1-2-10', path: "shpynat", name: "Шпинат", isSelected: false },
                    { id: '1-2-11', path: "shchavel", name: "Щавель", isSelected: false },
                ]
            },
            {
                id: '1-3', path: "salat", name: "Салат", isSelected: false, menu_level_3: [
                    { id: '1-3-1', path: "rostky", name: "Ростки", isSelected: false },
                    { id: '1-3-2', path: "salat-svizhyi", name: "Салат свіжий", isSelected: false },
                    { id: '1-3-3', path: "salaty-gotovi-do-vzhyvannia", name: "Салати, готові до вживання", isSelected: false },
                ]
            },
            {
                id: '1-4', path: "ovochi", name: "Овочі", isSelected: false, menu_level_3: [
                    { id: '1-4-1', path: "baklazhan", name: "Баклажан", isSelected: false },
                    { id: '1-4-2', path: "garbuz", name: "Гарбуз", isSelected: false },
                    { id: '1-4-3', path: "kabachok", name: "Кабачок", isSelected: false },
                    { id: '1-4-4', path: "kapusta", name: "Капуста", isSelected: false },
                    { id: '1-4-5', path: "kvasolia-sparzheva", name: "Квасоля спаржева", isSelected: false },
                    { id: '1-4-6', path: "koreneplody", name: "Коренеплоди", isSelected: false },
                    { id: '1-4-7', path: "kukurudza-svizha", name: "Кукурудза свіжа", isSelected: false },
                    { id: '1-4-8', path: "ogirky", name: "Огірки", isSelected: false },
                    { id: '1-4-9', path: "perets", name: "Перець", isSelected: false },
                    { id: '1-4-10', path: "pomidory", name: "Помідори", isSelected: false },
                    { id: '1-4-11', path: "sparzha", name: "Спаржа", isSelected: false },
                    { id: '1-4-12', path: "tsybulia-chasnyk", name: "Цибуля, часник", isSelected: false },
                ]
            },
            {
                id: '1-5', path: "frukty", name: "Фрукти", isSelected: false, menu_level_3: [
                    { id: '1-5-1', path: "banan", name: "Банан", isSelected: false },
                    { id: '1-5-2', path: "vynograd", name: "Виноград", isSelected: false },
                    { id: '1-5-3', path: "grusha", name: "Груша", isSelected: false },
                    { id: '1-5-4', path: "kavun-dynia", name: "Кавун, диня", isSelected: false },
                    { id: '1-5-5', path: "kistochkovi", name: "Кісточкові", isSelected: false },
                    { id: '1-5-6', path: "tropichni-frukty", name: "Тропічні фрукти", isSelected: false },
                    { id: '1-5-7', path: "tsytrusovi", name: "Цитрусові", isSelected: false },
                    { id: '1-5-8', path: "yabluka", name: "Яблука", isSelected: false },
                    { id: '1-5-9', path: "yagody", name: "Ягоди", isSelected: false },
                    { id: '1-5-10', path: "fruktovi-nabory", name: "Фруктові набори", isSelected: false },
                ]
            },
            { id: '1-6', path: "fruktovi-delikatesy", name: "Фруктові делікатеси", isSelected: false },
            {
                id: '1-7', path: "solinnia-marynovani-stravy", name: "Соління, мариновані страви", isSelected: false, menu_level_3: [
                    { id: '1-7-1', path: "ovochevi-zakusky-khumusy", name: "Овочеві закуски, хумуси", isSelected: false },
                    { id: '1-7-2', path: "ovochevi-ta-fruktovi-solinnia", name: "Овочеві та фруктові соління", isSelected: false },
                ]
            },
            {
                id: '1-8', path: "susheni-frukty-gryby-gorikhy", name: "Сушені фрукти, гриби, горіхи", isSelected: false, menu_level_3: [
                    { id: '1-8-1', path: "gryby-susheni", name: "Гриби сушені", isSelected: false },
                    { id: '1-8-2', path: "gorikhy-i-nasinnia", name: "Горіхи і насіння", isSelected: false },
                    { id: '1-8-3', path: "sukhofrukty-i-tsukaty", name: "Сухофрукти і цукати", isSelected: false },
                    { id: '1-8-4', path: "sumish-gorikhiv-i-sukhofruktiv", name: "Суміш горіхів і сухофруктів", isSelected: false },
                ]
            },
        ]
    },
    {
        id: '2', img: icon_2, path: "m-iaso-ryba-ptytsia", name: "М'ясо, риба, птиця", isSelected: false,
        menu_level_2: [
            {
                id: '2-1', path: "svizhe-m-iaso", name: "Свіже м'ясо", isSelected: false, menu_level_3: [
                    { id: '2-1-1', path: "baranyna", name: "Баранина", isSelected: false },
                    { id: '2-1-2', path: "kroliatyna", name: "Кролятина", isSelected: false },
                    { id: '2-1-3', path: "teliatyna", name: "Телятина", isSelected: false },
                    { id: '2-1-4', path: "yalovychyna", name: "Яловичина", isSelected: false },
                    { id: '2-1-5', path: "svynyna", name: "Свинина", isSelected: false },
                    { id: '2-1-6', path: "salo", name: "Сало", isSelected: false },
                    { id: '2-1-7', path: "kachka", name: "Качка", isSelected: false },
                    { id: '2-1-8', path: "perepilka", name: "Перепілка", isSelected: false },
                    { id: '2-1-9', path: "kuriatyna", name: "Курятина", isSelected: false },
                    { id: '2-1-10', path: "indychatyna", name: "Індичатина", isSelected: false },
                    { id: '2-1-11', path: "subprodukty", name: "Субпродукти", isSelected: false },
                    { id: '2-1-12', path: "okholodzheni-napivfabrykaty", name: "Охолоджені напівфабрикати", isSelected: false },
                    { id: '2-1-13', path: "farsh", name: "Фарш", isSelected: false },
                ]
            },
            {
                id: '2-2', path: "prygotovlena-ryba-ta-moreprodukty", name: "Приготовлена риба та морепродукти", isSelected: false, menu_level_3: [
                    { id: '2-2-1', path: "ikra", name: "Ікра", isSelected: false },
                    { id: '2-2-2', path: "pasty-masla-buter-zakusky-z-ikry-moreproduktiv", name: "Пасти, масла, бутер. закуски з ікри/морепродуктів", isSelected: false },
                    { id: '2-2-3', path: "salaty-ta-preservy-rybni", name: "Салати та пресерви рибні", isSelected: false },
                    { id: '2-2-4', path: "produktsiia-z-surimi-krabovi-palychky", name: "Продукція з сурімі, крабові палички", isSelected: false },
                    { id: '2-2-5', path: "ryba-v-ialena", name: "Риба в'ялена", isSelected: false },
                    { id: '2-2-6', path: "ryba-kopchena-i-moreprodukty", name: "Риба копчена і морепродукти", isSelected: false },
                    { id: '2-2-7', path: "ryba-slabosolena", name: "Риба слабосолена", isSelected: false },
                ]
            },
            { id: '2-3', path: "zhyva-ta-okholodzhena-ryba-ta-moreprodukty", name: "Жива та охолоджена риба та морепродукти", isSelected: false },
            {
                id: '2-4', path: "zamorozhena-ryba-moreprodukty-i-moliusky", name: "Заморожена риба, морепродукти і молюски", isSelected: false, menu_level_3: [
                    { id: '2-4-1', path: "zamorozhena-ryba", name: "Заморожена риба", isSelected: false },
                    { id: '2-4-2', path: "zamorozheni-moreprodukty-i-napivfabrykaty", name: "Заморожені морепродукти і напівфабрикати", isSelected: false },
                    { id: '2-4-3', path: "zamorozheni-ravlyky-ta-zhaby", name: "Заморожені равлики та жаби", isSelected: false },
                ]
            },
        ]
    },
    {
        id: '3', img: icon_3, path: "m-iaso-kovbasni-vyroby", name: "М'ясо-ковбасні вироби", isSelected: false,
        menu_level_2: [
            { id: '3-1', path: "buterbrodni-namazky", name: "Бутербродні намазки", isSelected: false },
            {
                id: '3-2', path: "vareni-kovbasni-vyroby", name: "Варені ковбасні вироби", isSelected: false, menu_level_3: [
                    { id: '3-2-1', path: "kovbasa-varena", name: "Ковбаса варена", isSelected: false },
                    { id: '3-2-2', path: "sosysky-vareni", name: "Сосиски варені", isSelected: false },
                    { id: '3-2-3', path: "sardelky-vareni", name: "Сардельки варені", isSelected: false },
                    { id: '3-2-4', path: "shynka-varena", name: "Шинка варена", isSelected: false },
                ]
            },
            {
                id: '3-3', path: "kopcheni-kovbasni-vyroby", name: "Копчені ковбасні вироби", isSelected: false, menu_level_3: [
                    { id: '3-3-1', path: "kovbasa-zapechena", name: "Ковбаса запечена", isSelected: false },
                    { id: '3-3-2', path: "kovbasa-vareno-kopchena", name: "Ковбаса варено-копчена", isSelected: false },
                    { id: '3-3-3', path: "kovbasa-napivkopchena", name: "Ковбаса напівкопчена", isSelected: false },
                    { id: '3-3-4', path: "kovbasa-syrov-ialena", name: "Ковбаса сиров'ялена", isSelected: false },
                    { id: '3-3-5', path: "kovbasa-syrokopchena", name: "Ковбаса сирокопчена", isSelected: false },
                    { id: '3-3-6', path: "kovbasky-vareno-kopcheni", name: "Ковбаски варено-копчені", isSelected: false },
                    { id: '3-3-7', path: "kovbasky-napivkopcheni", name: "Ковбаски напівкопчені", isSelected: false },
                    { id: '3-3-8', path: "kovbasky-syrov-ialeni", name: "Ковбаски сиров'ялені", isSelected: false },
                    { id: '3-3-9', path: "kovbasky-syrokopcheni", name: "Ковбаски сирокопчені", isSelected: false },
                ]
            },
            {
                id: '3-4', path: "tsilnom-iasni-vyroby", name: "Цільном'ясні вироби", isSelected: false, menu_level_3: [
                    { id: '3-4-1', path: "balyk", name: "Балик", isSelected: false },
                    { id: '3-4-2', path: "basturma", name: "Бастурма", isSelected: false },
                    { id: '3-4-3', path: "buzhenyna", name: "Буженина", isSelected: false },
                    { id: '3-4-4', path: "grudynka-kopchena", name: "Грудинка копчена", isSelected: false },
                    { id: '3-4-5', path: "kuriachi-kopchenosti", name: "Курячі копченості", isSelected: false },
                    { id: '3-4-6', path: "m-iaso-dychyny", name: "М'ясо дичини", isSelected: false },
                    { id: '3-4-7', path: "okist", name: "Окіст", isSelected: false },
                    { id: '3-4-8', path: "rulet-kopchenyi", name: "Рулет копчений", isSelected: false },
                    { id: '3-4-9', path: "rulka", name: "Рулька", isSelected: false },
                    { id: '3-4-10', path: "shynka-delikatesna", name: "Шинка делікатесна", isSelected: false },
                    { id: '3-4-11', path: "shyika-kopchena", name: "Шийка копчена", isSelected: false },
                ]
            },
            {
                id: '3-5', path: "gotovi-vyroby-z-m-iasnykh-subproduktiv", name: "Готові вироби з м'ясних субпродуктів", isSelected: false, menu_level_3: [
                    { id: '3-5-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '3-5-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '3-5-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '3-5-4', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '3-6', path: "m-iaso-kovbasna-narizka", name: "М'ясо-ковбасна нарізка", isSelected: false },
        ]
    },
    {
        id: '4', img: icon_4, path: "syry", name: "Сири", isSelected: false,
        menu_level_2: [
            { id: '4-1', path: "fsyry-m-iaki", name: "Сири м'які", isSelected: false },
            { id: '4-2', path: "syry-plavleni", name: "Сири плавлені", isSelected: false },
            { id: '4-3', path: "syry-rozsilni", name: "Сири розсільні", isSelected: false },
            { id: '4-4', path: "syry-napivtverdi", name: "Сири напівтверді", isSelected: false },
            { id: '4-5', path: "syry-tverdi", name: "Сири тверді", isSelected: false },
        ]
    },
    {
        id: '5', img: icon_5, path: "khlib-ta-khlibobulochni-vyroby", name: "Хліб та хлібобулочні вироби", isSelected: false,
        menu_level_2: [
            { id: '5-1', path: "bulochky-zdobni-vyroby", name: "Булочки, здобні вироби", isSelected: false },
            { id: '5-2', path: "kruasany-sloiky", name: "Круасани, слойки", isSelected: false },
            { id: '5-3', path: "sushka-i-sukhari", name: "Сушка і сухарі", isSelected: false },
            {
                id: '5-4', path: "khlib", name: "Хліб", isSelected: false, menu_level_3: [
                    { id: '5-4-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '5-4-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '5-4-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '5-4-4', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '5-5', path: "lavash-korzhi-ta-zagotovky", name: "Лаваш, коржі та заготовки", isSelected: false },
            { id: '5-6', path: "shvydke-kharchuvannia", name: "Швидке харчування", isSelected: false },
        ]
    },
    {
        id: '6', img: icon_6, path: "silpo-resto", name: "«Сільпо» Resto", isSelected: false,
        menu_level_2: [
            { id: '6-1', path: "sushi", name: "Суші", isSelected: false },
            { id: '6-2', path: "pitsa", name: "Піца", isSelected: false },
            { id: '6-3', path: "salaty", name: "Салати", isSelected: false },
            { id: '6-4', path: "sety", name: "Сети", isSelected: false },
        ]
    },
    {
        id: '7', img: icon_7, path: "kulinariia", name: "Кулінарія", isSelected: false,
        menu_level_2: [
            { id: '7-1', path: "gryl", name: "Гриль", isSelected: false },
            { id: '7-2', path: "salaty", name: "Салати", isSelected: false },
            { id: '7-3', path: "pershi-stravy", name: "Перші страви", isSelected: false },
            { id: '7-4', path: "garniry", name: "Гарніри", isSelected: false },
            { id: '7-5', path: "m-iasni-stravy", name: "М'ясні страви", isSelected: false },
            { id: '7-6', path: "rybni-stravy", name: "Рибні страви", isSelected: false },
            { id: '7-7', path: "marynovani-stravy", name: "Мариновані страви", isSelected: false },
            { id: '7-8', path: "pitsa", name: "Піца", isSelected: false },
            { id: '7-9', path: "mlyntsi", name: "Млинці", isSelected: false },
            { id: '7-10', path: "varenyky-pelmeni", name: "Вареники, пельмені", isSelected: false },
            { id: '7-11', path: "buterbrody-sendvichi-donery", name: "Бутерброди, сендвічі, донери", isSelected: false },
            { id: '7-12', path: "deserty", name: "Десерти", isSelected: false },
            { id: '7-13', path: "inshe-sous", name: "Інше (соус)", isSelected: false },
        ]
    },
    {
        id: '8', img: icon_8, path: "molochni-produkty-ta-iaitsia", name: "Молочні продукти та яйця", isSelected: false,
        menu_level_2: [
            {
                id: '8-1', path: "yogurty-deserty", name: "Йогурти, десерти", isSelected: false, menu_level_3: [
                    { id: '8-1-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-1-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-1-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-1-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-1-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-1-6', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-1-7', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '8-2', path: "kyslomolochna-produktsiia", name: "Кисломолочна продукція", isSelected: false, menu_level_3: [
                    { id: '8-2-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-2-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-2-3', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '8-3', path: "moloko-vershky", name: "Молоко, вершки", isSelected: false, menu_level_3: [
                    { id: '8-3-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-3-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-3-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-3-4', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '8-4', path: "syr-kyslomolochnyi", name: "Сир кисломолочний", isSelected: false, menu_level_3: [
                    { id: '8-4-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-4-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-4-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-4-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '8-4-5', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '8-5', path: "bezlaktozna-produktsiia", name: "Безлактозна продукція", isSelected: false },
            { id: '8-6', path: "bezmolochna-produktsiia", name: "Безмолочна продукція", isSelected: false },
            { id: '8-7', path: "maslo-margaryn-spred", name: "Масло, маргарин, спред", isSelected: false },
            { id: '8-8', path: "yaitsia", name: "Яйця", isSelected: false },
        ]
    },
    {
        id: '9', img: icon_9, path: "zamorozhena-produktsiia", name: "Заморожена продукція", isSelected: false,
        menu_level_2: [
            { id: '9-1', path: "morozyvo", name: "Морозиво", isSelected: false },
            { id: '9-2', path: "lid", name: "Лід", isSelected: false },
            { id: '9-3', path: "pitsa-zamorozhena", name: "Піца заморожена", isSelected: false },
            { id: '9-4', path: "mlyntsi-zamorozheni", name: "Млинці заморожені", isSelected: false },
            { id: '9-5', path: "pelmeni-varenyky-ta-inshi-vidvarni-vyroby-zamorozheni", name: "Пельмені, вареники та інші відварні вироби заморожені", isSelected: false },
            { id: '9-6', path: "gotovi-stravy-zamorozheni", name: "Готові страви заморожені", isSelected: false },
            { id: '9-7', path: "zamorozheni-ovochi-ta-frukty", name: "Заморожені овочі та фрукти", isSelected: false },
            { id: '9-8', path: "tisto-zamorozhene", name: "Тісто заморожене", isSelected: false },
            { id: '9-9', path: "vyroby-z-tista-napivfabrykaty-dlia-vypichky-zamorozheni", name: "Вироби з тіста, напівфабрикати для випічки заморожені", isSelected: false },
            { id: '9-10', path: "m-iasni-ta-ovochevi-napivfabrykaty-zamorozheni", name: "М'ясні та овочеві напівфабрикати заморожені", isSelected: false },
            { id: '9-11', path: "napivfabrykaty-okholodzheni", name: "Напівфабрикати охолоджені", isSelected: false },
            { id: '9-12', path: "farsh-dlia-tvaryn", name: "Фарш для тварин", isSelected: false },
        ]
    },
    {
        id: '10', img: icon_10, path: "bakaliia", name: "Бакалія", isSelected: false,
        menu_level_2: [
            {
                id: '10-1', path: "oliia", name: "Олія", isSelected: false, menu_level_3: [
                    { id: '10-1-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-1-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-1-3', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '10-2', path: "makarony", name: "Макарони", isSelected: false },
            {
                id: '10-3', path: "krupy", name: "Крупи", isSelected: false, menu_level_3: [
                    { id: '10-3-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-6', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-7', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-8', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-9', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-10', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-11', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-12', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-13', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-14', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-15', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-16', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-17', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-3-18', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '10-4', path: "boroshno", name: "Борошно", isSelected: false },
            { id: '10-5', path: "tsukor-ta-tsukrozaminnyky", name: "Цукор та цукрозамінники", isSelected: false },
            {
                id: '10-6', path: "vse-dlia-vypichky-ta-desertiv", name: "Все для випічки та десертів", isSelected: false, menu_level_3: [
                    { id: '10-6-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-6', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-7', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-8', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-9', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-10', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-11', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-12', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-13', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-14', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-6-15', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '10-7', path: "yizha-shvydkogo-prygotuvannia", name: "Їжа швидкого приготуваня", isSelected: false },
            {
                id: '10-8', path: "gotovi-snidanky", name: "Готові сніданки", isSelected: false, menu_level_3: [
                    { id: '10-8-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-8-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-8-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-8-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-8-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '10-8-6', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '10-9', path: "aziatska-kukhnia-sushi", name: "Азіатська кухня, суші", isSelected: false },
            { id: '10-10', path: "soievi-produkty", name: "Соєві продукти", isSelected: false },
            { id: '10-11', path: "diietychne-kharchuvannia-bady", name: "Дієтичне харчування, БАДи", isSelected: false },
        ]
    },
    {
        id: '11', img: icon_11, path: "konservy-sousy-prypravy", name: "Консерви, соуси, приправи", isSelected: false,
        menu_level_2: [
            { id: '11-1', path: "varennia-ta-dzhemy", name: "Варення та джеми", isSelected: false },
            { id: '11-2', path: "fruktova-konservatsiia", name: "Фруктова консервація", isSelected: false },
            { id: '11-3', path: "grybna-konservatsiia", name: "Грибна консервація", isSelected: false },
            {
                id: '11-4', path: "ovocheva-konservatsiia", name: "Овочева консервація", isSelected: false, menu_level_3: [
                    { id: '11-4-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-4-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-4-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-4-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-4-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-4-6', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-4-7', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-4-8', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-4-9', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '11-5', path: "kukurudza-ta-goroshok", name: "Кукурудза та горошок", isSelected: false },
            {
                id: '11-6', path: "olyvky", name: "Оливки", isSelected: false, menu_level_3: [
                    { id: '11-6-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-6-2', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '11-7', path: "m-iasna-konservatsiia", name: "М'ясна консервація", isSelected: false, menu_level_3: [
                    { id: '11-7-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-7-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-7-3', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '11-8', path: "rybna-konservatsiia", name: "Рибна консервація", isSelected: false, menu_level_3: [
                    { id: '11-8-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-8-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-8-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-8-4', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '11-9', path: "pasty-shokoladno-gorikhovi", name: "Пасти шоколадно-горіхові", isSelected: false },
            { id: '11-10', path: "med", name: "Мед", isSelected: false },
            { id: '11-11', path: "sil", name: "Сіль", isSelected: false },
            {
                id: '11-12', path: "otset", name: "Оцет", isSelected: false, menu_level_3: [
                    { id: '11-12-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-12-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-12-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-12-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-12-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-12-6', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-12-7', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '11-13', path: "maionez", name: "Майонез", isSelected: false },
            {
                id: '11-14', path: "ketchup-sous", name: "Кетчуп, соус", isSelected: false, menu_level_3: [
                    { id: '11-14-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-14-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-14-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-14-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-14-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-14-6', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-14-7', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '11-15', path: "khrin-girchytsia", name: "Хрін, гірчиця", isSelected: false, menu_level_3: [
                    { id: '11-15-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-15-2', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '11-16', path: "paniruvalni-sukhari", name: "Панірувальні сухарі", isSelected: false },
            {
                id: '11-17', path: "prypravy-ta-spetsii", name: "Приправи та спеції", isSelected: false, menu_level_3: [
                    { id: '11-17-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-6', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-7', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-8', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-9', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-10', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-11', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-12', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-13', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-14', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-15', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-16', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-17', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-18', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-19', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-20', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-21', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-22', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-23', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-24', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-25', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-26', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-27', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-28', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-29', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-30', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-31', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '11-17-32', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
        ]
    },
    {
        id: '12', img: icon_12, path: "solodoshchi", name: "Солодощі", isSelected: false,
        menu_level_2: [
            { id: '12-1', path: "torty-tistechka", name: "Торти, тістечка", isSelected: false },
            { id: '12-2', path: "drazhe", name: "Драже", isSelected: false },
            { id: '12-3', path: "zhuiky-ta-lodianyky", name: "Жуйки та льодяники", isSelected: false },
            { id: '12-4', path: "zefir-marmelad-pastyla", name: "Зефір, мармелад, пастила", isSelected: false },
            {
                id: '12-5', path: "tsukerky", name: "Цукерки", isSelected: false, menu_level_3: [
                    { id: '12-5-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '12-5-2', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '12-6', path: "skhidni-solodoshchi", name: "Східні солодощі", isSelected: false, menu_level_3: [
                    { id: '12-6-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '12-6-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '12-6-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '12-6-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '12-6-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '12-6-6', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '12-7', path: "shokolad", name: "Шоколад", isSelected: false, menu_level_3: [
                    { id: '12-7-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '12-7-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '12-7-3', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '12-8', path: "shokoladni-vyroby-ruchnoi-roboty", name: "Шоколадні вироби ручної роботи", isSelected: false },
            { id: '12-9', path: "vafli", name: "Вафлі", isSelected: false },
            { id: '12-10', path: "pechyvo-prianyky", name: "Печиво, пряники", isSelected: false },
            { id: '12-11', path: "keksy-ta-biskvity", name: "Кекси та бісквіти", isSelected: false },
        ]
    },
    {
        id: '13', img: icon_13, path: "sneky", name: "Снеки", isSelected: false,
        menu_level_2: [
            { id: '13-1', path: "gorikhy-zerniata", name: "Горіхи, зернята", isSelected: false },
            { id: '13-2', path: "sukharyky", name: "Сухарики", isSelected: false },
            { id: '13-3', path: "chypsy", name: "Чіпси", isSelected: false },
            { id: '13-4', path: "m-iasni-ta-rybni-sneky", name: "М'ясні та рибні снеки", isSelected: false },
            { id: '13-5', path: "kukurudza-i-popkorn", name: "Кукурудза і попкорн", isSelected: false },
            { id: '13-6', path: "kukurudziani-palychky", name: "Кукурудзяні палички", isSelected: false },
            { id: '13-7', path: "solomka-solona", name: "Соломка солона", isSelected: false },
        ]
    },
    {
        id: '14', img: icon_14, path: "kava-chai", name: "Кава, чай", isSelected: false,
        menu_level_2: [
            { id: '14-1', path: "kava-melena", name: "Кава мелена", isSelected: false },
            { id: '14-2', path: "kava-v-zernakh", name: "Кава в зернах", isSelected: false },
            { id: '14-3', path: "kava-rozchynna", name: "Кава розчинна", isSelected: false },
            { id: '14-4', path: "kava-vlasnogo-obsmazhennia", name: "Кава власного обсмаження", isSelected: false },
            { id: '14-5', path: "kavovyi-napii", name: "Кавовий напій", isSelected: false },
            { id: '14-6', path: "kakao-gariachyi-shokolad", name: "Какао, гарячий шоколад", isSelected: false },
            { id: '14-7', path: "tsykorii", name: "Цикорій", isSelected: false },
            { id: '14-8', path: "chai-zelenyi", name: "Чай зелений", isSelected: false },
            { id: '14-9', path: "chai-chornyi", name: "Чай чорний", isSelected: false },
            { id: '14-10', path: "chai-trav-ianyi", name: "Чай трав'яний", isSelected: false },
            { id: '14-11', path: "chai-fruktovo-iagidnyi", name: "Чай фруктово-ягідний", isSelected: false },
            { id: '14-12', path: "chai-vagovyi", name: "Чай ваговий", isSelected: false },
            { id: '14-13', path: "chainyi-napii", name: "Чайний напій", isSelected: false },
        ]
    },
    {
        id: '15', img: icon_15, path: "napoi", name: "Напої", isSelected: false,
        menu_level_2: [
            { id: '15-1', path: "mineralna-i-pytna-voda", name: "Мінеральна і питна вода", isSelected: false },
            { id: '15-2', path: "morsy", name: "Морси", isSelected: false },
            { id: '15-3', path: "nektary", name: "Нектари", isSelected: false },
            { id: '15-4', path: "soky", name: "Соки", isSelected: false },
            { id: '15-5', path: "sokovmisni-napoi", name: "Соковмісні напої", isSelected: false },
            { id: '15-6', path: "kompoty", name: "Компоти", isSelected: false },
            { id: '15-7', path: "kvas", name: "Квас", isSelected: false },
            { id: '15-8', path: "solodka-voda", name: "Солодка вода", isSelected: false },
            { id: '15-9', path: "dytiache-shampanske", name: "Дитяче шампанське", isSelected: false },
            { id: '15-10', path: "kholodni-chai-ta-kava", name: "Холодні чаї та кава", isSelected: false },
            { id: '15-11', path: "energetychni-napoi", name: "Енергетичні напої", isSelected: false },
            { id: '15-12', path: "bezalkogolne-vyno", name: "Безалкогольне вино", isSelected: false },
            { id: '15-13', path: "bezalkogolne-pyvo", name: "Безалкогольне пиво", isSelected: false },
        ]
    },
    {
        id: '16', img: icon_16, path: "alkohol", name: "Алкоголь", isSelected: false,
        menu_level_2: [
            { id: '16-1', path: "brendi-koniak", name: "Бренді, коньяк", isSelected: false },
            { id: '16-2', path: "viski", name: "Віскі", isSelected: false },
            { id: '16-3', path: "gorilka", name: "Горілка", isSelected: false },
            { id: '16-4', path: "dzhyn", name: "Джин", isSelected: false },
            { id: '16-5', path: "liker", name: "Лікер", isSelected: false },
            { id: '16-6', path: "nastoianky-ta-balzamy", name: "Настоянки та бальзами", isSelected: false },
            { id: '16-7', path: "rom", name: "Ром", isSelected: false },
            { id: '16-8', path: "tekila", name: "Текіла", isSelected: false },
            { id: '16-9', path: "vermut-aperytyv", name: "Вермут, аперитив", isSelected: false },
            { id: '16-10', path: "vyno", name: "Вино", isSelected: false },
            { id: '16-11', path: "vyna-igrysti", name: "Вина ігристі", isSelected: false },
            {
                id: '16-12', path: "pyvo", name: "Пиво", isSelected: false, menu_level_3: [
                    { id: '16-12-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '16-12-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '16-12-3', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '16-13', path: "slaboalkogolni-napoi", name: "Слабоалкогольні напої", isSelected: false, menu_level_3: [
                    { id: '16-13-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '16-13-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '16-13-3', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
        ]
    },
    {
        id: '17', img: icon_17, path: "kvity-tovary-dlia-sadu-ta-gorodu", name: "Квіти, товари для саду та городу", isSelected: false,
        menu_level_2: [
            { id: '17-1', path: "grunty-dobryva", name: "Ґрунти, добрива", isSelected: false },
        ]
    },
    {
        id: '18', img: icon_18, path: "tiutiunovi-vyroby-ta-aksesuary", name: "Тютюнові вироби та аксесуари", isSelected: false,
        menu_level_2: [
            { id: '18-1', path: "tiutiunovi-aksesuary", name: "Тютюнові аксесуари", isSelected: false },
            { id: '18-2', path: "tsygarky", name: "Цигарки", isSelected: false },
            { id: '18-3', path: "sygary", name: "Сигари", isSelected: false },
            { id: '18-4', path: "tiutiun", name: "Тютюн", isSelected: false },
        ]
    },
    {
        id: '19', img: icon_19, path: "gigiiena", name: "Гігієна", isSelected: false,
        menu_level_2: [
            {
                id: '19-1', path: "dogliad", name: "Догляд", isSelected: false, menu_level_3: [
                    { id: '19-1-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-1-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-1-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-1-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-1-5', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '19-2', path: "dogliad-za-volossiam", name: "Догляд за волоссям", isSelected: false, menu_level_3: [
                    { id: '19-2-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-2-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-2-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-2-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-2-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-2-6', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '19-3', path: "dlia-golinnia-i-depiliatsii", name: "Для гоління й депіляції", isSelected: false, menu_level_3: [
                    { id: '19-3-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-3-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-3-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-3-4', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '19-4', path: "osobysta-gigiiena", name: "Особиста гігієна", isSelected: false, menu_level_3: [
                    { id: '19-4-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-4-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-4-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-4-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '19-4-5', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '19-5', path: "kosmetyka-i-parfumeriia", name: "Косметика і парфумерія", isSelected: false, menu_level_3: [
                    { id: '19-5-1', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
        ]
    },
    {
        id: '20', img: icon_20, path: "dlia-domu", name: "Для дому", isSelected: false,
        menu_level_2: [
            {
                id: '20-1', path: "pobutova-khimiia", name: "Побутова хімія", isSelected: false, menu_level_3: [
                    { id: '20-1-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-1-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-1-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-1-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-1-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-1-6', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '20-2', path: "paperovi-vyroby", name: "Паперові вироби", isSelected: false, menu_level_3: [
                    { id: '20-2-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-2-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-2-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-2-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-2-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-2-6', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '20-3', path: "gospodarchi-tovary", name: "Господарчі товари", isSelected: false, menu_level_3: [
                    { id: '20-3-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-3-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-3-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-3-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-3-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-3-6', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-3-7', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-3-8', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-3-9', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-3-10', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-3-11', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-3-12', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '20-4', path: "odnorazovyi-posud", name: "Одноразовий посуд", isSelected: false, menu_level_3: [
                    { id: '20-4-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-4-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-4-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-4-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-4-5', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '20-5', path: "kukhonne-pryladdia", name: "Кухонне приладдя", isSelected: false, menu_level_3: [
                    { id: '20-5-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-5-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-5-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-5-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-5-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-5-6', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-5-7', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '20-6', path: "inter-ier", name: "Інтер'єр", isSelected: false, menu_level_3: [
                    { id: '20-6-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-6-2', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '20-7', path: "odiag-ta-aksesuary", name: "Одяг та аксесуари", isSelected: false, menu_level_3: [
                    { id: '20-7-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-7-2', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '20-8', path: "khobi-ta-vidpochynok", name: "Хобі та відпочинок", isSelected: false, menu_level_3: [
                    { id: '20-8-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-8-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-8-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-8-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '20-8-5', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
        ]
    },
    {
        id: '21', img: icon_21, path: "dytiachi-tovary", name: "Дитячі товари", isSelected: false,
        menu_level_2: [
            {
                id: '21-1', path: "dytiache-kharchuvannia", name: "Дитяче харчування", isSelected: false, menu_level_3: [
                    { id: '21-1-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '21-1-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '21-1-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '21-1-4', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '21-1-5', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '21-1-6', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '21-1-7', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            {
                id: '21-2', path: "dogliad-ta-gigiiena", name: "Догляд та гігієна", isSelected: false, menu_level_3: [
                    { id: '21-2-1', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '21-2-2', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '21-2-3', path: "zelen", name: "Зелень", isSelected: false },
                    { id: '21-2-4', path: "zelen", name: "Зелень", isSelected: false },
                ]
            },
            { id: '21-3', path: "igrashky-ta-knygy", name: "Іграшки та книги", isSelected: false },
            { id: '21-4', path: "tovary-dlia-mam", name: "Товари для мам", isSelected: false },
        ]
    },
    {
        id: '22', img: icon_22, path: "dlia-tvaryn", name: "Для тварин", isSelected: false,
        menu_level_2: [
            { id: '22-1', path: "aksesuary-ta-igrashky", name: "Аксесуари та іграшки", isSelected: false },
            { id: '22-2', path: "gigiienichni-napovniuvachi-dlia-tualetiv", name: "Гігієнічні наповнювачі для туалетів", isSelected: false },
            { id: '22-3', path: "kharchuvannia", name: "Харчування", isSelected: false },
        ]
    },
];

export default allProductCategories;


