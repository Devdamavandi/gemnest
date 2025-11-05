import { useEffect, useState } from "react";


interface MousePosition {
    x: number
    y: number
}


const MouseTracker = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 }) 

    useEffect(() => {
        const handleMouseMove = (event: globalThis.MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY })
        }

        // Attach the Event listener to the entire document
        document.addEventListener("mousemove", handleMouseMove )

        // Cleanup function
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])


    return mousePosition
}
 
export default MouseTracker;
