import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as  rs from 'react-bootstrap';
import web3 from './web3';
import lottery from './iot';
import logo from './md.jpg';
import Contact from "./Contact.js";
import Link from "react-router";
import{
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import Home from "./Home";
import History from "./History";
let url;
class App extends Component {

constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleShow3 = this.handleShow3.bind(this);
      this.handleClose3 = this.handleClose3.bind(this);
      this.handleShow1 = this.handleShow1.bind(this);
      this.handleClose1 = this.handleClose1.bind(this);
      this.handleShow2 = this.handleShow2.bind(this);
      this.handleClose2 = this.handleClose2.bind(this);
        this.EnterIotDevice= this.EnterIotDevice.bind(this);
        this.SendPrivateData= this.SendPrivateData.bind(this);
          this.PublishData= this.PublishData.bind(this);



      this.state = {
        show: false,
          show1: false,
          show2:false,
          show3:false,
        activeAddress : '0x493aBFb2aC57BE6a28FaC1d88E1686ABfdE25D55',
        apiKey:"CIWB7GRWS8FIJV242NHQUGXBN3QPW4QQTJ",
        add:"0x493aBFb2aC57BE6a28FaC1d88E1686ABfdE25D55",
        ar:['0x493aBFb2aC57BE6a28FaC1d88E1686ABfdE25D55','0x59c7811b82793DcA6192a2d97508986cB2506393'],
        data:[],
        enterIotAddress:'',
        message:'',
        toIotAddress:'',
        encryptedData:'om nama shivaya',
        readDataa:'',
        readDataa2:'',
        addressList:['0x493aBFb2aC57BE6a28FaC1d88E1686ABfdE25D55']


      };
    }


   handleClose() {
   this.setState({ show: false });
 }

 handleShow() {
   this.setState({ show: true });
 }
 handleClose1() {
 this.setState({ show1: false });
}


async handleShow1() {
 this.setState({ show1: true });
 this.setState({message : 'waiting k......'});
 const pdata = await lottery.methods.privateData().call();

 this.setState({message :'Your data is:  '});
 this.setState({readDataa :pdata});
 // const pdata = "post data"
 axios.post("http://localhost:5000/postData",{pdata}).then(res=>{
   console.log(res.data);
 })
 console.log("datatest" ,pdata);
 //this.setState({readData:pdata})
}

handleClose2() {
this.setState({ show2: false });
}

async handleShow2() {
this.setState({ show2: true });
this.setState({message : 'waiting......'});
const pdata = await lottery.methods.publicData().call();
this.setState({message :' Data is:  '});
this.setState({readDataa2 :pdata});
console.log("datatest2" ,pdata);
//this.setState({readData:pdata})
}

handleShow3() {
  this.setState({ show3: true });
}
handleClose3() {
this.setState({ show3: false });
}



 async EnterIotDevice(){
   this.setState({message : 'waiting......'});

     await lottery.methods.enterDevice(this.state.enterIotAddress).send({from:this.state.activeAddress });
     this.setState({message : 'Address successfully entered ......'});


     console.log(this.state.addressList);
        this.setState({ show: false });
          alert("Device has been successfully added");
 }
 encrypt = () => {
   axios.get("http://localhost:5000/encrypt").then(res=>{
     console.log(res);
     this.setState({
       encryptedData: res.data
     })
   })
 }
 async SendPrivateData(){
   await axios.get("http://localhost:5000/encrypt").then(res=>{
     console.log(res);
     this.setState({
       encryptedData: res.data,
       message : 'waiting on transaction......'
     })
   })
   // this.encrypt.bind(this)();
   // this.setState({message : 'waiting on transaction......'});
     await lottery.methods.inData(this.state.encryptedData,this.state.toIotAddress).send({from:this.state.activeAddress });
     this.setState({message : 'Message sent successfully......'});
        this.setState({ show: false });
          alert("Data has been successfully sent");
 }

async PublishData(){
  this.setState({message : 'waiting on transaction......'});

    await lottery.methods.publishData(this.state.encryptedData).send({from:this.state.activeAddress });
    this.setState({message : ''});
    alert("Data has been successfully published");
}

  async  componentDidMount(){

//const accounts = await web3.eth.getAccounts();
//this.setState({ar:accounts});
let base='http://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=';
let addr=this.state.add;
let mid='&startblock=0&endblock=9999999&sort=asc&apikey=';
let end=this.state.apiKey;
 url=base+addr+mid+end+'&c=json';





    }




  createSelectItems() {

     let items = [];
     for (let i = 0; i < this.state.ar.length; i++) {
          items.push(<option key={this.state.ar[i]} value={this.state.ar[i]}>{this.state.ar[i]}</option>);
          //here I will be creating my options dynamically based on
          //what props are currently passed to the parent component

console.log(this.state.ar[i]);
     }
     console.log(this.state.ar.length);
     return items;
 }
 onDropdownSelected(e) {
  //   console.log("THE VAL", e.target.value);
     //here you will see the current selected value of the select input
 }




 // When the user clicks the button, open the modal



render() {
//console.log(web3.version);

  return (

<div  style={{backgroundImage: "url(" +logo+ ")" , height:"625px", backgroundRepeat:"no-repeat" , backgroundSize :"cover", backgroundPosition:"center"}}>


<div style={{ fontFamily: "Times New Roman"}} >
  < rs.Navbar bg="dark" variant="dark">
    < rs.Navbar.Brand href="#home" style={{fontSize:"25px"}}>Iot interaction UI</ rs.Navbar.Brand>
    < rs.Nav className="mr-auto"  >

      < rs.Nav.Link href="./Home"style={{paddingRight:"50px",paddingLeft:"50px",fontSize:"20px"}}>Home</ rs.Nav.Link>
        < rs.Nav.Link href="https://www.rinkeby.io/#stats" target="_blank" style={{paddingRight:"50px" ,fontSize:"20px"}}>Blockchain stats</ rs.Nav.Link>
      < rs.Nav.Link  href="./Contact"style={{paddingRight:"50px" ,fontSize:"20px"}}>About Us</ rs.Nav.Link>



    </ rs.Nav>
       <h5   style={{color:"white", fontSize:"20px"}}>Address: {this.state.activeAddress}</h5>

  </ rs.Navbar>
  <br />

</div>



<div >


<select  className="button" style={{backgroundColor:""}} value = {this.state.activeAddress}
onChange = {event => this.setState({activeAddress : event.target.value})}>
 {this.createSelectItems()}
</select>

<button className="button " onClick={this.handleShow3} >Enter Device</button>



        <rs.Modal show={this.state.show3} onHide={this.handleClose3}>
          <rs.Modal.Header closeButton>
            <rs.Modal.Title>Enter Address</rs.Modal.Title>
          </rs.Modal.Header>
          <rs.Modal.Body>
          <input tpye="text"  placeholder="Device address is" style={{ width:"100%"}} value = {this.state.enterIotAddress}
          onChange = {event => this.setState({enterIotAddress : event.target.value})}></input>

          </rs.Modal.Body>
          <rs.Modal.Footer>

        <h3 > {this.state.message}</h3>
            <rs.Button variant="primary" onClick={this.EnterIotDevice}>
              Submit
            </rs.Button>
          </rs.Modal.Footer>
        </rs.Modal>

  <button className="button " onClick={this.handleShow} >Send Data Privately</button>



                <rs.Modal show={this.state.show} onHide={this.handleClose}>
                  <rs.Modal.Header closeButton>
                    <rs.Modal.Title>Enter reciever Address</rs.Modal.Title>
                  </rs.Modal.Header>
                  <rs.Modal.Body>
                  <input tpye="text" placeholder="Address is" style={{ width:"100%"}} value = {this.state.toIotAddress}
                  onChange = {event => this.setState({toIotAddress : event.target.value})}></input>

                  </rs.Modal.Body>
                  <rs.Modal.Footer>
                <h3 > {this.state.message}</h3>
                    <rs.Button variant="primary" onClick={this.SendPrivateData}>
                      Submit
                    </rs.Button>
                  </rs.Modal.Footer>
                </rs.Modal>

<button className="button " onClick ={this.PublishData}  >Publish data</button>

<button className="button " onClick ={this.handleShow1} >Read private data</button>
<rs.Modal show={this.state.show1} onHide={this.handleClose1}>
  <rs.Modal.Header closeButton>
    <rs.Modal.Title>Your data</rs.Modal.Title>
  </rs.Modal.Header>
  <rs.Modal.Body>
  {this.state.message}
  {this.state.readDataa}

  </rs.Modal.Body>
  <rs.Modal.Footer>

    <rs.Button variant="primary" onClick={this.handleClose1}>
      Done
    </rs.Button>
  </rs.Modal.Footer>
</rs.Modal>



<button className="button " onClick ={this.handleShow2} >Read published data</button>
<rs.Modal show={this.state.show2} onHide={this.handleClose2}>
  <rs.Modal.Header closeButton>
    <rs.Modal.Title>Your data</rs.Modal.Title>
  </rs.Modal.Header>
  <rs.Modal.Body>
  {this.state.message}
  {this.state.readDataa2}

  </rs.Modal.Body>
  <rs.Modal.Footer>

    <rs.Button variant="primary" onClick={this.handleClose2}>
      Done
    </rs.Button>
  </rs.Modal.Footer>
</rs.Modal>


</div>

<div style={{height:"20px"  }}>
</div>

<div className="nav">

<NavLink exact to="/History" activeClassName ="active"><button className="pagedir pagrdirbutton">Transactions</button></NavLink>
 <a href={"https://rinkeby.etherscan.io/address/"+this.state.activeAddress} target="_blank"><button  className="pagedir pagrdirbutton">See Etherscan</button>
</a></div>
<Switch>
<Route path="/Contact" render={()=><Contact value={Contact}/>}/>

<Route path="/History" render={()=><History value={url}/>}/>

</Switch>


</div>

  );
}
}
export default App;
