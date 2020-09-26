import * as React from "react";
import { FlashcardDeck } from "./flashcardDeck";
import { Oak, Sequoia, Willow } from "./mock";
import { SimpleFlashcardFace } from "./simpleFlashcardFace";

const flashcards = [Oak, Willow, Sequoia].map(props => (
    {
        questionFace: <SimpleFlashcardFace imageUrl={props.imageUrl}/>,
        answerFace: <SimpleFlashcardFace title={props.title}/>
    }
));

export const FlashcardDeckDev: React.FC = () => {
    return (
        <FlashcardDeck
            flashcards={flashcards}
        />
    );
};
