import { createSignal, For } from "solid-js";
import { Stack, TextField, Typography } from "@suid/material";
import { questions, Question } from "./questions";
import { Math } from "./Math";

import "katex/dist/katex.min.css";

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

class Nivel {
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

export default function App() {
    const [nivelUnoQuestions, setNivelUnoQuestions] = createSignal<Question[]>();
    const [nivelDosQuestions, setNivelDosQuestions] = createSignal<Question[]>();
    const [nivelTresQuestions, setNivelTresQuestions] = createSignal<Question[]>();
    const [nivelCuatroQuestions, setNivelCuatroQuestions] = createSignal<Question[]>();

    const nivelUno = new Nivel([
        { add: 0, divideBy: 23 },
        { add: 12, divideBy: 23 },
    ], questions[1]);

    const nivelDos = new Nivel([
        { add: 0, divideBy: 9 },
        { add: 5, divideBy: 9 },
    ], questions[2]);

    const nivelTres = new Nivel([
        { add: 0, divideBy: 7 },
    ], questions[3]);

    const nivelCuatro = new Nivel([
        { add: 0, divideBy: 4 },
    ], questions[4]);

    return (
        <Stack spacing={4} width={700}>
            <Stack spacing={2}>
                <Typography variant="h2">Щегловіюм</Typography>
                <TextField
                    id="outlined-number"
                    label="Варіянт"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={"width: 25ch"}
                    defaultValue={0}
                    onChange={(_, value) => {
                        setNivelUnoQuestions(nivelUno.chooseQuestionsForVariant(+value));
                        setNivelDosQuestions(nivelDos.chooseQuestionsForVariant(+value));
                        setNivelTresQuestions(nivelTres.chooseQuestionsForVariant(+value));
                        setNivelCuatroQuestions(nivelCuatro.chooseQuestionsForVariant(+value));
                    }}
                />
            </Stack>
            <Stack spacing={2}>
                <Typography variant="h3">Nivel 1</Typography>
                <ol>
                    <For each={nivelUnoQuestions()}>
                        {(item) => <li value={item.number}><Math text={item.question} /></li>}
                    </For>
                </ol>

                <Typography variant="h3">Nivel 2</Typography>
                <ol>
                    <For each={nivelDosQuestions()}>
                        {(item) => <li value={item.number}><Math text={item.question} /></li>}
                    </For>
                </ol>

                <Typography variant="h3">Nivel 3</Typography>
                <ol>
                    <For each={nivelTresQuestions()}>
                        {(item) => <li value={item.number}><Math text={item.question} /></li>}
                    </For>
                </ol>

                <Typography variant="h3">Nivel 4</Typography>
                <ol>
                    <For each={nivelCuatroQuestions()}>
                        {(item) => <li value={item.number}><Math text={item.question} /></li>}
                    </For>
                </ol>
            </Stack>
        </Stack>
    );
}
