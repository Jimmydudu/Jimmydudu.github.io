var choice=document.getElementById('choice')//输入框
var province=document.querySelector('.province')//展示面板
var title=document.querySelector('.title').getElementsByTagName('LI');//省市县三个
var show=document.querySelector('.show')//选项出现
var addwrap=document.querySelector('.add-wrap')//个省份出现的位置
var btn=document.querySelector('.btn')


//自动加载省份
window.onload=showProv()
function showProv(){
    addwrap.innerHTML='';
    btn.disabled=true;
    title[0].className='titlesel';
    var len =provice.length;
    for (var i = 0; i < len; i++) {
        var provLi=document.createElement('li')
        provLi.innerText=provice[i]['name']
        provLi.index=i;
        addwrap.appendChild(provLi)
    }
}


