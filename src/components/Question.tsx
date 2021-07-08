import "../styles/question.scss";
import { ReactNode } from 'react';
import cx from 'classnames';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHighlighted?: boolean;
}

export function Question({
    content,
    author,
    isHighlighted = false,
    isAnswered = false,
    children
}: QuestionProps) {
    return (
        <div
            className={cx(
                'question',
                { answered: isAnswered },
                { highlighted: isHighlighted && !isAnswered }
            )}
        >
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span className="user-name">{author.name}</span>
                </div>
                <div className="action-button">{children}</div>
            </footer>
        </div>
    )
}