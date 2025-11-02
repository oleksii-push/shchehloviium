import { createSignal, For } from "solid-js";
import { Stack, TextField, Typography } from "@suid/material";
import { questions } from "./questions";
import { Math } from "./Math";

import "katex/dist/katex.min.css";

function nivelMod(variant: number, divisor: number): number {
    return variant % divisor;
}

function questionMod(variant: number, divisor: number): number {
    return variant % divisor || variant;
}

export default function App() {
    const [nivelUno, setNivelUno] = createSignal<string[]>();
    const [nivelDos, setNivelDos] = createSignal<string[]>();
    const [nivelTres, setNivelTres] = createSignal<string[]>();
    const [nivelCuatro, setNivelCuatro] = createSignal<string[]>();

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
                        const nivelUnoMod = [
                            nivelMod(+value, 23),
                            nivelMod(+value + 12, 23)
                        ].map((i) => {
                            const question = questions[1].at(i - 1);
                            return `${question.number} ${question.question}`;
                        });
                        const nivelTresMod = [nivelMod(+value, 7)].map((i) => {
                            const question = questions[3].at(i - 1);
                            return `${question.number} ${question.question}`;
                        });
                        const nivelCuatroMod = [nivelMod(+value, 4)].map((i) => {
                            const question = questions[4].at(i - 1);
                            return `${question.number} ${question.question}`;
                        });

                        setNivelUno(nivelUnoMod);
                        setNivelTres(nivelTresMod);
                        setNivelCuatro(nivelCuatroMod);

                        const nivelDosModIndexes = [nivelMod(+value, 9), nivelMod(+value + 5, 9)];
                        const nivelDosMod = nivelDosModIndexes.map((i) => {
                            let question = questions[2].at(i - 1);
                            let text = question.question;
                            const mods = question.mods;

                            for (const [variable, divisor] of Object.entries(mods)) {
                                text = text.replace("${" + variable + "}", questionMod(+value, divisor).toString())
                            }

                            return `${question.number} ${text}`;
                        })

                        setNivelDos(nivelDosMod);
                    }}
                />
            </Stack>
            <Stack spacing={2}>
                <Typography variant="h3">Nivel 1</Typography>
                <For each={nivelUno()}>
                    {(item) => <Math text={item} />}
                </For>

                <Typography variant="h3">Nivel 2</Typography>
                <For each={nivelDos()}>
                    {(item) => <Math text={item} />}
                </For>

                <Typography variant="h3">Nivel 3</Typography>
                <For each={nivelTres()}>
                    {(item) => <Math text={item} />}
                </For>

                <Typography variant="h3">Nivel 4</Typography>
                <For each={nivelCuatro()}>
                    {(item) => <Math text={item} />}
                </For>
            </Stack>
        </Stack>
    );
}
