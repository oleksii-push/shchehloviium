import { Question } from "./questions";

export type Dificultad = "🇨🇴" | "🇲🇽" | "🇪🇸" | "🇦🇷" | "🇵🇷";

function mod(variant: number, divisor: number): number {
    return (variant % divisor) || divisor;
}

interface NivelChoiceMod {
    add: number;
    divideBy: number;
}

export class Nivel {
    choiceMods: Partial<Record<Dificultad, NivelChoiceMod[]>>;
    questions: Question[];

    constructor(choiceMods: Record<Dificultad, NivelChoiceMod[]>, questions: Question[]) {
        this.choiceMods = choiceMods;
        this.questions = questions;
    }

    chooseQuestionsForVariant(variant: number, difficulty: Dificultad) {
        const choiceMods = this.choiceMods?.[difficulty] ?? [];
        return choiceMods.map(
            (choiceMod) => mod(variant + choiceMod.add, choiceMod.divideBy)
        ).map((i) => {
            let question = this.questions.at(i - 1);
            let text = question.question;
            const vars = question.vars;

            for (const [variable, substitution] of Object.entries(vars)) {
                text = text.replaceAll("${" + variable + "}", substitution(variant).toString());
            }

            return {...question, question: text };
        });
    }
}
