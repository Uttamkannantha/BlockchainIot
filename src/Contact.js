import React from 'react';

import './Appc.css';

import i1 from './hd.jpg';
import i2 from './ee.jpg';
import i3 from './kt.jpg';
import i4 from './hd.jpg';

function Contact() {
  return (
      <div className='Component-Bg'
        >

              <div class="rowc k">
                  <div class="columnc" >
                      <div class="cardc" style={{backgroundColor:"white"}}>
                      <img src={i3} alt="uttam" style= {{ width:"100%", height:"230px"}} />
                              <div class="containerc">
                                  <h2>Uttam Kannantha</h2>
                                  <p class="titlec"> B.E Student</p>
                                  <p>Blockchain Enthusiast</p>
                                  <p>ukannantha@gmail.com</p>

                              </div>
    </div>
                      </div>

                      <div class="columnc k">
                          <div class="cardc" style={{backgroundColor:"white"}}>
                      <img src={i1} alt="Rohan" style={{ width:"100%", height:"230px"}} />
                                  <div class="containerc">
                                      <h2>Rohan Gampa</h2>
                                      <p class="titlec">B.E Student</p>
                          <p>Blockchain Enthusiast</p>
                                      <p>rohangampa525@gmail.com</p>

                                  </div>
    </div>
                          </div>
                          <div class="columnc k">
                              <div class="cardc" style={{backgroundColor:"white"}}>
                      <img src={i2}alt="karthik" style={{width:"100%", height:"230px"}} />
                                      <div class="containerc">
                                          <h2>Karthik J Moger</h2>
                                          <p class="titlec">B.E Student</p>
                          <p>Blockchain Enthusiast</p>
                                          <p>karthikmoger1998@gmail.com</p>

                                      </div>
    </div>
                              </div>
                              <div class="columnc k">
                                  <div class="cardc" style={{backgroundColor:"white"}}>
                      <img src={i4} alt="poojith" style={{ width:"100%", height:"230px"}} />
                                          <div class="containerc">
                                              <h2>Poojith Kumar</h2>
                          <p class="titlec"> B.E Student</p>
                          <p>Blockchain Enthusiast</p>
                                              <p>poojithkumar964@gmail.com</p>

                                          </div>
    </div>
              </div>

                              </div>



    </div>
  );
}

export default Contact;
