import * as React from "react";
import { useState } from "react";
import { SimpleFlashcardFace } from "./simpleFlashcardFace";
import { Flashcard2 } from "./flashcard2";
import { Oak } from "./mock";

export const SimpleFlashcardDev: React.FC = () => {
    const [showTitle, setShowTitle] = useState(true);
    const [showSubtitle, setShowSubtitle] = useState(true);
    const [showImage, setShowImage] = useState(true);
    const [showText, setShowText] = useState(true);

    const face = (
        <SimpleFlashcardFace
            title={showTitle ? Oak.title : undefined}
            subtitle={showSubtitle ? Oak.subtitle : undefined}
            imageUrl={showImage ? Oak.imageUrl : undefined}
            text={showText ? Oak.text : undefined}
        />
    );

    return (
        <div>
            <Flashcard2
                questionFace={face}
                answerFace={<span>oops</span>}
            />

            <div style={{marginTop: "40px"}}>
                <label>Show Title
                    <input type="checkbox" checked={showTitle}
                           onChange={evt => setShowTitle(evt.currentTarget.checked)}/>
                </label>
                <label>Show Subtitle
                    <input type="checkbox" checked={showSubtitle}
                           onChange={evt => setShowSubtitle(evt.currentTarget.checked)}/>
                </label>
                <label>Show Image
                    <input type="checkbox" checked={showImage}
                           onChange={evt => setShowImage(evt.currentTarget.checked)}/>
                </label>
                <label>Show Text
                    <input type="checkbox" checked={showText} onChange={evt => setShowText(evt.currentTarget.checked)}/>
                </label>
            </div>
        </div>
    );
};
