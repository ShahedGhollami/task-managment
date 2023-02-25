import React, { useState, useEffect } from "react";
import { Row, Col, Button } from 'react-bootstrap'
import { ReactSortable } from "react-sortablejs";
import AddSection from "./AddSection";
import { connect } from 'react-redux';
import { GetListSection } from '../redux/actions';
import classNames from 'classnames';
const BoardItem = React.lazy(() => import('./BoardItem'));
const HeaderBoard = React.lazy(() => import('./HeaderBoard'));
const ClickForAddTask = React.lazy(() => import('./ClickForAddTask'));
const NewTaskAddForm = React.lazy(() => import('./NewTaskAddForm'));
const TaskItem = React.lazy(() => import('./TaskItem'));
const Index = (props) => {
    const { GetListSection, SectionList } = props
    const [show, setShow] = useState(false);
    const [list, setList] = useState([]);
    const handleClose = () => setShow(false);
    useEffect(() => {
        GetListSection()
    }, [])
    useEffect(() => {
        if (SectionList) {
            setList(SectionList)
        }
    }, [SectionList])
    const setStateBoard = (e) => { return null }
    const setState = () => { return null }
    const SortBoard = (e) => {
        const x = list[e.oldIndex]
        const newIndex = list[e.newIndex]
        list[e.oldIndex] = list[e.newIndex]
        list[e.newIndex] = x;
        //UpdateReduxPrioritySection(list, { id: x.id, priority: newIndex.priority })
    }
    const SortList = (List) => {
        setList(List.sort((a, b) => a.priority >= b.priority ? 1 : -1));
    }
    const AddNewTask = (e) => {
        let oldList = [...list];
        const section = oldList.find(item => item.id === e);
        section.isShow = true;
        SortList(oldList);
    }
    const ChangeArray = (taskId, idFromSection, idTosection) => {}
    const CancelNewTask = (sectionId, isAdd) => {
        let oldList = [...list];
        const section = oldList.find(item => item.id === sectionId);
        section.isShow = false;
        SortList(oldList);       
    }
    const SortTask = e => {
        // For update Priority
        const item = list.find(x => x.id === e.item.className.split(' ')[1]);
        const listCard = item.task;
        const temp = listCard[e.oldIndex]
        listCard[e.oldIndex] = listCard[e.newIndex]
        listCard[e.newIndex] = temp;
        let markers = [...list];
        SortList(markers);
        //UpdateReduxPriorityTask(list, { id: x.id, priority: newIndex.priority })
    }
    return (<Row className="bg_ccc h100">
        <Col lg={12} className="mt-2">
            <Button variant="primary" onClick={() => { setShow(true) }}>Add Section</Button>
        </Col>
        <Col lg={12}>
            <main className="flexbox vh80 overflow-x-auto justify-content-start">
                <ReactSortable list={list} direction="vertical" className="flexbox" setList={setStateBoard} onEnd={SortBoard}>
                    {list && list.map((row, index) => {
                        return (<BoardItem data={row.priority} key={row.id} id={row.id} className="board border-radius5 vh64" ChangeArray={ChangeArray}>
                            {row.task && <>
                                <HeaderBoard section={row} />
                                <div className="vh64 overflow-Y-outo overflow-X-hide">
                                    <ReactSortable list={row.task} setList={setState} onEnd={SortTask}>
                                        {row.task.map((elm, i) => {
                                            return (<TaskItem key={i} row={elm} id={elm.id} className={classNames('card', row.id)} parent={row.id} />)
                                        })}
                                    </ReactSortable>
                                    {row.isShow !== true && <ClickForAddTask sectionId={row.id} AddNewTask={AddNewTask} />}
                                    {row.isShow === true && <NewTaskAddForm CancelNewTask={CancelNewTask} sectionId={row.id} AddNewTask={AddNewTask} />} 
                                </div>
                            </>}
                        </BoardItem>)
                    })}
                </ReactSortable>               
            </main>
        </Col>
        <AddSection show={show} handleClose={handleClose} />
    </Row>)
}
const mapStateToProps = (state) => {

    const { SectionList } = state.Section;
    return { SectionList };
};

export default connect(mapStateToProps, { GetListSection })(Index);