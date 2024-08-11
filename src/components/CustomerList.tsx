import React, { useCallback, useEffect, useRef, useState } from 'react'
import CustomerCard from './CustomerCard';
import { cursorTo } from 'readline';
import CustomerListLoadingSkeleton from './CustomerListLoadingSkeleton';

interface Customer {
    id: number;
    name: string;
    title: string;
}

interface CustomerListProps {
    selectedCustomerId : number;
    onCustomerSelect : (id : number) => void;
    customerList : Customer[];
    containerRef : any;
    handleScroll : () => void;
    loadMoreCustomers : () => void;
    loading : boolean;
}


const CustomerList : React.FC<CustomerListProps> = (props) => {

      useEffect(() => {
        props.loadMoreCustomers();
      }, []);

    useEffect(() => {
        const container = props.containerRef.current;
        if (container) {
          container.addEventListener('scroll', props.handleScroll);
          return () => container.removeEventListener('scroll', props.handleScroll);
        }
    }, [props.handleScroll]);

  return (
    <div  
        ref={props.containerRef}
        className='customer-list-container'
        style={{
            overflowY : "auto",
            maxHeight : "100vh",
            scrollbarWidth : "none",
            flexShrink : "0",
            borderRight : "1px solid #ccc",
            width : "400px",
            minHeight : "50vh"
        }}
    >
        {props.customerList.map((customerDetails) => (
            <CustomerCard
                key={customerDetails.id+Math.random()}
                name={customerDetails.name}
                title={customerDetails.title}
                isSelected={customerDetails.id === props.selectedCustomerId}
                onClick={() => props.onCustomerSelect(customerDetails.id)}
            />
        ))}
        <div 
            style={{
                display : props.loading ? "flex" : "none" , 
                textAlign : "center"
            }}
        >
            <CustomerListLoadingSkeleton customerListLength={props.customerList.length} />
        </div>
    </div>
  )
}

export default CustomerList