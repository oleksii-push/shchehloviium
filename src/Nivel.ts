import { Question } from "./questions";

function nivelMod(variant: number, divisor: number): number {
    return variant % divisor;
}

function questionMod(variant: number, divisor: number): number {
    return variant % divisor || variant;
}

interface NivelChoiceMod {
    add: number;
    divideBy: number;
}

export class Nivel {
    choiceMods: NivelChoiceMod[];
    questions: Question[];

    constructor(choiceMods: NivelChoiceMod[], questions: Question[]) {
        this.choiceMods = choiceMods;
        this.questions = questions;
    }

    chooseQuestionsForVariant(variant: number) {
        return this.choiceMods.map(
            (choiceMod) => nivelMod(variant + choiceMod.add, choiceMod.divideBy)
        ).map((i) => {
            let question = this.questions.at(i - 1);
            let text = question.question;
            const mods = question.mods;

            for (const [variable, divisor] of Object.entries(mods)) {
                text = text.replace("${" + variable + "}", questionMod(variant, divisor).toString());
            }

            return Object.assign(question, { question: text });
        });
    }
}
