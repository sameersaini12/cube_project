import React, { useCallback, useRef, useState } from 'react'
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import "./styles.css"
import CustomerDetailsSkeletonLoadin from './components/CustomerDetailsSkeletonLoadin';

interface Customer {
  id: number;
  name: string;
  title: string;
}

const BATCH_SIZE = 10
const ITEM_HEIGHT = 130

const App : React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number>(1);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0); 
  const containerRef = useRef<HTMLDivElement | null>(null);

  const fetchCustomers = (start: number, limit: number): Promise<Customer[]> => {
      return new Promise((resolve) => {
        if(start<=1000) {
          setTimeout(() => {
            const newCustomers = Array.from({ length: limit }, (_, index) => ({
              id: start + index+1,
              name: `Customer ${start + index + 1}`,
              title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              address : `House No. ${start+index + 1} , Village abc, Kurukshetra, Haryana, India`
            }));
            resolve(newCustomers);
          }, 1000);
        }
      });
  };

  const loadMoreCustomers = useCallback(async () => {
    setLoading(true);
    const newCustomers = await fetchCustomers(page * BATCH_SIZE, BATCH_SIZE);
    if(page===0) {
        setCustomers(newCustomers)
        setPage(1)
    }else {
        setCustomers((prevCustomers) => [...prevCustomers, ...newCustomers]);
        setPage(page+1)
    }
    setLoading(false);
  }, [page]);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - ITEM_HEIGHT *2 && !loading) {
        console.log("load()")
        loadMoreCustomers();
      }
    }
  }, [loading, loadMoreCustomers]);

  const selectedCustomer : any = customers.find((customer) => customer.id === selectedCustomerId);
  return (
    <div 
      className='app-container'
      style={{
        display : "flex",
      }}
    >
      <div className='app-container-customer-list'>
        <CustomerList
          customerList={customers}
          selectedCustomerId={selectedCustomerId}
          onCustomerSelect={setSelectedCustomerId}
          containerRef={containerRef}
          handleScroll={handleScroll}
          loadMoreCustomers={loadMoreCustomers}
          loading={loading}
        />
      </div>
      <div style={{width : "100%"}}>
          {customers.length>0 ?
              <CustomerDetails 
                customer={selectedCustomer} 
              />
              :
              <CustomerDetailsSkeletonLoadin />
          }
      </div>
    </div>
  )
}

export default App
