import { useEffect, useState } from "react";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updatePosition = () => { 
        console.log('yo wtf');
        setScrollPosition(document.body.scrollTop); 
    } 
    useEffect(() => { 
        document.body.addEventListener("scroll", updatePosition); 
        updatePosition(); 
        return () => document.body.removeEventListener("scroll", updatePosition);
    }, []);
    

    return scrollPosition; 
};

export default useScrollPosition;