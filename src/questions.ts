type Variable = string;
type Substitution = (variant: number) => number;

export interface Question {
    vars: Record<Variable, Substitution>;
    number: number;
    question: string;
}

function mod(divisor: number): Substitution {
    return (variant: number) => (variant % divisor) || divisor;
}

export const questions = {
    "colombia": {
        1: [
            { "vars": {}, "number": 1, "question": "\\text{Дійсна та уявна частини комплексного числа.}" },
            { "vars": {}, "number": 2, "question": "\\text{Модуль та аргумент комплексного числа (у тому числі - нюанс щодо аргумента нуля).}" },
            { "vars": {}, "number": 3, "question": "\\text{Формула Муавра.}" },
            { "vars": {}, "number": 4, "question": "\\text{Формули зв'язку модуля та аргумента з дійсною та уявною частинами.}" },
            { "vars": {}, "number": 5, "question": "\\text{Тригонометрична форма комплексного числа.}" },
            { "vars": {}, "number": 6, "question": "\\text{Спряжене та його властивості.}" },
        ],
        2: [
            { "vars": {}, "number": 1, "question": "\\text{Бінарна операція.}" },
            { "vars": {}, "number": 2, "question": "\\text{Нейтральний елемент.}" },
            { "vars": {}, "number": 3, "question": "\\text{Правила дистрибутивності в означенні кільця й поля.}" },
            { "vars": {}, "number": 4, "question": "\\text{Абелева (комутативна) група.}" },
            { "vars": {}, "number": 5, "question": "\\text{Напівгрупа.}" },
            { "vars": {}, "number": 6, "question": "\\text{Кільце.}" },
            { "vars": {}, "number": 7, "question": "\\text{Характеристики векторного простору } V \\text{ над полем } F." },
        ],
        3: [
            { "vars": {}, "number": 1, "question": "\\text{Означення гіперболи.}" },
            { "vars": {}, "number": 2, "question": "\\text{Ексцентриситет КДП і властивості кожного з них (який > 1, який < 1, який = 1).}" },
            { "vars": {}, "number": 3, "question": "\\text{Фокальний радіус еліпса. (Означення + формула)}" },
            { "vars": {}, "number": 4, "question": "\\text{Канонічна система координат для параболи.}" },
        ],
        4: [
            { "vars": {}, "number": 1, "question": "\\text{Лінійна комбінація.}" },
            { "vars": {}, "number": 2, "question": "\\text{Твірна система векторів.}" },
            { "vars": {}, "number": 3, "question": "\\text{ЛНЗ та ЛЗ системи векторів.}" },
            { "vars": {}, "number": 4, "question": "\\text{Базис.}" },
            { "vars": {}, "number": 5, "question": "\\text{Підпростір}" },
            { "vars": {}, "number": 6, "question": "\\text{Розмірність.}" },
            { "vars": {}, "number": 7, "question": "\\text{Лінійна оболонка.}" },
            { "vars": {}, "number": 8, "question": "\\text{Ранг матриці.}" },
        ],
        5: [
            { "vars": {}, "number": 1, "question": "\\text{Обернений та нейтральний елементи } S_{n}." },
            { "vars": {}, "number": 2, "question": "\\text{Перестановка.}" },
            { "vars": {}, "number": 3, "question": "\\text{Симетрична група } S_{n}." },
            { "vars": {}, "number": 4, "question": "\\text{Інверсія.}" },
            { "vars": {}, "number": 5, "question": "\\text{Цикл.}" },
            { "vars": {}, "number": 6, "question": "\\text{Можлива кількість розвʼязків СЛР та наслідок про кількість розвʼязків у СЛР з більшою кількістю змінних, ніж рівнянь.}" },
            { "vars": {}, "number": 7, "question": "\\text{Наслідки про кількість розвʼязків однорідної СЛР.}" },
            { "vars": {}, "number": 8, "question": "\\text{Визначник (формула).}" },
            { "vars": {}, "number": 9, "question": "\\text{Невироджена матриця.}" },
            { "vars": {}, "number": 10, "question": "\\text{Зв’язок між визначником та кількістю розв’язків СЛР.}" },
        ],
    },
    1: [
        { "vars": {}, "number": 1, "question": "\\text{Дійсна та уявна частини комплексного числа.}" },
        { "vars": {}, "number": 2, "question": "\\text{Модуль та аргумент комплексного числа (у тому числі - нюанс щодо аргумента нуля).}" },
        { "vars": {}, "number": 3, "question": "\\text{Формула Муавра.}" },
        { "vars": {}, "number": 4, "question": "\\text{Формули зв'язку модуля та аргумента з дійсною та уявною частинами.}" },
        { "vars": {}, "number": 5, "question": "\\text{Тригонометрична форма комплексного числа.}" },
        { "vars": {}, "number": 6, "question": "\\text{Спряжене та його властивості.}" },
        { "vars": {}, "number": 7, "question": "\\text{Бінарна операція.}" },
        { "vars": {}, "number": 8, "question": "\\text{Нейтральний елемент.}" },
        { "vars": {}, "number": 9, "question": "\\text{Правила дистрибутивності в означенні кільця й поля.}" },
        { "vars": {}, "number": 10, "question": "\\text{Означення гіперболи.}" },
        { "vars": {}, "number": 11, "question": "\\text{Ексцентриситет КДП і властивості кожного з них (який > 1, який < 1, який = 1).}" },
        { "vars": {}, "number": 12, "question": "\\text{Фокальний радіус еліпса. (Означення + формула)}" },
        { "vars": {}, "number": 13, "question": "\\text{Канонічна система координат для параболи.}" },
        { "vars": {}, "number": 14, "question": "\\text{Абелева (комутативна) група.}" },
        { "vars": {}, "number": 15, "question": "\\text{Напівгрупа.}" },
        { "vars": {}, "number": 16, "question": "\\text{Кільце.}" },
        { "vars": {}, "number": 17, "question": "\\text{Можлива кількість розвʼязків СЛР та наслідок про кількість розвʼязків у СЛР з більшою кількістю змінних, ніж рівнянь.}" },
        { "vars": {}, "number": 18, "question": "\\text{Наслідки про кількість розвʼязків однорідної СЛР.}" },
        { "vars": {}, "number": 19, "question": "\\text{Характеристики векторного простору } V \\text{ над полем } F." },
        { "vars": {}, "number": 20, "question": "\\text{Лінійна комбінація.}" },
        { "vars": {}, "number": 21, "question": "\\text{Твірна система векторів.}" },
        { "vars": {}, "number": 22, "question": "\\text{ЛНЗ та ЛЗ системи векторів.}" },
        { "vars": {}, "number": 23, "question": "\\text{Базис.}" },
        { "vars": {}, "number": 24, "question": "\\text{Підпростір}" },
        { "vars": {}, "number": 25, "question": "\\text{Розмірність.}" },
        { "vars": {}, "number": 26, "question": "\\text{Лінійна оболонка.}" },
        { "vars": {}, "number": 27, "question": "\\text{Ранг матриці.}" },
        { "vars": {}, "number": 28, "question": "\\text{Обернений та нейтральний елементи } S_{n}." },
        { "vars": {}, "number": 29, "question": "\\text{Перестановка.}" },
        { "vars": {}, "number": 30, "question": "\\text{Симетрична група } S_{n}." },
        { "vars": {}, "number": 31, "question": "\\text{Інверсія.}" },
        { "vars": {}, "number": 32, "question": "\\text{Цикл.}" },
        { "vars": {}, "number": 33, "question": "\\text{Визначник (формула).}" },
        { "vars": {}, "number": 34, "question": "\\text{Невироджена матриця.}" },
        { "vars": {}, "number": 35, "question": "\\text{Зв’язок між визначником та кількістю розв’язків СЛР.}" },
    ],
    2: [
        { "vars": { "k": mod(5) }, "number": 1, "question": "\\text{Кільце, яке містить число } \\frac{1}{${k}} \\text{, але НЕ є полем.}" },
        { "vars": { "a": mod(10), "b": mod(11) }, "number": 2, "question": "\\text{Квадратне рівняння з дійсними коефіцієнтами, для якого } z = ${a} + ${b}i \\text{ є коренем.}" },
        { "vars": { "k": mod(8) }, "number": 3, "question": "\\text{Комплексне число } z \\text{, що задовольняє } z^{${k}} = \\bar{z}." },
        { "vars": {}, "number": 4, "question": "\\text{Несумісна СЛР, у якої рівнянь менше, ніж змінних, без пропорційних рівнянь.}" },
        { "vars": {}, "number": 5, "question": "\\text{Сумісна СЛР, у якої рівнянь більше, ніж змінних, без пропорційних рівнянь.}" },
        { "vars": { "k": mod(4)}, "number": 6, "question": "\\text{Моноїд, але НЕ група, містить нескінченну кількість елементів, але НЕ містить число } ${k}." },
        { "vars": {}, "number": 7, "question": "\\text{Кільце, яке НЕ є полем і має скінченну кількість елементів.}" },
        { "vars": {}, "number": 8, "question": "\\text{Множина векторів } V \\text{ та поле } F \\text{, такі що } V \\text{ НЕ є векторним простором над } F." },
        { "vars": {}, "number": 9, "question": "\\text{Різні нетривіальні лінійні комбінації однієї системи векторів, які дають однаковий результат.}" },
        { "vars": {}, "number": 10, "question": "\\text{Двох НЕпідпросторів, сума та перетин яких є підпросторами}." },
        { "vars": { "k": mod(3), "2k": (variant) => 2 * mod(3)(variant) }, "number": 11, "question": "\\text{Таких систем з } ${k} \\text{ векторів та } ${2k} \\text{ векторів, що їхні лінійні оболонки співпадають}" },
        { "vars": { "k": mod(7), "n": (variant) => 2 * mod(7)(variant) + 3, "c": (variant) => mod(7)(variant) + 1 }, "number": 12, "question": "\\text{Перестановки з групи } S_{${n}}, \\text{ яка складається з } ${c} \\text{ циклів, і жоден елемент не лишається на місці.}" },
        { "vars": { "k": mod(9), "d": (variant) => mod(9)(variant) * 39 }, "number": 13, "question": "\\text{НЕтрикутної матриці } 4 \\times 4, \\text{ визначник якої рівний } ${d}" },
    ],
    3: [
        { "vars": {}, "number": 1, "question": "\\text{Модуль добутку комплексних = добуток модулів, аргумент добутку = сума аргументів.}" },
        { "vars": {}, "number": 2, "question": "\\text{Рівняння } z^n = w \\text{ має рівно } n \\text{ комплексних коренів, якщо } w \\neq 0." },
        { "vars": {}, "number": 3, "question": "\\text{Метод Гаусса зведення СЛР до східчастої форми.}" },
        { "vars": {}, "number": 4, "question": "\\text{Розвʼязування СЛР, зведеної до східчастої форми (як розвʼязувати, коли скільки розвʼязків).}" },
        { "vars": {}, "number": 5, "question": "\\text{Властивості ЛЗ, ЛНЗ та твірної системи векторів.}" },
        { "vars": {}, "number": 6, "question": "\\text{Відношення відстані від точок гіперболи до фокусів та односторонньої з цими фокусами директриси.}" },
        { "vars": {}, "number": 7, "question": "\\text{Вивід рівняння параболи.}" },
        { "vars": {}, "number": 8, "question": "\\text{Лема про рівність лінійних оболонок.}" },
        { "vars": {}, "number": 9, "question": "W_1, W_2 \\text{ — підпростори } \\Rightarrow W_1 \\cap W_2, W_1 + W_2 \\text{ теж підпростори.}" },
        { "vars": {}, "number": 10, "question": "\\text{Транспозиція змінює парність перестановки.}" },
        { "vars": {}, "number": 11, "question": "\\text{Властивості визначників (1–3).}" },
    ],
    4: [
        { "vars": {}, "number": 1, "question": "\\text{Система } (v_1, v_2, \\cdots, v_n) \\text{ твірна } \\Rightarrow \\forall (n + 1) \\text{ вектор ЛЗ.}" },
        { "vars": {}, "number": 2, "question": "\\text{Вивід формули рівняння еліпсу (в обидва боки).}" },
        { "vars": {}, "number": 3, "question": "\\text{Вивід формули рівняння гіперболи (в обидва боки).}" },
        { "vars": {}, "number": 4, "question": "\\text{Три еквівалентні означення базису.}" },
        { "vars": {}, "number": 5, "question": "\\text{Формула Грассмана.}" },
        { "vars": {}, "number": 6, "question": "\\text{Ранг рядків = ранг стовпців.}" },
        { "vars": {}, "number": 7, "question": "\\text{Властивості визначників (4–6).}" },
        { "vars": {}, "number": 8, "question": "\\text{Розклад визначника за рядком або стовпчиком.}" },
    ]
};

