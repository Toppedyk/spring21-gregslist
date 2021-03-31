import { generateId } from "../Utils/GenerateId.js"
// bedrooms
// bath
// sqFootage
// address
// price
// imgUrl
export default class House {
  constructor(bed, bath, sqFt, address, price, imgURL) {
    this.id = generateId()
    this.bed = bed
    this.bath=bath
    this.sqFt=sqFt
    this.address=address
    this.price=price
    this.imgURL=imgURL
  } 
  
  get Template(){
  return
  `
    <div class="col-md-4 mb-3">
      <div class="card shadow">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.address} - $${this.price.toFixed(2)}</h4>
              <p class="card-text">Beds: ${this.bed} | Bath: ${this.bath} | Square Footage:${this.sqFt}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.carsController.deleteHouse('${this.id}')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.carsController.bidHouse('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
}
}

