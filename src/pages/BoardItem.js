import React from 'react'

export default function BoardItem(props) {
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const parent = e.dataTransfer.getData('parent');
        const card = document.getElementById(card_id);
        if (card!==null &&parent !== props.id) {
            props.ChangeArray(card.id, parent, props.id);
        }
    }
    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}>
            {props.children}
        </div>
    )
}
