import { generateId } from "../Utils/GenerateId.js"
// title
// description
// Rate
// Hours
// Company
export default class Job{
  constructor(title,desription, rate, hours, company){
    this.id=generateId()
    this.title=title
    this.desription=desription
    this.rate=rate
    this.hours=hours
    this.company=company
  }

  get Template(){
    return `<div class="card">
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${this.company}</h6>
      <p class="card-text">Hourly Rate: $${this.rate} | Work Schedule: ${this.hours}</p>
      <p class="card-text">Job Duties: ${this.desription}</p>
    </div>
  </div>
    `
  }
}