import * as React from "react";
import * as classNames from "classnames";

export interface IFlashcardProps {
    questionFace: JSX.Element;
    answerFace: JSX.Element;
}

export const Flashcard2: React.FC<IFlashcardProps> = props => {
    const [showAnswer, setShowAnswer] = React.useState(false);

    const toggle = () => setShowAnswer(!showAnswer);

    const spaceKeyListener = (evt: KeyboardEvent) => {
        if (evt.code === "Space") {
            toggle();
        }
    }

    React.useEffect(() => {
        window.addEventListener("keydown", spaceKeyListener);
        return () => {
            window.removeEventListener("keydown", spaceKeyListener);
        }
    });

    return (
        <div className={classNames("flash-card", { "-answer": showAnswer })} onClick={toggle}>
            <div className="flash-card-inner">
                <div className="flash-card-front">
                    {props.questionFace}
                </div>
                <div className="flash-card-back">
                    {props.answerFace}
                </div>
            </div>
        </div>
    );
};
