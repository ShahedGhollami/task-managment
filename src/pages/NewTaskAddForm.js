import React,{ useState,useEffect }from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { NewTask } from '../redux/actions';
const NewTaskAddForm = (props) => {
    const [body, setBody] = useState({ Title: '', Description:'', ParentId:props.sectionId,Status:false })
   
    const handleSubmit = () => {
        // const form = event.currentTarget;
        // if (form.checkValidity() === true) {
             props.NewTask(body);            
        //     setBody({ Title: '',Description:'',ParentId:propTypes.parent,Status:false })
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
    }
    return (<Form className="m-2 p-2 border-solid border-radius5 " onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" required value={body?.Title} onChange={(e) => { setBody({ ...body,Title: e.target.value }) }} placeholder="Enter Title" />
            <Form.Control.Feedback type="invalid">Enter Title</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text"required value={body?.Description} onChange={(e) => { setBody({ ...body, Description: e.target.value }) }} placeholder="Enter Description" />
            <Form.Control.Feedback type="invalid">Enter Description</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" onClick={()=>{handleSubmit()}}>
            Save
        </Button>
    </Form>)
}
const mapStateToProps = (state) => {
    return {};
};
export default connect(mapStateToProps, {NewTask})(NewTaskAddForm);