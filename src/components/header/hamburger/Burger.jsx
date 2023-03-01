import { useState } from "react"

export default function Burger(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        props.toggle();
    };

    return (
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
        )
}