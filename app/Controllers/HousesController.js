import { ProxyState } from "../AppState.js";
import {houseService} from '../Services/HouseService.js'

function _draw(){
  let template = ''
  let houses=ProxyState.houses
  houses.forEach(house =>{
    console.log(house)
    template+= house.Template
  })

  document.getElementById('houses').innerHTML= template
}

export default class HousesController{
  constructor(){
    ProxyState.on('houses',_draw)
    _draw()
  }

  deleteHouse(id){
    houseService.deleteHouse(id)
  }

  bidHouse(id){
    houseService.bidHouse(id)
  }

  createHouse(){
    window.event.preventDefault()
    const form = window.event.target
    let newHouse = {
      address: form.address.value,
      price: Number(form.price.value),
      beds: form.bed.value, 
      baths: form.bath.value,
      sqFt: form.sqFt.value,
      imgURL: form.imgURL.value
    }
    houseService.createHouse(newHouse)

    form.reset()
    $('#new-house-form').modal('hide')
  }
}