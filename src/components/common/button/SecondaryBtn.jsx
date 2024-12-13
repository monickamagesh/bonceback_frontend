import React from "react"
export default function SecondaryBtn(props){
    return(
        <div className='secondary_btn'>
            <p className="material-symbols-outlined">{props.icon}</p>
            <p>{props.btntext}</p>
      </div>
    )
}