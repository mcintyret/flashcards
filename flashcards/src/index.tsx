import * as React from "react";
import * as ReactDOM from "react-dom";
import { FlashcardDeckDev } from "./learn/flashcardDeckDev";

const appElement = document.getElementById("app");

if (appElement != null) {
    // ReactDOM.render(<div>Hello Tom</div>, appElement);
    ReactDOM.render(
        // <SimpleFlashcardDev/>,
        <FlashcardDeckDev />,
        // <Foo/>,
        appElement
    );
}
