import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as  rs from 'react-bootstrap';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Tooltip from 'react-simple-tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class History extends Component {
  constructor(props, context) {
        super(props, context);



        this.state = {

        data:[]

        };
      }
componentDidMount(){
  let url=this.props.value;
  fetch(url,
  {
},
).then(response => {
  if (response.ok) {
    response.json().then(json => {

        this.setState({ data: ((json.result).reverse()).slice(0,5)});

      //console.log(json,json.result[0].blockHash,json.result[1].blockHash);
    });
  }
});

}
render(){
  return(

    <div>

    <section>
    <div >
      <div className="column" style={{backgroundColor:"#f0f0f0"}} id ="rcorners2">

          <table id="customers">
      <thead >
        <tr>
          <th style={{textAlign: 'center'}}><h4>BlockHash</h4></th>
           <th style={{textAlign: 'center'}}><h4>Time Stamp</h4></th>
           <th style={{textAlign: 'center'}}><h4>Block Number</h4></th>
           <th style={{textAlign: 'center'}}><h4>Gas Used</h4></th>
           <th style={{textAlign: 'center'}}><h4>Sent To</h4></th>
         </tr>
      </thead>
      {(this.state.data).map((post,index)=>{
      return(<tbody key={index}>
            <tr style={{fontSize: "20px"}}>
              <td ><Tooltip background="#404040"  placement="right" content = {post.blockHash}>{(post.blockHash).substring(0,30)+"......"}</Tooltip></td>
              <td>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(post.timeStamp*1000)}</td>
              <td>{post.blockNumber}</td>
              <td>{post.gasUsed}</td>
              <td><Tooltip background="#404040" content = {post.to}>{(post.to).substring(0,30)+"......"}</Tooltip></td>
            </tr>
        </tbody>
      )
      }
      )
      }
    </table>
      </div>
    </div>
    </section>
    </div>
  );
}

}


export default History;
