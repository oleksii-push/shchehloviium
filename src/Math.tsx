import katex from "katex";

export function Math(props) {
    const html = () =>
        katex.renderToString(props.text || "", {
            throwOnError: false,
            displayMode: props.display ?? false
        });

    // ✅ Solid way to inject HTML
    return <span innerHTML={html()} />;
}
