import React, { useEffect, useState } from 'react'
import ImageListLoadingSkeleton from './ImageListLoadingSkeleton';

interface CustomerDetailsProps {
    customer : {
        id : number,
        name : string;
        title : string;
        address : string;
    }
}

const CustomerDetails : React.FC<CustomerDetailsProps> = (props) => {
    const [photoList , setPhotoList] = useState<string[]>([])
    const [loadingImage , setLoadingImages] = useState(true)

    const fetchImagesFromApi = async () => {
        try{
            // setLoadingImages(true)
            const urls : any = Array.from({ length: 9 },() => 
                `https://picsum.photos/200/200?random=${Math.random()}`
            );
            setPhotoList(urls)
            setLoadingImages(false)
        }catch(error) {
            console.error('Error fetching photos:', error);
        }
    }


    useEffect(() => {
        fetchImagesFromApi()
        const interval = setInterval(fetchImagesFromApi, 10000)
        return () => clearInterval(interval)
    } , [props.customer.id])

  return (
    <div style={{backgroundColor : "#f0f0f0" , height : "100vh"}}>
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

            {/* Customer Heading */}

            <div
                style={{
                    fontWeight : "600",
                    fontSize : "20px",
                    marginTop : "50px",
                    marginBottom : "40px"
                }}
            >
                {props.customer.name} details here
            </div>

            {/* Title  */}

            <div 
                style={{
                    width : "86%", 
                    textAlign : "center" , 
                    color : "grey" , 
                    fontWeight : "450"
                }}
            >
                <span 
                    style={{
                        fontWeight : "600",
                        fontSize : "20px",
                        marginBottom : "40px",
                        color : "black"
                    }}
                >
                    Title: 
                </span> {props.customer.title}
            </div>

            {/* Address  */}

            <div
                style={{ 
                    color : "grey" , 
                    fontWeight : "450",
                    marginTop : "30px",
                    marginBottom : "40px"
                }}
            >
                <span
                    style={{
                        fontWeight : "600",
                        fontSize : "20px",
                        marginBottom : "40px",
                        color : "black"
                    }}
                >
                    Address: 
                </span> {props.customer.address}
            </div>

            {/* Images  */}

            {loadingImage ?
                <ImageListLoadingSkeleton />
                :
            <div
                style={{
                    display : "grid",
                    gridTemplateColumns : "repeat(3,1fr)",
                    gap : "50px",
                    marginBottom : "20px"
                }}
            >
                {photoList.map((url, index) => (
                    <img
                        style={{
                            width : "100%",
                            height : "auto",
                            borderRadius : "15px",
                            boxShadow : "1px 1px 10px 0px lightgrey",
                        }}
                        key={index} 
                        src={url} 
                        alt="Customer" />
                ))}
            </div>
            }
        </div>
    </div>
  )
}

export default CustomerDetails