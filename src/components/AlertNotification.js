import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
const AlertNotification = (props) => {
    const [listError, setListError] = useState([]);
      const [time, setTime] = useState(0);
  
    useEffect(() => {
        setTimeout(() => {
            setTime(time + 1);
            listError.map(row => {
                if (row.Time.getTime() < new Date().getTime()) {
                    setListError(listError.filter(i => i !== row))
                }
                return null;
            })
        }, 1000);
    }, [time])
    const getDateTime=()=>{
        return  new Date(new Date().setSeconds(new Date().getSeconds() + 5))
    }
    // useEffect(() => {
    //     if (props.ConactForm.error) {           
    //         setListError([...listError, { message: props.ConactForm.error, Time: getDateTime() }])
    //     }
    // }, [props.ConactForm.error])
   
    const noRefCheck = (e) => {
        setListError(listError.filter((i) => (i !== e)))
    }
    return (
        <div className='showEror'>
            {listError.map((row, index) => {return (<Alert key={index} toggle={() => { noRefCheck(row) }} color="danger" >{row.message}</Alert >)
            })}
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        ConactForm: state.ConactForm,
       
    };
};
export default connect(mapStateToProps, {})(AlertNotification);