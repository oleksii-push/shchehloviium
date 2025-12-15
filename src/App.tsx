import { createEffect, createSignal, For, Show } from "solid-js";
import { FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@suid/material";
import { questions, Question } from "./questions";
import { Math } from "./Math";
import { Dificultad, Nivel } from "./Nivel";

import "katex/dist/katex.min.css";

export default function App() {
    const [variant, setVariant] = createSignal<number>(1);
    const [dificultad, setDificultad] = createSignal<Dificultad>("🇨🇴");
    const [nivels, setNivels] = createSignal<Record<number, Question[]>>({});

    createEffect(() => {
        setNivels({
            1: nivelUno.chooseQuestionsForVariant(variant(), dificultad()),
            2: nivelDos.chooseQuestionsForVariant(variant(), dificultad()),
            3: nivelTres.chooseQuestionsForVariant(variant(), dificultad()),
            4: nivelCuatro.chooseQuestionsForVariant(variant(), dificultad()),
        });
    })

    const nivelUno = new Nivel({
        "🇨🇴": [],
        "🇲🇽": [
            { add: 0, divideBy: 35 },
            { add: 12, divideBy: 35 },
            { add: 24, divideBy: 35 },
        ],
        "🇪🇸": [
            { add: 0, divideBy: 35 },
            { add: 18, divideBy: 35 },
        ],
        "🇦🇷": [
            { add: 0, divideBy: 35 },
            { add: 18, divideBy: 35 },
        ],
        "🇵🇷": [
            { add: 0, divideBy: 35 },
            { add: 18, divideBy: 35 },
        ],
    }, questions[1]);

    const nivelDos = new Nivel({
        "🇲🇽": [
            { add: 0, divideBy: 13 },
            { add: 7, divideBy: 13 },
        ],
        "🇪🇸": [
            { add: 0, divideBy: 13 },
            { add: 7, divideBy: 13 },
        ],
        "🇦🇷": [
            { add: 0, divideBy: 13 },
            { add: 7, divideBy: 13 },
        ],
        "🇵🇷": [
            { add: 0, divideBy: 13 },
            { add: 7, divideBy: 13 },
        ],
    }, questions[2]);

    const nivelTres = new Nivel({
        "🇪🇸": [
            { add: 0, divideBy: 11 },
        ],
        "🇦🇷": [
            { add: 0, divideBy: 11 },
            { add: 6, divideBy: 11 },
        ],
        "🇵🇷": [
            { add: 0, divideBy: 11 },
        ],
    }, questions[3]);

    const nivelCuatro = new Nivel({
        "🇪🇸": [
            { add: 0, divideBy: 8 },
        ],
        "🇦🇷": [
            { add: 0, divideBy: 8 },
        ],
        "🇵🇷": [
            { add: 0, divideBy: 8 },
        ],
    }, questions[4]);

    return (
        <Stack spacing={4} width={700}>
            <Stack spacing={2}>
                <Typography variant="h2">Щегловіюм</Typography>
                <FormControl style={"width: 25ch"}>
                    <InputLabel id="dificultad-select-label">Складність</InputLabel>
                    <Select
                        labelId="dificultad-select-label"
                        id="dificultad-select"
                        value={dificultad()}
                        label="Складність"
                        onChange={(event) => setDificultad(event.target.value)}
                    >
                        <MenuItem value={"🇨🇴"}>🇨🇴 (60–65)</MenuItem>
                        <MenuItem value={"🇲🇽"}>🇲🇽 (65–70)</MenuItem>
                        <MenuItem value={"🇪🇸"}>🇪🇸 (71–80)</MenuItem>
                        <MenuItem value={"🇦🇷"}>🇦🇷 (81–90)</MenuItem>
                        <MenuItem value={"🇵🇷"}>🇵🇷 (91–100)</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="outlined-number"
                    label="Варіянт"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={"width: 25ch"}
                    defaultValue={0}
                    onChange={(_, value) => setVariant(+value)}
                />
            </Stack>
            <Stack spacing={2}>
                <For each={Object.entries(nivels())}>
                    {([nivel, questions]) =>
                        <Show when={questions.length > 0}>
                            <div>
                                <Typography variant="h3">Nivel {nivel}</Typography>
                                <ol>
                                    <For each={questions}>
                                        {(item) => <li value={item.number} style={"width: 100ch"}><Math text={item.question} /></li>}
                                    </For>
                                </ol>
                            </div>
                        </Show>}
                </For>
            </Stack>
        </Stack>
    );
}
