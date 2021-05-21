import React from 'react';
import { Check, EmojiSad, Loader } from '../icons/icons';

export default function Button({
    children,
    kind = 'default',
    level = 'primary',
    state = 'default',
    ...props
}) {
    const buttonContent = (() => {
        if (state === 'loading') {
            return <Loader className="icon--loader" />;
        }

        if (state === 'success') {
            return <Check />;
        }

        if (state === 'error') {
            return <EmojiSad />;
        }

        return children;
    })();
    return (
        <button
            className={`btn btn--${kind} btn-${level} btn--state-${state}`}
            {...props}
            disabled={state === 'disabled'}
        >
            {buttonContent}
        </button>
    );
}
