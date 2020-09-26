import * as React from "react";
import { IFlashcardProps } from "./flashcard";
import { Flashcard2 } from "./flashcard2";

export interface IFlashcardDeckProps {
    flashcards: IFlashcardProps[];
}

export const FlashcardDeck: React.FC<IFlashcardDeckProps> = ({ flashcards }) => {
    const [index, setIndex] = React.useState(0);

    const leftButton = (
        <button className="deck-button" disabled={index === 0} onClick={() => setIndex(index - 1)}>{"<"}</button>
    );
    const rightButton = (
        <button className="deck-button" disabled={index >= flashcards.length - 1}
                onClick={() => setIndex(index + 1)}>{">"}</button>
    );

    return(
        <div className="flashcard-deck">
            {leftButton}
            <Flashcard2 {...flashcards[index]}/>
            {rightButton}
        </div>
    )
};
