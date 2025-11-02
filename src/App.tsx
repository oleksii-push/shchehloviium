import { createSignal, For } from "solid-js";
import { Stack, TextField, Typography } from "@suid/material";
import { questions, Question } from "./questions";
import { Math } from "./Math";
import { Nivel } from "./Nivel";

import "katex/dist/katex.min.css";

export default function App() {
    const [nivels, setNivels] = createSignal<Record<number, Question[]>>({});

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
                        setNivels({
                            1: nivelUno.chooseQuestionsForVariant(+value),
                            2: nivelDos.chooseQuestionsForVariant(+value),
                            3: nivelTres.chooseQuestionsForVariant(+value),
                            4: nivelCuatro.chooseQuestionsForVariant(+value),
                        });
                    }}
                />
            </Stack>
            <Stack spacing={2}>
                <For each={Object.entries(nivels())}>
                    {([nivel, questions]) =>
                        <div>
                            <Typography variant="h3">Nivel {nivel}</Typography>
                            <ol>
                                <For each={questions}>
                                    {(item) => <li value={item.number}><Math text={item.question} /></li>}
                                </For>
                            </ol>
                        </div>}
                </For>
            </Stack>
        </Stack>
    );
}
