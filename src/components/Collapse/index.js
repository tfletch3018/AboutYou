import React from 'react';
import { Collapsible } from 'collapsible-react-component';
import 'collapsible-react-component/dist/index.css'
import "./style.css"

const Collapse = () => {
        const [open, setOpen] = React.useState(false)
        return (
            <>
            <button className="collapseBtn" id="collapsed" type='button' onClick={() => {
                setOpen(!open)
            }}
            >
                {open ? 'Close' : 'Open'}
            </button>
            <Collapsible open={open}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, sed
        labore? Autem laboriosam minima corrupti rem repellat odio reiciendis
        nihil! Eum natus dolorem atque blanditiis ipsam aperiam. Voluptatem,
        exercitationem fugit.
                </Collapsible>
            </>
        )
    }
    const Collapse1 = () => {
        const [open, setOpen] = React.useState(false)
        return (
            <>
            <button className="collapseBtn" id="collapsed1" type='button' onClick={() => {
                setOpen(!open)
            }}
            >
                {open ? 'Close' : 'Open'}
            </button>
            <Collapsible open={open}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, sed
        labore? Autem laboriosam minima corrupti rem repellat odio reiciendis
        nihil! Eum natus dolorem atque blanditiis ipsam aperiam. Voluptatem,
        exercitationem fugit.
                </Collapsible>
            </>
        )
    }
    const Collapse2 = () => {
        const [open, setOpen] = React.useState(false)
        return (
            <>
            <button className="collapseBtn" id="collapsed2" type='button' onClick={() => {
                setOpen(!open)
            }}
            >
                {open ? 'Close' : 'Open'}
            </button>
            <Collapsible open={open}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, sed
        labore? Autem laboriosam minima corrupti rem repellat odio reiciendis
        nihil! Eum natus dolorem atque blanditiis ipsam aperiam. Voluptatem,
        exercitationem fugit.
                </Collapsible>
            </>
        )
    }

export {
    Collapse, 
    Collapse1, 
    Collapse2
}; 