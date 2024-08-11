import React from 'react'

const ImageListLoadingSkeleton = () => {
  return (
    <div style={{marginTop : "30px"}}>
        <div
            style={{
                display : "grid",
                gridTemplateColumns : "repeat(3,1fr)",
                gap : "50px",
                marginBottom : "20px"
            }}
        >
            {[1,1,1,1,1,1].map((item, index) => (
                <div
                    style={{
                        width : "200px",
                        height : "200px",
                        borderRadius : "15px",
                        backgroundColor : "#b8bbbf"
                    }}
                    key={index} 
                >
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageListLoadingSkeleton