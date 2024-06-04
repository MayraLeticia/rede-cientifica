import { React, useCallback } from "react";
import Quill from "quill";
import "./style.scss";
import "quill/dist/quill.snow.css";


const TextEditor = ({ }) => {


    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return;

        wrapper.innerHTML = '';
        const editor = document.createElement('div');
        wrapper.append(editor);
        new Quill(editor , { theme: "snow" })
        //jahddhf
    }, [])


    return (
        <div id="container" ref={wrapperRef}></div>
    );
}


export default TextEditor;