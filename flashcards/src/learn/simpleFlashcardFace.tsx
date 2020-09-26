import * as React from "react";

export interface ISimpleFlashcardFaceProps {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
    text?: string;
}

export const SimpleFlashcardFace: React.FC<ISimpleFlashcardFaceProps> = props => {
    const { title, subtitle, imageUrl, text } = props;

    return (
        <div className="simple-flashcard">
            {imageUrl && <img src={imageUrl}/>}
            <div className="text">
                {title && <h1>{title}</h1>}
                {subtitle && <h3>{subtitle}</h3>}
                {text && <p>{text}</p>}
            </div>
        </div>
    );
};
