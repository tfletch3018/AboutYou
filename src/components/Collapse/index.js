import React from 'react';
import { Collapsible } from 'collapsible-react-component';
import 'collapsible-react-component/dist/index.css'
import test from "./images/test.jpg";
import test1 from "./images/test1.jpg";
import test2 from "./images/test2.jpg";
import "./style.css"

const Collapse = () => {
        const [open, setOpen] = React.useState(true)
        return (
            <>
            <button id="collapseBtn" type='button' onClick={() => {
                setOpen(!open)
            }}
            ><img id="collapse" src={test} alt="" width="200" height="300px" />
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
        const [open, setOpen] = React.useState(true)
        return (
            <>
            <button id="collapseBtn" type='button' onClick={() => {
                setOpen(!open)
            }}
            ><img id="collapse" src={test1} alt="" width="200" height="300px" />
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
        const [open, setOpen] = React.useState(true)
        return (
            <>
            <button id="collapseBtn" type='button' onClick={() => {
                setOpen(!open)
            }}
            ><img id="collapse" src={test2} alt="" width="200" height="300px" />
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
