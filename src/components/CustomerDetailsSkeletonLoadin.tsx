import React from 'react'
import ImageListLoadingSkeleton from './ImageListLoadingSkeleton'

const CustomerDetailsSkeletonLoadin = () => {
  return (
    <div style={{backgroundColor : "#f0f0f0" , width : "100%" , height : "100vh"}}>
        <div 
            style={{
                marginLeft : "7%" , 
                marginRight : "7%",
                overflowY : "auto",
                maxHeight : "100vh",
                scrollbarWidth : "none",
                display : "flex",
                flexDirection : "column",
                alignItems : "center",
            }}
        >
            <div
                style={{
                    marginTop : "50px",
                    marginBottom : "30px",
                    backgroundColor : "#b8bbbf",
                    height : "30px",
                    width : "300px",
                    borderRadius : "10px"
                }}
            >
            </div>

            <div 
                style={{
                    width : "86%", 
                    backgroundColor : "#b8bbbf" ,
                    borderRadius : "10px",
                    height : "20px"
                }}
            
            >
            </div>
            <div 
                style={{
                    width : "86%", 
                    backgroundColor : "#b8bbbf" ,
                    borderRadius : "10px",
                    height : "20px",
                    marginTop : "8px"
                }}
            >
            </div>
            <div 
                style={{
                    width : "86%", 
                    backgroundColor : "#b8bbbf" ,
                    borderRadius : "10px",
                    height : "20px",
                    marginTop : "8px"
                }}
            >
            </div>
            <div 
                style={{
                    width : "86%", 
                    backgroundColor : "#b8bbbf" ,
                    borderRadius : "10px",
                    height : "20px",
                    marginTop : "8px"
                }}
            >
            </div>

            <div 
                style={{
                    width : "50%", 
                    backgroundColor : "#b8bbbf" ,
                    borderRadius : "10px",
                    height : "20px",
                    marginTop : "30px"
                }}
            >
            </div>

            <ImageListLoadingSkeleton />
        </div>
    </div>
  )
}

export default CustomerDetailsSkeletonLoadin