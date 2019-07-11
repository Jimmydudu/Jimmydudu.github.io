import Vue from "vue";
import Router from "vue-router";
import home from "./views/home.vue";
import category from "./views/category.vue";
import car from "./views/car.vue";
import my from "./views/my.vue";
import tushu1 from "./components/tushu1.vue";
// import tushu2 from "./components/tushu2.vue";
// import tushu3 from "./components/tushu3.vue";
// import tushu4 from "./components/tushu4.vue";
// import tushu5 from "./components/tushu5.vue";
// import tushu6 from "./components/tushu6.vue";
// import tushu7 from "./components/tushu7.vue";
// import tushu8 from "./components/tushu8.vue";
// import tushu9 from "./components/tushu9.vue";
// import tushu10 from "./components/tushu10.vue";
// import tushu11 from "./components/tushu11.vue";
import aa from './views/aa.vue'
import index from './views/index.vue'
// import aa3 from "./components/aa3.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {path:"/",component:index},
    // {path:"/",redirect:'/home'},
    {path:"/home",component:home,
    // children:[{path:"aa",component:aa}]
  },
    { path:"/aa",
    name: 0,
    component:aa,
    },
    {path:"/category",component:category,
    // {path:"/category",redirect:"/category/tushu",
    children:[
      // {path:"/",component:tushu1},
      {path:"/",redirect:"/category/tushu1"},
      {path:"tushu1",component:tushu1},
    {path:"tushu2",component:tushu1},
    {path:"tushu3",component:tushu1},
    {path:"tushu4",component:tushu1},
    {path:"tushu5",component:tushu1},
    {path:"tushu6",component:tushu1},
    {path:"tushu7",component:tushu1},
    {path:"tushu8",component:tushu1},
    {path:"tushu9",component:tushu1},
    {path:"tushu10",component:tushu1},
    {path:"tushu11",component:tushu1},
    
  ]
  },
    {path:"/car",component:car},
    {path:"/my",component:my,
    
  },
    {
      path: "/gg",
      name: "广告页面",
      component: ()=>import("./views/Gg.vue")
    },
    {
      path: "/search",
      name: "搜索",
      component: ()=>import("./components/searchview.vue")
    },
    {
      path: "/login",
      name: "搜索",
      component: ()=>import("./views/login.vue")
    },
    {
      path: "/shoucang",
      name: "搜索",
      component: ()=>import("./views/shoucang.vue")
    },
    {
      path: "/likelist",
      name: "搜索",
      component: ()=>import("./views/likelist.vue")
    },
  ],
  linkActiveClass:"is-selected"
});
