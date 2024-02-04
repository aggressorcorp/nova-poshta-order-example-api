
import React, { useEffect, useState } from 'react';
import './App.css';
import items from './shared/data';
import ItemCard from './components/ItemCard/ItemCard';
import OrderCard from './components/OrderCard/OrderCard';
import { Resend } from "resend";
import axios from 'axios';

import { Modal, Button } from 'antd';

interface Item {
  Image: string,
  Price: number,
  Name: string,
  Desc: string
}
interface FormValues {
  pib: string,
  email: string,
  phone: number,
  area: string,
  village: string,
  deliveryPoint: string
}
function App() {
  const [valid, setValid] = useState(false)
  const [item, setItem] = useState<Item | null>(null)
  const [quantity, setQuantity] = useState<Number | null>()
  const [total, setTotal] = useState<Number | null>()
  const url = new URLSearchParams(window.location.search);
  const [modal1Open, setModal1Open] = useState(false);

  useEffect(()=>{
    const param = url.get('item')
    if(param){
      setValid(true)
      if(items[param]){
        setItem(items[param]);
      }
    }
    console.log(item)
  }, [valid, url])
 
  const handleQty = (qty: number, total: number) => {
    console.log('Changed QTY: ',qty)
    setQuantity(qty);
    setTotal(total)
  }
  const sendEmail = async (values: FormValues) => {
    const request = {
      values: values,
      quantity: quantity,
      total: total,
      item: item
    }
    const res = await axios.post('http://localhost:5000/api/send-email', request) //express wtih resend pkg
    if(res.data.success){
      console.log('OK')
      setModal1Open(true)
    } else {
      alert('Помилка з поштою. Перевірте введені дані')
    }
  }
  return (
    <div className='container-for-cart'>
      {
      valid && item !== null 
        ? 
        <>
          <ItemCard  item={item}  onQuantityChange={handleQty} /> 
          <OrderCard item={item} sendEmail={sendEmail}/> 
          <Modal
            title="Vertically centered modal dialog"
            centered
            open={modal1Open}
            onOk={() => setModal1Open(false)}
          >
            <p>Відправлено на опрацювання. Дякуємо за замовлення!</p>
          </Modal>
        </>
        : 'Not found Item'
      }
    </div>
  );
}

export default App;
