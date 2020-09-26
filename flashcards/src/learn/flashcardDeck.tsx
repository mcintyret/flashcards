import * as React from "react";
import { IFlashcardProps } from "./flashcard";
import { Flashcard2 } from "./flashcard2";
import { debounce } from "lodash-es";

export interface IFlashcardDeckProps {
    flashcards: IFlashcardProps[];
}

function parseIndex(value: string | undefined) {
    if (!value) {
        return undefined;
    }
    const match = /card_(\d+)/.exec(value);
    if (!match) {
        return undefined
    }
    return +match[1];
}

function getHash(index: number) {
    return `card_${index}`;
}

export const FlashcardDeck: React.FC<IFlashcardDeckProps> = ({ flashcards }) => {
    const [index, setIndex] = React.useState(parseIndex(window.location.hash) ?? 0);

    const scrollContainer = React.createRef<HTMLDivElement>();

    const moveLeft = () => setIndex(Math.max(0, index - 1));
    const moveRight = () => setIndex(Math.min(index + 1, flashcards.length - 1));

    const arrowKeyListener = (evt: KeyboardEvent) => {
        if (evt.code === "ArrowLeft") {
            moveLeft();
        } else if (evt.code === "ArrowRight") {
            moveRight();
        }
    }

    const scrollListener = debounce(() => {
        if (scrollContainer.current) {
            const width = scrollContainer.current.clientWidth
            const index = Math.floor(scrollContainer.current.scrollLeft / width);
            setIndex(index);
        }
    }, 100, { leading: false, trailing: true });

    React.useEffect(() => {
        window.addEventListener("keydown", arrowKeyListener);
        return () => {
            window.removeEventListener("keydown", arrowKeyListener);
        }
    });

    React.useEffect(() => {
        window.location.hash = getHash(index);
    }, [index]);

    const leftButton = (
        <button className="deck-button" disabled={index === 0} onClick={moveLeft}>{"<"}</button>
    );
    const rightButton = (
        <button className="deck-button" disabled={index >= flashcards.length - 1} onClick={moveRight}>{">"}</button>
    );

    return (
        <div className="flashcard-deck">
            {leftButton}
            <div className="deck-wrapper" onScroll={scrollListener} ref={scrollContainer}>
                {flashcards.map((props, idx) => (
                    <div id={getHash(idx)} className="card-wrapper">
                        <Flashcard2 key={idx} {...props} />
                    </div>
                ))}
            </div>
            {rightButton}
        </div>
    );
};
