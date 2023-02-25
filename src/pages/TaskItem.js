import React from 'react'
import Form from 'react-bootstrap/Form';
export default function TaskItem(props) {
    const dragStart = e => {
        e.stopPropagation();
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        e.dataTransfer.setData('parent', props.parent);
    }
    const dragOver = e => {
        e.stopPropagation();
    }
    return (<div id={props.id} draggable='true' className={props.className}
        onDragStart={dragStart} onDragOver={dragOver}>
        <div>
            <span className='whiteSpace-break C_555'>Task Name{props.row.Title}</span>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="switch" onChange={(e)=>{console.log(e.target.checked)}}  label="IsDone" />
            </Form.Group>
        </div>
    </div>)
}
