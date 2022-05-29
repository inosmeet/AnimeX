import { useRef } from 'react';

export default function useCountRender(pageName) {
    const renders = useRef(0);
    console.log(pageName + "Renders: ", renders.current++);
}
