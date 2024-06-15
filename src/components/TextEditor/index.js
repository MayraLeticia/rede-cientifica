import { React, useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';

import "./style.scss";


const TextEditor = ({ initialValue }) => {

    const [editorValue, setEditorValue] = useState(initialValue);
    const handleChange = (value) => {
        setEditorValue(value);
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text(editorValue, 10, 10);
        doc.save('document.pdf');
    };

    const exportToDocx = () => {
        const doc = new Document();
        const paragraph = new Paragraph({
          children: [new TextRun(editorValue)],
        });
        doc.addSection({ children: [paragraph] });
        Packer.toBlob(doc).then((blob) => {
        //   saveAs(blob, 'document.docx');
        });
    };

    // const wrapperRef = useCallback((wrapper) => {
    //     if (wrapper == null) return;

    //     wrapper.innerHTML = '';
    //     const editor = document.createElement('div');
    //     wrapper.append(editor);
    //     new Quill(editor , { theme: "snow" })
    //     //jahddhf
    // }, [])


    return (
        <ReactQuill value={editorValue} onChange={handleChange} />
    );
}


export default TextEditor;