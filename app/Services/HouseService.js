import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HouseService{

  deleteHouse(id){
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
  }

  bidHouse(id){
    let house = ProxyState.houses.find(house => house.id === id)
    house.price+=1000
    ProxyState.houses = ProxyState.houses
  }

  createHouse(newHouse){
    let house = new House(newHouse.beds,newHouse.baths, newHouse.sqFt, newHouse.address, newHouse.price,newHouse.imgURL)
    ProxyState.houses = [...ProxyState.houses,house]
  }
}
export const houseService = new HouseService()