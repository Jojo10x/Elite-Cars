import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Elite Cars`;
        } else {
            document.title = 'Elite Cars';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
