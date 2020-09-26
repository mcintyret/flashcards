import * as React from "react";
import { useState } from "react";
import { SimpleFlashcardFace } from "./simpleFlashcardFace";
import { Flashcard2 } from "./flashcard2";

const TITLE = "English Oak";
const SUBTITLE = "A really nice tree";
const IMAGE_URL = "https://www.thespruce.com/thmb/ix8efcdYZJ2yYGlSyf4nNntYgKg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/106560423-56a98c905f9b58b7d0fca02e.jpg";
const TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const SimpleFlashcardDev: React.FC = () => {
    const [showTitle, setShowTitle] = useState(true);
    const [showSubtitle, setShowSubtitle] = useState(true);
    const [showImage, setShowImage] = useState(true);
    const [showText, setShowText] = useState(true);

    const face = (
        <SimpleFlashcardFace
            title={showTitle ? TITLE : undefined}
            subtitle={showSubtitle ? SUBTITLE : undefined}
            imageUrl={showImage ? IMAGE_URL : undefined}
            text={showText ? TEXT : undefined}
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
