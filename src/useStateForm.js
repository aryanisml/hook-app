import React, { useState, useContext } from 'react';
import useInput from './useInput';
import SampleContext from './SampleContext';

function SampleForm() {

    // const [sound, setSound] = useState("");
    // const [color, setColor] = useState("#000000");
    // const Submit = (e) => {
    //     e.preventDefault();
    //     alert(`${sound} like to ${color}`);
    //     setSound('');
    //     setColor('');
    // }

    // return (
    //     <>
    //         { <form onSubmit={Submit}>
    //             <input type="text"
    //                 value={sound} onChange={(e) => setSound(e.target.value)} />
    //             <input type="color"
    //                 value={color} onChange={(e) => setColor(e.target.value)} />
    //             <button>Add</button>
    //         </form> }
    //     </>);
    const {trees} = useContext(SampleContext);
    console.log(trees);
    const [txtProp, restTxtProp] = useInput("");
    const [colorProp, restColorProp] = useInput("#000000");

    const Submit = (e) => {
        e.preventDefault();
        alert(`${txtProp.value} like to ${colorProp.value}`);
        restTxtProp();
        restColorProp();
    }
    return (
        <>
            <form onSubmit={Submit}>
                <input type="text" {...txtProp} placeholder="Sounds..." />
                <input type="color" {...colorProp} />
                <button>Add</button>
            </form>


        </>)





}
export default SampleForm;