import {RefObject, useEffect} from 'react';

type Event = MouseEvent | TouchEvent;

export const useOnOverOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void,
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            const el = ref?.current;

            if (!el || el.contains((event?.target as Node) || null)) {
                return;
            }

            handler(event);
        };

        document.addEventListener('mouseover', listener);
        document.addEventListener('mouseleave', listener);

        return () => {
            document.removeEventListener('mouseover', listener);
            document.removeEventListener('mouseleave', listener);
        };
    }, [ref, handler]);
};

export default useOnOverOutside;
