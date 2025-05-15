import { useState, useEffect } from 'react'
import React from 'react';
import { Dados } from './App copy';


import './App.css'

  

  


function App() {
  const fotos = ["amb1.png", "amb2.png", "amb3.png", "amb4.png", "amb5.png", "amb6.png", "amb7.png"];
  let i = '.';
   
  function Click() {
      i = 0;
  }  
  function Click2() {
      i = 1;

  } 
  function Click3() {
      i = 2;
  } 
  function Click4() {
      i = 3;
  } 
 
    function Click5() {
      i = 4;
  } 
  function Click6() {
      i = 5;
  } 
  function Click7() {
    i = 6;
  }


  
  
  useEffect(() => {
    setInterval(() => {
      const img = document.getElementById('img');
      img.style.backgroundImage = 'url("/assets/'+ fotos[i] + '")';
    }, 100)

  }, [])



  
 
   

  
    
   

  return (
    <div className='main'>
      <title>Seletor de Cores.</title>
      <div className='BoasV'>
        <h1>Bem Vindo ao Seletor de Cores</h1>
        <img src='../assets/cores.jpg'/>       
      </div>
      <div className="fundo" id='fundo'>
       
      </div>

      <div className="imagem" id='img'>
        
      </div>

  
     
      <div className='botoes'>
        <button type='button' value='Op1' onClick={Click} className='formB' id='bt1'></button>
        <button type='button' value='Op2' onClick={Click2} className='formB' id='bt2'></button>
        <button type='button' value='Op3' onClick={Click3} className='formB' id='bt3'></button>
        <button type='button' value='Op4' onClick={Click4} className='formB' id='bt4'></button>
        <button type='button' value='Op5' onClick={Click5} className='formB' id='bt5'></button>
        <button type='button' value='Op6' onClick={Click6} className='formB' id='bt6'></button>
        <button type='button' value='Op7' onClick={Click7} className='formB' id='bt7'></button>
      </div>
      <Dados />
    </div>
  )
  
}

export default App
