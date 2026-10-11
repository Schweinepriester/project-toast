import React from 'react';

// TODO generalize
export function useEscapeKey(callback) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === 'Escape') {
                callback(event);
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [callback]);
}
