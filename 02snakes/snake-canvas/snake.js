var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var blockSize = 10
var blockInWidth = canvas.width / blockSize
var blockInHeight = canvas.height / blockSize
var count =0
var gameover 
var btn1 = document.getElementsByClassName('btn1')[0]     //游戏开始
var btn2 = document.getElementsByClassName('btn2')[0]
var btn3 = document.getElementsByClassName('btn3')[0]
var bgsounds=document.getElementById('bgsounds')
var text =document.querySelector('.text')
bgsounds.style.display='none'
var flag=false;
var currentName
var currentscore=0

/* @types {{HTMLCanvasElement}} */

//块级化
class Block {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    draw(color) {
        ctx.fillStyle = color
        ctx.fillRect((this.x - 1) * blockSize, (this.y - 1) * blockSize, blockSize, blockSize)

    }
    drawa(color){
        ctx.fillStyle = color
        ctx.arc((this.x - 1) * blockSize + 5 ,(this.y - 1) * blockSize + 5,5,0,2*Math.PI)
        
    }
}

class Snake {
    constructor() {
        this.segments = [
            new Block(3, 1),
            new Block(2, 1),
            new Block(1, 1)
        ],
        this.direction = 'right',
        this.nextdirection = 'right'
    }
    draw() {
        this.segments.forEach(element => {
            element.draw('orange')
        });
        this.segments[0].draw('black')
    }
    move() {
        let head = this.segments[0]
        let tail = this.segments[this.segments.length - 1]
        this.direction = this.nextdirection
        let newHead
        // let newHead = new Block(head.x + 1, head.y)
        switch (this.direction) {
            case 'right':
                newHead = new Block(head.x + 1, head.y)
                break;
            case 'left':
                newHead = new Block(head.x - 1, head.y)
                break;
            case 'up':
                newHead = new Block(head.x, head.y - 1)
                break;
            case 'down':
                newHead = new Block(head.x, head.y + 1)
                break;
        }
        
       
        if (newHead.x > blockInWidth || newHead.x <= 0 || newHead.y <= 0 || newHead.y > blockInHeight) {

            this.gameOver()
            return
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.segments.unshift(newHead)
        if (apple.segments.x == snake.segments[0].x && apple.segments.y == snake.segments[0].y) {
            apple.move()
            apple.drawa()
            sounds("9586.mp3")
            count++
            currentscore++
            document.getElementById('score').innerHTML = currentscore
            console.log(currentscore);
            // document.querySelector('.score').innerHTML = '得分：' + count
        } else {
            // debugger
            this.segments.pop(tail)
        }
       
    }
    setDirection(newdirection){
        if (this.direction == 'right' && newdirection == 'left') {
            return
        }
        if (this.direction == 'left' && newdirection == 'right') {
            return
        }
        if (this.direction == 'up' && newdirection == 'down') {
            return
        }
        if (this.direction == 'down' && newdirection == 'up') {
            return
        }
        this.nextdirection = newdirection
    }
    gameOver(){
        sounds("shu.mp3")
        
        setTimeout(() => {
            alert("游戏结束呜呜呜")
        },  100);
        bgsounds.pause()
        bgsounds.load()
        clearInterval(t)
        updataMes()
        setTimeout(() => {
            location.reload()
        }, 300);
    }
    check(){
        for (var i = 1; i < snake.segments.length; i++) {
            if (snake.segments[0].x == snake.segments[i].x && snake.segments[0].y == snake.segments[i]
                .y) {
                    gameover = true
                sounds("shu.mp3")
              
                setTimeout(() => {
                    alert('游戏结束呜呜呜')
                }, 100);
                bgsounds.pause()
        bgsounds.load()
                clearInterval(t)
                updataMes()
                setTimeout(() => {
                    location.reload()
                }, 200);
            }
        }
    }
    


}


class Apple{
    constructor(){
        this.segments = new Block(10,20)
    }
    drawa(){
        this.segments.draw('red')
    }
    move(){
            var randomnum1 =this. randomnumber(blockInWidth)
            var randomnum2 =this.randomnumber(blockInHeight)
            do {
                var needReGenerate = false
                this.segments.x = randomnum1
                this.segments.y = randomnum2
                snake.segments.forEach(element => {
                    if (element.x == randomnum1 && element.y == randomnum2) {
                        needReGenerate = true
                    }
                });
            }while (needReGenerate);
    }
    randomnumber(s){
        return Math.ceil(Math.random() * s)
    }
}


var snake = new Snake()
var apple = new Apple
snake.draw()

//键盘设置方向
var x = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
}
window.onkeydown = function (e) {
    console.log(e.keyCode);
    if (x[e.keyCode]) {
        snake.setDirection(x[e.keyCode])
    }
}


var sounds = (y)=> {
    var audio = document.createElement("AUDIO");
    var voice = document.getElementsByClassName('voice')[0]
    audio.setAttribute("src", y);
    audio.setAttribute("controls", "controls");
    audio.setAttribute("autoplay", "autoplay");
    voice.appendChild(audio);
    voice.style.display = 'none'
    audio.addEventListener('ended',
        event => voice.removeChild(audio))
}

//背景音乐
btn2.onclick=function () {
    bgsounds.play()
}
btn3.onclick=function () {
    bgsounds.pause()
}

//消除本地记录
// function clearStorage() {
//     localStorage.clear();
//     alert("记录已清除");
// }

//初始化用户
function initMes(){
    var message_child={};
    var historyMessage=JSON.parse(localStorage.getItem("messageStorage"));//用户历史信息
//        console.log("初始化--》"+historyMessage);
    currentName=prompt('请输入你的名字：','');
    if(currentName!=null && currentName!=''){
        document.getElementById('name').innerHTML=currentName;
    }
    if(historyMessage != null){
        for(var i=0;i<historyMessage.length;i++){
            if(historyMessage[i].name===currentName){
                flag=true; //已经有该用户
//                    console.log("旧用户");
            }
        }
    }
    if(!flag){//新用户
        console.log("新用户");
        message_child.name=currentName;
        message_child.score=[0];
        if(historyMessage==null){
            historyMessage=new Array();//不仅是新用户，而且该游戏还没有任何历史记录
//                console.log("新用户且该游戏还没有任何历史记录");
        }
        historyMessage.push(message_child);//将新用户的信息对象放入数组中
        localStorage.setItem("messageStorage",JSON.stringify(historyMessage));//存入本地

//            console.log("新用户加入--》"+JSON.parse(localStorage.getItem("messageStorage")));
    }
}



//游戏结束，更新用户信息
function updataMes() {
    var historyMessage=JSON.parse(localStorage.getItem("messageStorage"));//用户历史信息
    console.log("游戏结束--》"+historyMessage);
//        console.log(historyMessage.length);

    for(var i=0;i<historyMessage.length;i++){
        if(historyMessage[i].name==currentName){
            historyMessage[i].score.push(currentscore);
            localStorage.setItem("messageStorage",JSON.stringify(historyMessage));//存入本地
//                console.log(JSON.parse(localStorage.getItem("messageStorage"))[i].score);
            return;
        }
    }
}

var ul=document.getElementById('ranking');
function displayRanking() {
    var historyMessage=JSON.parse(localStorage.getItem("messageStorage"));//用户历史信息
    var ranking=new Array();
    // var ranking=new Array(5)
    for(var i=0;i<historyMessage.length;i++) {
        var player=historyMessage[i];
        var name_highScore={};
        var currentScore=player.score;//当前玩家历史得分数组
        var currentHighScore=currentScore[0];//当前玩家最高分
        for(var j=0;j<currentScore.length;j++){
            if(currentHighScore<currentScore[j])
            {
                currentHighScore=currentScore[j];
            }
        }
        name_highScore.name=player.name;
        name_highScore.score=currentHighScore;
        ranking.push(name_highScore); //将玩家以及对应的最高分组成的对象放入数组中
    }

    //对数组按照分数排序
    var k, m, tmp;
    for (k = 1; k < ranking.length; k++)
    {
        tmp = ranking[k];
        m = k - 1;
        while (m>=0 && tmp.score < ranking[m].score)
        {
            ranking[m + 1] = ranking[m];
            m--;
        }
        ranking[m + 1] = tmp;
    }
   
    for(var f=ranking.length-1;f>=0;f--){
        var ul=document.getElementById('ranking');
        var li=document.createElement('li');
        li.innerHTML="玩家："+ranking[f].name+"------最高分："+ranking[f].score;
       
        if (ul.children.length <= 5) {
            ul.appendChild(li);
        }
       
    }

}





var canclick= true
displayRanking()
btn1.onclick = function () {
   

    initMes()
   
    // displayRanking()
    bgsounds.play()
    if (canclick == true) {
        canclick = false
        t = setInterval(function () {
            snake.move()
            snake.check()
            if (gameover) {
                return
            }
            snake.draw()
            apple.drawa()
        }, 300)
    }

}
