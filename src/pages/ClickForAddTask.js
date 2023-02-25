import React from 'react'
import Button from 'react-bootstrap/Button';
export default function ClickForAddTask(props) {
    const AddNewTask = () => {
        props.AddNewTask(props.sectionId);
    }
    return (
        <div onClick={() => { AddNewTask() }} className="dropzone text-center mt-2 mx-3 mb-2 border-radius15">
            <div className="dz-message py-2  needsclick cursor-pointer">
                <Button variant="primary">Add New Task</Button>
            </div>
        </div>
    )
}
