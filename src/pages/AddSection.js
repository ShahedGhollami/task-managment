import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AddNewSection } from '../redux/actions';
const AddSection = (props) => {
    const { handleClose, show,AddNewSection } = props
    const [body, setBody] = useState({ SectionName: '' })
    const handleSubmit = (event) => {       
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            AddNewSection(body);
            handleClose()
            setBody({ SectionName: '' })
            event.preventDefault();
            event.stopPropagation();
        }
    }    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Section</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="validationCustom">
                        <Form.Label>Section Name</Form.Label>
                        <Form.Control type="text" required value={body?.SectionName} onChange={(e) => { setBody({ ...body, SectionName: e.target.value }) }} placeholder="Enter Section Name" />
                        <Form.Control.Feedback type="invalid">Enter Section Name</Form.Control.Feedback>
                        <div className="d-flex flex-row-reverse mt-2">                           
                            <Button className="mx-2" type="submit">Save changes</Button>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
const mapStateToProps = (state) => {   
    const { SectionList } = state.Section;
    return { SectionList };
};
export default connect(mapStateToProps, {  AddNewSection})(AddSection);