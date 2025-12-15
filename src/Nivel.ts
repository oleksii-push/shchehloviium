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
            const mods = question.mods;

            for (const [variable, divisor] of Object.entries(mods)) {
                text = text.replaceAll("${" + variable + "}", mod(variant, divisor).toString());
            }

            return {...question, question: text };
        });
    }
}
