import * as React from "react";
import * as ReactDOM from "react-dom";
import { Flashcard } from "./learn/flashcard";
import { SimpleFlashcardFace } from "./learn/simpleFlashcardFace";
import { Foo } from "./learn/foo";
import { Flashcard2 } from "./learn/flashcard2";
import { SimpleFlashcardDev } from "./learn/simpleFlashcardDev";

const appElement = document.getElementById("app");

if (appElement != null) {
    // ReactDOM.render(<div>Hello Tom</div>, appElement);
    ReactDOM.render(
        <SimpleFlashcardDev/>,
        // <Foo/>,
        appElement
    );
}
