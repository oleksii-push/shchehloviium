type Variable = string;
type Substitution = (variant: number) => number;

export interface Question {
  vars: Record<Variable, Substitution>;
  number: number;
  question: string;
}

function mod(divisor: number): Substitution {
  return (variant: number) => variant % divisor || divisor;
}

export const questions = {
  "1": [
    {
      vars: {},
      number: 1,
      question: "\\text{Білінійна та квадратична форми.}",
    },
    { vars: {}, number: 2, question: "\\text{Еквівалентні білінійні форми.}" },
    {
      vars: {},
      number: 3,
      question:
        "\\text{Вираження білінійної симетричної форми через квадратичну.}",
    },
    {
      vars: {},
      number: 4,
      question: "\\text{Додатно визначена білінійна форма.}",
    },
    {
      vars: {},
      number: 5,
      question: "\\text{Умови в означенні скалярного добутку.}",
    },
    {
      vars: {},
      number: 6,
      question:
        "\\text{Довжина вектора в евклідовому просторі та кут між векторами.}",
    },
    { vars: {}, number: 7, question: "\\text{Нільпотентний оператор.}" },
    { vars: {}, number: 8, question: "\\text{Жорданова клітина.}" },
    { vars: {}, number: 9, question: "\\text{ЖНФ.}" },
    {
      vars: {},
      number: 10,
      question: "\\text{Ортогональна система векторів.}",
    },
    {
      vars: {},
      number: 11,
      question: "\\text{Лінійне відображення та лінійний оператор.}",
    },
    { vars: {}, number: 12, question: "\\text{Матриця лінійного оператора.}" },
    {
      vars: {},
      number: 13,
      question: "\\text{Підпростір векторного простору.}",
    },
    {
      vars: {},
      number: 14,
      question: "\\text{Образ та ядро лінійного оператору.}",
    },
    { vars: {}, number: 15, question: "\\text{Подільність у кільці.}" },
    {
      vars: {},
      number: 16,
      question: "\\text{Простий елемент області цілісності.}",
    },
    {
      vars: {},
      number: 17,
      question: "\\text{Нерозкладний елемент області цілісності.}",
    },
    { vars: {}, number: 18, question: "\\text{Область цілісності.}" },
    { vars: {}, number: 19, question: "\\text{Ланцюжок лінійного оператора.}" },
    { vars: {}, number: 20, question: "\\text{Ланцюговий базис.}" },
    {
      vars: {},
      number: 21,
      question: "\\text{НСД у загальному випадку кільця.}",
    },
    {
      vars: {},
      number: 22,
      question: "\\text{Сума, добуток, композиція операторів.}",
    },
    { vars: {}, number: 23, question: "\\text{Інваріантний підпростір.}" },
  ],
  2: [
    {
      vars: { k: mod(4), "k-1": (variant) => mod(4)(variant) - 1 },
      number: 1,
      question:
        "\\text{Квадратична форма, у якої після зведення до діагонального вигляду буде рівно ${k} доданків з + та рівно ${k-1} з -, але яка початково НЕ в діагональному вигляді.}",
    },
    {
      vars: { k: mod(7) },
      number: 2,
      question:
        "\\text{Лінійний оператор, характеристичний многочлен якого має степінь 7, але рівно ${k} різних власних чисел.}",
    },
    {
      vars: { k: mod(10) },
      number: 3,
      question:
        "\\text{Нільпотентний оператор, у якого степінь нільпотентності = ${k}.}",
    },
    {
      vars: { "k+2": (variant) => mod(5)(variant) + 2 },
      number: 4,
      question:
        "\\text{Дві матриці } ${k+2} \\times ${k+2} \\text{ , у яких однаковий характеристичний многочлен, але різні ЖНФ.}",
    },
    {
      vars: {
        k: mod(8),
        "k^2+k": (variant) => mod(8)(variant) ** 2 + mod(8)(variant),
      },
      number: 5,
      question:
        "\\text{Два числа } a \\text{ і } b \\text{ , жодне з яких НЕ ділиться на інше, та таке, що в їхній НСД усі прості входять у степені ${k}, а в НСК — у степені ${k^2+k}.}",
    },
    {
      vars: { k: mod(3) },
      number: 6,
      question:
        "\\text{Два числа } a \\text{ і } b \\text{ та ${k} різних представлень їхнього НСД у вигляді лінійної комбінації } a \\text{ і } b.",
    },
    {
      vars: {
        k: mod(11),
        "k+2": (variant) => mod(11)(variant) + 2,
        "k+3": (variant) => mod(11)(variant) + 3,
      },
      number: 7,
      question:
        "\\text{Два многочлени з } \\mathbb{Q}[x] \\text{ ступеня ${k+2} та ${k+3}, НСД котрих має степінь ${k}.}",
    },
    {
      vars: {
        k: mod(6),
        "k+1": (variant) => mod(6)(variant) + 1,
        "k+2": (variant) => mod(6)(variant) + 2,
      },
      number: 8,
      question:
        "\\text{Такі ${k+2} натуральних чисел, що довільні ${k+1} з них мають спільний дільник, а всі ${k+2} — ні.}",
    },
    {
      vars: {
        k: mod(4),
        "k+3": (variant) => mod(4)(variant) + 3,
        "k+4": (variant) => mod(4)(variant) + 4,
      },
      number: 9,
      question:
        "\\text{Евклідовий простір та ${k+3} векторів } v_1, \\dots, v_{${k+3}}, \\text{ де вектор } v_i \\text{ ортогональний } v_{i-1} \\text{ та } v_{i+1} \\text{ і НЕортогональний усім іншим (вважаємо } v_0 = v_{${k+3}}, v_{${k+4}} = v_1).",
    },
  ],
  "3": [
    {
      vars: {},
      number: 1,
      question: "V(\\lambda) \\text{ є інваріантним підпростором.}",
    },
    {
      vars: {},
      number: 2,
      question:
        "\\text{Оператор з матрицею } J_{r_1}(0) \\oplus J_{r_2}(0) \\oplus \\cdots \\oplus J_{r_k}(0) \\text{ є нільпотентним.}",
    },
    {
      vars: {},
      number: 3,
      question:
        "\\text{Критерій того, що } \\lambda \\text{ — власне число оператора.}",
    },
    {
      vars: {},
      number: 4,
      question: "\\text{Нерівність Коші—Буняковського в евклідових просторах.}",
    },
    {
      vars: {},
      number: 5,
      question:
        "\\text{Алгоритм Евкліда (описати кожен етап + аргументація, що } (a,b) = (a - b,b)).",
    },
    {
      vars: {},
      number: 6,
      question: "\\text{Представлення НСД(a,b) як лінійної комбінації a та b.}",
    },
    { vars: {}, number: 7, question: "\\text{Основна властивість простих.}" },
  ],
  "4": [
    {
      vars: {},
      number: 1,
      question: "\\text{Будь-який евклідів простір має ортогональний базис.}",
    },
    {
      vars: {},
      number: 2,
      question:
        "\\text{Зведення білінійних симетричних форм до діагонального вигляду.}",
    },
    {
      vars: {},
      number: 3,
      question: "det(AB) = det(A) \\cdot det(B)",
    },
    { vars: {}, number: 4, question: "\\text{Основна теорема арифметики.}" },
  ],
};
