<template>
  <div class="hotel-list">
    
    <div class="list-header">

      <h1 class="header-text">5月28日- 5月31日 上海</h1>
      <div class="sorting-options">
        <span class="option" :class="{selected: sortBy=='price'}"><a href="javasctipt:void(0)" @click="sortByPrice">按价格</a></span>
        <span class="option" :class="{selected: sortBy=='star'}"><a href="javasctipt:void(0)" @click="sortByStar">按星级</a></span>
        <span class="option" :class="{selected: sortBy=='rating'}"><a href="javasctipt:void(0)">按评分</a></span>
      </div>
    </div>
    <ul class="list-container">
        <hotel-item v-for="(hotel,index) in sorted_hotels" :hotel="hotel" :key="index"></hotel-item>
    </ul>
  </div>
</template>

<script>
  import HotelItem from './HotelItem'
  import raw_hotel from '../data/hotel_pudong.js'
  import raw_plan from '../data/rate_plan.js'
  import uitls from '../util/utils.js'
  import store from '../util/store.js'

  export default {
    name: 'hotelList',
    components: {HotelItem},
    created () {
      console.log('hotel List created...')
      console.log('raw_hotel', raw_hotel)
      console.log('raw_plan', raw_plan)
    },
    data() {
      return { sortBy: 'price' /* 'price', 'star', 'rating' */} 
    },
    computed: {
      hotels() {
        let hotels = []
        raw_hotel.hotels.forEach(h => {
          let lowest_price = uitls.findLowestPriceByHid(h.ht_id,raw_plan.rates)
          if (lowest_price == 'Infinity') {
            lowest_price = 0
          }
          let theHotel = {
            id: h.ht_id,
            name: h.ht_ch_name,
            address: h.ch_addr,
            star: h.ht_star,
            lowest_price: lowest_price,
            imgUrl: h.pics[0].org_url
            // plans: utils.findPlansByHid(h.ht_id, raw_plan.rates)
          }
          // console.log(h.pics[0].small_url)

          hotels.push(theHotel)
        })
        store.hotels = hotels
        return hotels
      },
      sorted_hotels() {
        switch (this.sortBy) {
          case 'price':
          this.hotels.sort(function (a, b) {
            return a.lowest_price - b.lowest_price
          })
          break
          case 'star':
          this.hotels.sort(function (a, b) {
            return b.star - a.star 
          })
          break
          case 'rating':
          break
        }
        return this.hotels
      }
    },
    methods: {
      sortByStar() {
        this.sortBy = 'star'
      },
      sortByPrice() {
        this.sortBy = 'price'
      }
    }
  }

</script>

<style scoped lang="sass">
  $header_bk:#3f51b5;
  .hotel-list {
    .list-header {
      text-align: left;
      background-color: $header_bk;
      color: white;
      height: 270px;
      position: relative;
      padding-top: 20px;
      .header-text {
        font-size: 45px;
        font-weight: normal;
        padding-left: 2em;

      }
      .sorting-options {
        margin-left: 20px;
        position: absolute;
        bottom: 0;
      }
      .option {
        display: inline-block;
        height: 30px;
        padding: 2em;
        color: red;
        font-size: 30px;


        a {
          color: white;
          text-decoration:  none;
          &:hover {
            color: grey;
          }
        }
      }
      .option.selected {
        border-bottom: 5px solid white;
      }
    }
    .list-container {
      margin: 0;
      padding: 0;
    }
  }
   
    
  

</style>