import React from 'react'

interface CustomerCardProps {
    name : string;
    title : string;
    isSelected : boolean;
    onClick : () => void;
}

const CustomerCard : React.FC<CustomerCardProps> = (props) => {
  return (
    <div
        className='customer-card-container'
        onClick={props.onClick}
        style={{
          height : "130px",
          padding : "20px",
          cursor : "pointer",
          borderBottom : "1px solid #ccc",
          backgroundColor : props.isSelected ? "#f0f0f0" : ""
        }}
    >

        {/* Name */}

        <div 
          className='customer-card-name'
          style={{
            fontWeight : "600",
            fontSize : "19px"
          }}
        >
          {props.name}
        </div>

          {/* Title */}

        <p 
          className='customer-card-title' 
          style={{
            display : "-webkit-box",
            WebkitBoxOrient : "vertical",
            textOverflow : "ellipsis",
            WebkitLineClamp : 4, 
            overflow : "hidden",
            color : "grey",
            fontSize : "15px"
          }}
        >
            {props.title}
        </p>
    </div>
  )
}

export default CustomerCard