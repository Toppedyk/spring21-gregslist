import { ProxyState } from "../AppState.js";

function _drawJobs(){

}


export default class JobsController{
  constructor(){
  ProxyState.on('jobs',_drawJobs)
  _drawJobs()
  }
  

  
} 