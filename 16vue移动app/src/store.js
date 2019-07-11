import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //购物者
    iflog:false,  //my页面的登陆是否成功
    yonghuming:'', //用户名
    likenum:0,  //收藏商品数
    likearray:[],  //收藏商品的数组
    dingnum:0,    //订单个数
    dingarray:[],   //订单数组
    nowtime:null,   //当前时间
    carnum:0,
    newcarlrnght:0,
    newcar:[],
    yuan:[],
    geshu:1,
    shudanxiangqing:[{
      // title:"id 1",
      article:"月亮和六便士（全新导读无删节详注版！ 半年创当当110000名读者五星好评奇迹)",
      part:"口碑爆棚的现象级畅销书！毛姆研究专家苏福忠译作，当当书香节一天狂销10000+！历史销量名列同名书前列！村上春树连读两遍” 。",
      produce:"口碑爆棚的现象级畅销书！毛姆研究专家苏福忠译作，当当书香节一天狂销10000+！历史销量名列同名书前列！村上春树连读两遍，张爱玲感动推荐。知乎网友惊叹“可惜我不是在十几岁读的这本书” 。",
      price1:"¥",
      paice2:"10.50",
      zhe:"(3.89折)",
      lia:"当当自营",
      lic:"满减",
      imgsrc: "../assets/img/book1.jpg",
      author:"〔英〕毛姆 著 苏福忠 译 ",
      chuban:"时代文艺出版社，2017年09月",
      rank:"23位",
      fenlei:"图书>小说>社会",
      to:"/aa?id=0",
      index:0,
      say:"看完了这本书，我觉得主人公真的很有勇气，为了自己的梦想，可以放弃原本十分美好的生活，虽然可能是在他人看来。在最后他的成就的升华，也是很感人的",
      imglist:[ "./assets/img/xiangqing1.jpg",
      "../assets/img/xiangqing2.jpg",
      "../assets/img/xiangqing3.jpg",
      "../assets/img/xiangqing4.jpg",
      "../assets/img/xiangqing5.jpg"],
      times:1,
      isshow:true,
    },{
      article:"追风筝的人（2018年新版）",
      part:"（为你，千千万万遍！快乐大本营高圆圆感动推荐，朗读者张一山深情诵读，窦靖童创作灵感的来源，奥巴马送给女儿的新年礼物。）",
      price1:"¥",
      paice2:"34.20",
      zhe:"(9.51折)",
      lia:"当当自营",
      lic:"满减",
      imgsrc: "../assets/img/book3.jpg",
      author:"  (美)卡勒德·胡赛尼(Khaled Hosseini) 著，李继宏 译 ",
      chuban:"上海人民出版社，2006年05月",
      rank:"6位",
      fenlei:"图书>小说>世界名著>其他地区",
      to:"/aa?id=1",
      index:1,
      say:"为你，千千万万遍。这是看完这本书我最大的感受，因为其他感受真的无法用需要描述。既叹息人物所处时代的悲哀，又感叹阿米尔当时个性中的无力，如果是我，我会怎样做呢？经常提问自己，却不知怎样回答。故事情节跌宕起伏，好多梗是我想都没想到的，以至于后来，为了知道人物命运的走向，基本时时刻刻把着书。人类最可贵最长久的便是友情，任何一个人脱离了友情注定是孤独的。",
      imglist:[ 
      "../assets/img/zhui1.jpg",
      "../assets/img/zhui2.jpg",
      "../assets/img/zhui3.jpg",
      ],
      times:1,
      isshow:true,
    },{
      article:"自卑与超越（白岩松推荐，超越自卑完整全译本）",
      part:"当当五星畅销书，阿德勒与弗洛伊德、荣格并称为20世纪三大心理学家。自卑感，是人类处境得以改善的动力之源。白岩松推荐!",
      price1:"¥",
      paice2:"22.80",
      zhe:"(7.13折)",
      lia:"当当自营",
      lic:"满减",
      imgsrc: "../assets/img/book2.jpg",
      author:"   阿尔弗雷德阿德勒著，杨颖 译 ",
      chuban:"浙江文艺出版社，2016年01月",
      rank:"20位",
      fenlei:"图书>心理学>心理学经典著作",
      to:"/aa?id=2",
      index:1,
      say:"自卑与超越有太多版本，有些版本很菜，但这一版我为他呐喊，这一版是我在书店和其他版本对比后选中的。",
      imglist:[ 
        "../assets/img/zibei1.jpg",
        "../assets/img/zibei2.jpg",
        "../assets/img/zibei3.jpg",
        "../assets/img/zibei4.jpg",
        "../assets/img/zibei5.jpg",
        ],
        times:1,
        isshow:true,
    },
  {
    article:"福尔摩斯探案集（中小学新课标必读名著）70000多名读者热评！",
    part:"23位著名语文教研员联袂推荐 智慧熊联合商务印书馆 童趣倾力打造 新老版本任意发货",
    price1:"¥",
    paice2:"14.20",
    zhe:"(7.98折)",
    lia:"当当自营",
    lic:"满减",
    imgsrc: "../assets/img/book4.jpg",
    author:"  (英)柯南 道尔，童趣出版有限公司   ",
    chuban:"人民邮电出版社，2014年03月",
    rank:"4位",
    fenlei:"图书>中小学教辅>中小学阅读>新课标",
    to:"/aa?id=3",
    index:1,
    say:"12个案例。应该是福尔摩斯第一季。纸张质量不错。值得购买。",
    imglist:[ 
      "../assets/img/book4.jpg",
      "../assets/img/fu2.jpg",
      "../assets/img/fu3.jpg",
      "../assets/img/fu4.jpg",
      ],
      times:1,
      isshow:true,
  },{
    article:"儿童情绪管理与性格培养绘本--输不起的莎莉：教孩子如何面对输赢",
    part:"美国心理学会心理学专家为3-6岁儿童量身打造。学会正确面对输赢关系。美国妈妈的选择奖儿童绘本类金奖，中国zui美绘本奖。",
    price1:"¥",
    paice2:"6.40",
    zhe:"(5.00折)",
    lia:"当当自营",
    lic:"满减",
    imgsrc: "../assets/img/book5.jpg",
    author:"  (美)弗兰克·希洛(Frank J. Sileo)著；   ",
    chuban:"化学工业出版社，2014年02月",
    rank:"4位",
    fenlei:"图书>童书>幼儿启蒙>图画故事",
    to:"/aa?id=4",
    index:1,
    say:"她任何事都喜欢是第一，被同学起外号“输不起的沙粒”，在老师和妈妈的帮助下，她发生了改变。",
    imglist:[ 
      "../assets/img/book5.jpg",
      "../assets/img/er2.jpg",
      "../assets/img/er3.jpg",
      "../assets/img/er4.jpg",
      ],
      times:1,
      isshow:true,
  },{
    article:"书本里的蚂蚁：中国儿童文学大奖名家名作美绘系列-读出想象力（第一辑）",
    part:"中国儿童文学大奖名家名作美绘系列-读出想象力(第一辑) ",
    price1:"¥",
    paice2:"11.00",
    zhe:"(5.00折)",
    lia:"当当自营",
    lic:"满减",
    imgsrc: "../assets/img/book6.jpg",
    author:"   王一梅   ",
    chuban:"天地出版社，2019年04月",
    rank:"4位",
    fenlei:"图书>童书>中国儿童文学>成长/校园小说",
    to:"/aa?id=5",
    index:1,
    say:"她任何事都喜欢是第一，被同学起外号“输不起的沙粒”，在老师和妈妈的帮助下，她发生了改变。",
    imglist:[ 
      "../assets/img/book6.jpg",
   
      ],
      times:1,
      isshow:true,
  },{
    article:"尼克.胡哲——我和世界不一样",
    part:"没有一个人比他更令人震撼，没有一个人的故事比他更能带给你希望，解密突破人生边界的勇士。 ",
    price1:"¥",
    paice2:"12.50",
    zhe:"(5.00折)",
    lia:"当当自营",
    lic:"满减",
    imgsrc: "../assets/img/book7.jpg",
    author:" 东方晓  ",
    chuban:"哈尔滨出版社，2013年01月",
    rank:"4位",
    fenlei:"图书>传记>人物合集",
    to:"/aa?id=6",
    index:1,
    say:"她任何事都喜欢是第一，被同学起外号“输不起的沙粒”，在老师和妈妈的帮助下，她发生了改变。",
    imglist:[ 
      "../assets/img/book7.jpg",
   
      ],
      times:1,
      isshow:true,
  },{
    article:"钱锺书（钱锺书传记）",
    part:"杨绛先生生前亲自审阅的个人全传，钱锺书逝世二十周年纪念版，包含钱锺书与作者四十年前在美国的珍贵合影 ",
    price1:"¥",
    paice2:"29.00",
    zhe:"(5.00折)",
    lia:"当当自营",
    lic:"满减",
    imgsrc: "../assets/img/book8.jpg",
    author:" 汤晏  ",
    chuban:"文化发展出版社，2019年01月",
    rank:"459位",
    fenlei:"图书>传记>文学家",
    to:"/aa?id=7",
    index:1,
    say:"她任何事都喜欢是第一，被同学起外号“输不起的沙粒”，在老师和妈妈的帮助下，她发生了改变。",
    imglist:[ 
      "../assets/img/book8.jpg",
      "../assets/img/qian2.jpg",
      "../assets/img/qian33.jpg",
      "../assets/img/qian4.jpg",
      "../assets/img/qian5.jpg",
      "../assets/img/qian6.jpg",
   
      ],
      times:1,
      isshow:true,
  },
{
  article:"活着（2017年新版）",
    part:"余华是我国当代著名作家，也是享誉世界的小说家，曾荣获众多国内外奖项。已成为中国乃至世界当代文学的经典。 ",
    price1:"¥",
    paice2:"14.00",
    zhe:"(5.00折)",
    lia:"当当自营",
    lic:"满减",
    imgsrc: "../assets/img/book9.jpg",
    author:" 余华  ",
    chuban:"作家出版社，2012年08月",
    rank:"2位",
    fenlei:"图书>小说>社会",
    to:"/aa?id=8",
    index:1,
    say:"《活着》是作家余华的代表作之一，讲诉了在大时代背景下，随着内战、三反五反，大跃进，文化大革命等社会变革。",
    imglist:[ 
      "../assets/img/book9.jpg",
      "../assets/img/huo2.jpg",
      "../assets/img/huo3.jpg",
      "../assets/img/huo4.jpg",
      ],
      times:1,
      isshow:true,
},{
  article:"丰子恺万般滋味，都是生活",
  part:"（回馈升级：现在下单即有机会获帆布包等丰子恺文创礼品一份，详见彩图）丰子恺诞辰120周年纪念！全彩插图珍藏本，丰子恺*温暖的散文作品。 ",
  price1:"¥",
  paice2:"21.00",
  zhe:"(5.00折)",
  lia:"当当自营",
  lic:"满减",
  imgsrc: "../assets/img/book10.jpg",
  author:" 丰子恺   ",
  chuban:"华中科技大学出版社，2018年09月",
  rank:"1位",
  fenlei:"图书>文学>中国现当代随笔",
  to:"/aa?id=9",
  index:1,
  say:"《活着》是作家余华的代表作之一，讲诉了在大时代背景下，随着内战、三反五反，大跃进，文化大革命等社会变革。",
  imglist:[ 
    "../assets/img/book10.jpg",
    "../assets/img/feng2.jpg",
    "../assets/img/feng3.jpg",

    ],
    times:1,
    isshow:true,
}]
     
   
  },
  mutations: {
    addcar(state ,obj){
      // console.log("nnnnn");
      state.carnum +=1
        if (state.newcar.indexOf(state.shudanxiangqing[obj.index])==-1) {
          state.newcar.push(state.shudanxiangqing[obj.index])
          console.log(state.newcar.length,"newcar");
          state.newcarlrnght=state.newcar.length
          console.log(state.newcarlrnght);
          state.shudanxiangqing[obj.index].times =1
          
        }else{
          state.shudanxiangqing[obj.index].times +=1
          console.log(state.shudanxiangqing[obj.index].times);
          
        }
      console.log(state.newcar);
      state.geshu=obj.geshu
      // state.geshu=newcar
      console.log(state.geshu);
      state.yuan.push(parseFloat(state.shudanxiangqing[obj.index].paice2))

  // console.log(state.yuan);
  //购物车总价格

      
      
      
      
      // console.log(newcar,state.carnum);
      
    },
    xiugai11(state,index){
      state.newcar[index].times +=1
    },
    xiugai22(state,index){
     state.newcar[index].times -=1
      if (state.newcar[index].times==0) {
        state.newcar.splice( state.newcar[index],1)
        console.log(state.newcar);
        state.newcarlrnght--
      }  
    },
    deld(state,index){
      state.newcar.splice(state.newcar[index],1)
      state.newcarlrnght--
    }
  },
  actions: {
  }

});
