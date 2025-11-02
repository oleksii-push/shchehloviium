import katex from "katex";
import { Component } from "solid-js";

interface MathProps {
    text: string;
    display: boolean;
}

export const Math: Component<MathProps> = (props) => {
    const html = () =>
        katex.renderToString(props.text, {
            throwOnError: false,
            displayMode: props.display ?? false
        });

    return <span innerHTML={html()} />;
}
