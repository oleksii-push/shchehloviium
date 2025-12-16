import { Question } from "./questions";

export type Dificultad = "🇨🇴" | "🇲🇽" | "🇪🇸" | "🇦🇷" | "🇵🇷";
type GroupId = string;

function mod(variant: number, divisor: number): number {
    return (variant % divisor) || divisor;
}

interface NivelGroup {
    name: string;
    questions: Question[];
}

interface NivelChoiceMod {
    add: number;
    divideBy: number;
    groupId?: GroupId;
}

export class Nivel {
    choiceMods: Partial<Record<Dificultad, NivelChoiceMod[]>>;
    questions: Question[];
    groups: Record<GroupId, NivelGroup>;

    constructor(choiceMods: Record<Dificultad, NivelChoiceMod[]>, questions: Question[], groups = {}) {
        this.choiceMods = choiceMods;
        this.questions = questions;
        this.groups = groups;
    }

    chooseQuestionsForVariant(variant: number, difficulty: Dificultad) {
        const choiceMods = this.choiceMods?.[difficulty] ?? [];
        return choiceMods.map(
            (choiceMod) => ({
                number: mod(variant + choiceMod.add, choiceMod.divideBy),
                groupId: choiceMod.groupId,
            })
        ).map((choice) => {
            const chooseFrom = this.groups[choice.groupId]?.questions ?? this.questions;
            let question = chooseFrom.at(choice.number - 1);
            let text = question.question;
            const vars = question.vars;

            for (const [variable, substitution] of Object.entries(vars)) {
                text = text.replaceAll("${" + variable + "}", substitution(variant).toString());
            }

            return {...question, question: text };
        });
    }
}
