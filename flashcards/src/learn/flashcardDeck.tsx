import * as React from "react";
import { IFlashcardProps } from "./flashcard";
import { Flashcard2 } from "./flashcard2";

export interface IFlashcardDeckProps {
    flashcards: IFlashcardProps[];
}

export const FlashcardDeck: React.FC<IFlashcardDeckProps> = ({ flashcards }) => {
    const [index, setIndex] = React.useState(0);

    const moveLeft = () => setIndex(Math.max(0, index - 1));
    const moveRight = () => setIndex(Math.min(index + 1, flashcards.length - 1));

    const keyListener = (evt: KeyboardEvent) => {
        if (evt.key === "ArrowLeft") {
            moveLeft();
        } else if (evt.key === "ArrowRight") {
            moveRight();
        }
    }

    React.useEffect(() => {
        window.addEventListener("keydown", keyListener);
        return () => {
            window.removeEventListener("keydown", keyListener);
        }
    });

    const leftButton = (
        <button className="deck-button" disabled={index === 0} onClick={moveLeft}>{"<"}</button>
    );
    const rightButton = (
        <button className="deck-button" disabled={index >= flashcards.length - 1} onClick={moveRight}>{">"}</button>
    );

    return (
        <div className="flashcard-deck" onKeyDown={keyListener}>
            {leftButton}
            <Flashcard2 {...flashcards[index]}/>
            {rightButton}
        </div>
    );
};
