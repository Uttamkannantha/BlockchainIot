import web3 from './web3';
const address = '0x81D4abD8A08b9bB42dAb6dB72Ea11D3bCE2c813E';
const abi =[{"constant":true,"inputs":[],"name":"all","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"",
"type":"uint256"}],"name":"devices","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"toAddress",
"outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_iotaddress","type":"address"}],"name":"enterDevice","outputs":[],
"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"privateData","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view",
"type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],
"name":"fromAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPlayers",
"outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"realAllData","outputs":[{"name":"","type":"string"}],"payable":false,
"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"publicData","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":false,"inputs":[{"name":"_data","type":"string"},{"name":"_toAddress","type":"address"}],"name":"inData","outputs":[],"payable":false,"stateMutability":"nonpayable",
"type":"function"},{"constant":false,"inputs":[{"name":"_data","type":"string"}],"name":"publishData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],
"name":"readData","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable",
"type":"constructor"}];




export default new web3.eth.Contract(abi,address);
