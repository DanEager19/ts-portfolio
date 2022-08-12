import { useState } from "react"

function Accordion({title, description, link}: any) {
    const [isActive, setIsActive] = useState(false);
    return(
        <div className='accordion'>
            <div className='accordion-item'>
                <div className='accordion-title flow-root' onClick={() => setIsActive(!isActive)}>
                    <div className="float-left pl-2">{title}</div>
                    <div className="float-right pr-2">{isActive ? '-' : '+'}</div>
                </div>
                {
                    isActive && <div className='accordion-content pl-3'>
                        <p>{description}</p>
                        <a href={link}>GitHub</a>
                    </div>
                }
            </div>
        </div>
    )
}

export default Accordion;