<template>
  <div>
    <nav class="order-nav">
      <ul>
        <li style="width: 33.333333333333%">
          <a
            id="onlinepay_orders_count"
          
            class="pd-pay"
            style="background-image: url(../assets/img/fukuan1.png)"
          >待付款</a>
        </li>
        <li style="width: 33.333333333333%">
          <a
            id="confirm_orders_count"
          
            style="background-image: url(../assets/img/shouhuo.png)"
          >待收货</a>
        </li>
        <li style="width: 33.333333333333%">
          <a
           
            class="pd-pay"
            style="background-image: url(../assets/img/pd-return.png)"
          >退换货</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
.order-nav{
        border-bottom: 12px solid #f6f6f6;
}
ul{
    overflow: hidden;
padding-left: 0px;
margin: 0px;
background: white;
}
    .order-nav li{
            display: inline-block;
    float: left;
        height: 60px;
    }
   .order-nav li a{
            position: relative;
    display: inline-block;
    width: 100%;
    padding: 2.6rem 0 .25rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.2rem;
    line-height: .6rem;
    color: #4d525d;
    text-align: center;
    }
</style>
