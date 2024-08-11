import React, { useState } from 'react'

interface CustomerListLoadingSkeletonProps {
    customerListLength : number
}

const CustomerListLoadingSkeleton : React.FC<CustomerListLoadingSkeletonProps> = (props) => {
    
  return (
    <div>
        {
            props.customerListLength !==0 ?
            <div
                style={{
                    height : "130px",
                    borderBottom : "1px solid #ccc",
                    backgroundColor : "#f0f0f0",
                    padding : "20px",
                    width : "360px"
                }}
            >
                <div 
                    style={{
                        height : "30px" , 
                        backgroundColor : "#b8bbbf", 
                        width:"120px",
                        borderRadius : "10px"
                    }}>
                </div>
                <div 
                    style={{
                        height : "20px" , 
                        backgroundColor : "#b8bbbf", 
                        width:"360px",
                        borderRadius : "10px",
                        marginTop : "20px"
                    }}>
                </div>
                <div 
                    style={{
                        height : "20px" , 
                        backgroundColor : "#b8bbbf", 
                        width:"360px",
                        borderRadius : "10px",
                        marginTop : "8px",
                    }}>
                </div>
                <div 
                    style={{
                        height : "20px" , 
                        backgroundColor : "#b8bbbf", 
                        width:"360px",
                        borderRadius : "10px",
                        marginTop : "8px",
                    }}>
                </div>
                <div></div>
            </div>
            :
            [1,1,1,1,1,1].map((item , index) => {
                return (
                    <div
                        key={index}
                        style={{
                            height : "130px",
                            borderBottom : "1px solid #ccc",
                            backgroundColor : "#f0f0f0",
                            padding : "20px",
                            width : "360px"
                        }}
                    >
                        <div 
                            style={{
                                height : "30px" , 
                                backgroundColor : "#b8bbbf", 
                                width:"120px",
                                borderRadius : "10px"
                            }}>
                        </div>
                        <div 
                            style={{
                                height : "20px" , 
                                backgroundColor : "#b8bbbf", 
                                width:"360px",
                                borderRadius : "10px",
                                marginTop : "20px"
                            }}>
                        </div>
                        <div 
                            style={{
                                height : "20px" , 
                                backgroundColor : "#b8bbbf", 
                                width:"360px",
                                borderRadius : "10px",
                                marginTop : "8px",
                            }}>
                        </div>
                        <div 
                            style={{
                                height : "20px" , 
                                backgroundColor : "#b8bbbf", 
                                width:"360px",
                                borderRadius : "10px",
                                marginTop : "8px",
                            }}>
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default CustomerListLoadingSkeleton