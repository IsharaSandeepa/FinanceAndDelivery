import React,{Fragment, useState, useEffect} from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { useDispatch , useSelector } from 'react-redux'
import { getAllorders } from '../../actions/orderActions'
import { getOdersCount } from '../../actions/adminDashAction'

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Admin_nav from '../layout/AdminNav';

import '../style/adminAllOrdersReport.css'
import "react-datetime/css/react-datetime.css";
import '../style/home.css';
import '../style/adminFeedback.css'

//For Report Generation
import jsPdf from 'jspdf';
import 'jspdf-autotable';
  

const AdminAllOrdersReport = ({match}) => {

  const disptach = useDispatch();

  const {loading,orders,totalAmount,noOfItems,count,error} = useSelector(state => state.orders)

  const keyword = match.params.keyword

  const [pStatus, setPStatus] = useState('')
  const [oStatus, setOStatus] = useState('')
  const [dStatus, setDStatus] = useState('')


  
  
  useEffect(() => {

    disptach(getAllorders(keyword,pStatus,oStatus,dStatus));

  },[disptach, error, keyword, pStatus,oStatus,dStatus])


  const mystyleOrderReport = {
    color: "white",
    backgroundColor: "#02074f",
    fontFamily: "Arial",
    height:"40px",
  };

  const mystyleOrderReportRow = {
    color: "black",
    padding: "60px",
    fontFamily: "Arial",
    height:"40px",
  };

  

  //import report
  function jsPdfGenerator  ()  {
    //alert("Done!", "Your Report is Downloding!", "success")    
    //new document in jspdf
    const doc = new jsPdf('l', 'pt', 'a3');
    doc.text(600, 20, 'Order Details Report', { align: 'center' },);
    doc.autoTable({ html: '#Order-table' })
    doc.autoTable({
      columnStyles: { europe: { halign: 'OrderDetailsPdf' } },
      margin: { top: 10 },
    })
    //save the pdf
    doc.save("Order Details.pdf");
  }
//end report


    return (
        <Fragment>
          <Header/>
          <section className="container_yo">
              <Admin_nav/>
          </section>
  
          <section className="container55555">
                <div>

                  <meta charSet="UTF-8" />
                  <link href="https://fonts.googleapis.com/css?family=Ek+Mukta:300,400,600|Open+Sans:400,800" rel="stylesheet" />
                  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />

                  <button className="buttonOrderReport" onClick ={jsPdfGenerator}><span> Generate Report PDF</span></button>

                  <div className="pdiv">
                    <p className="p201report">Payment Status </p>
                    <p className="p201report">Order Status</p>
                    <p className="p201report">Delivery Status</p>                    
                  </div>
                  <h2 className="h201report">Orders Dashboard </h2>
                  
                  
                  <div>
                    {/*------------------------------------------------------------------------------------------*/}
        
                    {/*Option*/}
                    <div className="filter">
                      <form>
                        <div className="wrapper">
                          <input type="radio" name="select" id="option-1" onClick={pStatus => setPStatus('')}defaultChecked />
                          <input type="radio" name="select" id="option-2" onClick={pStatus => setPStatus('Pending')}/>
                          <input type="radio" name="select" id="option-3" onClick={pStatus => setPStatus('Paid')}/>


                            <label htmlFor="option-1" className="option option-1">
                              <span>All</span>
                            </label>
                            <label htmlFor="option-2" className="option option-2">
                              <span>Pending</span>
                            </label>
                              <label htmlFor="option-3" className="option option-3">
                                <span>Paid</span>
                            </label>

                        </div>
                      </form>
                      <form>
                        <div className="wrapper">
                          <input type="radio" name="select" id="option-4" onClick={oStatus => setOStatus('')} defaultChecked />
                          <input type="radio" name="select" id="option-5" onClick={oStatus => setOStatus('Pending')} />
                          <input type="radio" name="select" id="option-6" onClick={oStatus => setOStatus('Baking')} />
                          <input type="radio" name="select" id="option-7" onClick={oStatus => setOStatus('Baked')} />
                          
                          <label htmlFor="option-4" className="option option-4">
                            <span>All</span>
                          </label>
                          <label htmlFor="option-5" className="option option-5">
                            <span>Pending</span>
                          </label>
                          <label htmlFor="option-6" className="option option-6">
                            <span>Baking</span>
                          </label>
                          <label htmlFor="option-7" className="option option-7">
                            <span>Baked</span>
                          </label>
                        </div>
                      </form>
                      <div>
                        <div className="wrapper1111">
                          <input type="radio" name="select" id="option-8" onClick={dStatus => setDStatus('')} defaultChecked />
                          <input type="radio" name="select" id="option-9" onClick={dStatus => setDStatus('Pending')} />
                          <input type="radio" name="select" id="option-10" onClick={dStatus => setDStatus('Delivering')} />
                          <input type="radio" name="select" id="option-11" onClick={dStatus => setDStatus('Delivered')} />
                          <label htmlFor="option-8" className="option option-8">
                            <span>All</span>
                          </label>
                          <label htmlFor="option-9" className="option option-9">
                            <span>Pending</span>
                          </label>
                          <label htmlFor="option-10" className="option option-10">
                            <span>Delivering</span>
                          </label>
                          <label htmlFor="option-11" className="option option-11">
                            <span>Delivered</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/*----------------------------------------------------------------------------------------------*/}

                   

                     <table id = 'Order-table' className = "tableOrderReport">
                        <tr style={mystyleOrderReport}>
                          <td  >Order Id</td>
                          <td >Date</td>
                          <td >Customer Name</td>
                          <td >No of Items</td>
                          <td >Total Price</td>
                          <td >Payment Status</td>
                          <td >Order Status</td>
                          <td >Deliver Status</td>
                        </tr>
                        <br/>
                        {orders && orders.map(order => (      
                                    
                        <tr key={order._id} style={mystyleOrderReportRow}>
                          <td  data-label="Order Id">{order._id}</td>
                          <td  data-label="Date">{String(order.createdAt).substring(0,10)}</td>
                          <td  data-label="Customer Name">{order.customerName}</td>
                          <td  data-label="No of Items">{order.orderItems.length}</td>
                          <td  data-label="Total Price">{order.totPrice}</td>
                          <td  data-label="Payment Status" >{order.paymentInfo.paymentStatus}</td>
                          <td  data-label="Order Status">{order.orderStatus}</td>
                          <td  data-label="Deliver Status">{order.deliveryInfo.deliveryStatus}</td>
                        </tr>
                        
                        ))}
                        </table>

                      
                    
                    {/* --------------------------------------------------------------------------------------- */}
                    <div>
                    </div></div></div>
                    </section>
            
            
            </Fragment>
  )
}

  export default AdminAllOrdersReport