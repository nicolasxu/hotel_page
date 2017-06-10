export default {
  findLowestPriceByHid: findLowestPriceByHid,
  findPlansByHid: findPlansByHid
}

function findLowestPriceByHid(ht_id, rates) {
  let plans = []
  for (let i = 0; i < rates.length; i++) {
    if(rates[i].ht_id === ht_id) {
      plans = rates[i].plans
      break
    }
  }
  let prices = []
  
  plans.forEach(plan => {
    plan.prices.forEach(p => {
      prices.push(p.price)
    })
  })
  // console.log('prices' ,prices)
  let min = Math.min(...prices)
  console.log('id: ', ht_id)
  console.log('min', min)
  return min
}

function findPlansByHid(ht_id, rates) {
  let plans = []
  for (let i = 0; i < rates.length; i++) {
    if(rates[i].ht_id === ht_id) {
      plans = rates[i].plans
      break
    }
  }
  return plans
}

function getHotelById(hotels, ht_id) {

}

