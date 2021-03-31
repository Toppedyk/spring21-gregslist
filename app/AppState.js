import Car from "./Models/Car.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car('Ford', 'Pinto', 1975, 1000, 'ITS HOT!', 'https://pbs.twimg.com/media/ETpZLKZXgAANyBw.jpg'),
    new Car('AMC', 'Gremlin', 1972, 1200, 'Gremlin Green!', 'https://cdn1.mecum.com/auctions/fl0120/fl0120-395915/images/1-1572992729058@2x.jpg?1574881322000'),
    new Car('Volkswagen', 'Rabbit', 1983, 2990, 'Not an actual rabbit', 'https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/546b400aba069_-_gti11-lg.jpg'),
    new Car('Zastava', 'Yugo', 1988, 100, 'spome rust', 'https://media.istockphoto.com/photos/old-rusty-red-broken-and-damaged-yugo-car-full-of-junk-parked-and-on-picture-id1056309302?s=612x612')
  ]

  houses=[
    new House(5,3,1800,'1535 w broadway',530000,'https://cdnassets.hw.net/63/39/a8f0d1e94ee6bae9e348c81c10d2/929-1102.jpg'),
    new House(3,2,1200,'800 N franklin st', 250000,'https://cdn.houseplansservices.com/content/9a0kud8eguqun8d72nctn0all2/w991.jpg?v=3'),
    new House(4,2,1500,'460 N front St.', 375000, 'https://cdnassets.hw.net/52/e3/78d0af434747989382b9616ae56e/2017-8-30-moonhoon-simple-house-16-edited.jpg'),
    new House(2,1.5,1100,'420 69th St.', 300120,'https://cdn.jhmrad.com/wp-content/uploads/simple-house-designs-philippines-cheap-design_519236.jpg')
  ]
}

// NOTE Oh oh.. its magic! Ya know!
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
