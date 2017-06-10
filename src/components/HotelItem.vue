<template>
  <li class="hotel-item">
    
    <div class="head-img">
    
      <img :src=" '/static/' + hotel.imgUrl" :alt="hotel.name">
      
    </div>
    <div class="text">
      <h1 class="hotel-name">
      
      <router-link :to="{name: 'HotelDetail', params: {id: hotel.id }}">
        {{hotel.name}}
      </router-link>
      </h1>
      <h3 class="hotel-star">{{starStr}}</h3>
      <h4 class="hotel-address">{{hotel.address}}</h4>
    </div>
    <div class="price">
      ¥{{hotel.lowest_price}}
      <span class="start">起</span>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'hotelItem',
    created() {
      console.log('hotel item created')
    },
    data() {
      return {}
    },
    computed: {
      starStr () {
        let starCount = parseInt(this.hotel.star)
        let str = ''
        for(var i = 0; i < starCount; i++) {
          str = str + '★'
        }

        return str
      },
      imgUrlPrepended () {
      }
    },
    props: ['hotel'] ,
    methods: {
      goToDetail() {
        // this.$router.go
        console.log('go to: ' + this.hotel.id)
      },
      loadImage() {
        // return require('~assets' + this.imgUrl)
      }
    }
  }

</script>

<style scoped lang="sass">
$gray_text: #777777;
$price_gold_color: #c9ad6f;
$star_color: #f6a623;
$border-grey: #e0e0e0;
  .hotel-item {
    list-style: none;
    border-bottom: 1px solid $border-grey;
    .head-img {
      display: inline-block;
      max-width: 300px;
      width: 29%;
      margin-top: 3em;
    }
    .text {
      display: inline-block;
      width: 48%;
      .hotel-name {
        font-size: 38px;
        font-weight: normal;
        color: black;
        margin-top: 0.2em;
        margin-bottom: 0;
        a {
          text-decoration: none;
          color: black;
          &:hover {
            background-color: grey;
          }

        }
      }
      .hotel-star {
        color: $star_color;
        font-size: 40px;
        margin-top: 0;
      }
      .hotel-address {
        color: $gray_text;
        font-size: 40px;
        font-weight: normal;
        margin-bottom: 0.4em;
        margin-top: 1em;
      }
    }
    .price {
      display: inline-block;
      width: 18%;
      vertical-align: top;
      margin-top: .5em;
      text-align: right;
      color: $price_gold_color;
      font-size: 40px;
      font-weight: bold;
      .start {
        color: $gray_text;
      }
    }
  }

</style>