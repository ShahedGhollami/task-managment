import React from 'react'
const HeaderBoard = (props) => {
    return (
        <div className="border-radius5-top py-1 px-2 txt_bg">
           <div className="d-flex justify-content-between">
                <div>
                    <span className="f-14">
                        <span>{props.section.name}</span>{' '}
                    </span>
                </div>
              
            </div>
        </div>
    )
}
export default HeaderBoard