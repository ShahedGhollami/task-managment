import React, { useState, useEffect } from "react";
import { Row, Col, Button } from 'react-bootstrap'
import AddSection from "./AddSection";
import { connect } from 'react-redux';
import { GetListSection } from '../redux/actions';
const Index = (props) => {
    const { GetListSection, SectionList } = props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    useEffect(() => {
        GetListSection()
    }, [])
    useEffect(() => {
        if (SectionList) {
            console.log(SectionList)
        }
    }, [SectionList])
    return (<Row className="bg_666 h100">
        <Col lg={12}>
            <Button variant="primary" onClick={() => { setShow(true) }}>Add Section</Button>
        </Col>
        <AddSection show={show} handleClose={handleClose} />
    </Row>)
}
const mapStateToProps = (state) => {

    const { SectionList } = state.Section;
    return { SectionList };
};

export default connect(mapStateToProps, { GetListSection })(Index);