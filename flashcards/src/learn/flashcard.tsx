import * as React from "react";
import * as classNames from "classnames";

export interface IFlashcardProps {
    questionFace: JSX.Element;
    answerFace: JSX.Element;
}

export const Flashcard: React.FC<IFlashcardProps> = props => {
    const [showAnswer, setShowAnswer] = React.useState(false);

    const onClick = () => setShowAnswer(!showAnswer);
    return (
        <div className={classNames("flash-card", { "-answer": showAnswer })} onClick={onClick}>
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
