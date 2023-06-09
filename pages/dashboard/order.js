import Head from 'next/head';
import { ordersData } from '../../data/data';
import { useContext } from 'react';
import { StateContext } from '../../Components/Layout';
import { PageTitle } from '../../Components/dashboard/PageTitle';
import TableForPages from '../../Components/dashboard/TableForPages';

function Order() {
  const { activeMenu, setActiveMenu } = useContext(StateContext);
  return (
    <>
      <Head>
        <title>Our Orders</title>
      </Head>
      <div className='py-3 lg:py-5 '>
        <PageTitle category='Page' page='Orders'/>
        <div id='table' className={`flex ${activeMenu === false ? 'md:justify-center' : ''}`}>
          <div>
            <TableForPages type='order' items={ordersData} one="Image" two="Item" 
              three="Customer Name" four="Total Amount" five='Status'
              six="Order ID" seven="Location" />
          </div>
        </div>
      </div>
    </>
  )
}
export default Order;