export function Random(){
    let str = "";
    for (var i = 0; i < 4; i++) {
      //获取随机数
      var num = randomNumber(48, 57);
      //判断随机数是否在条件之内
      if (num >= 48 && num <= 57) {
        str += String.fromCharCode(num);
      } else {
        //不满足条件
        i--;
      }
    }
    return str;
  }

function randomNumber(m, n) {
    return parseInt(Math.random() * (n - m + 1) + m);
  }

//存储 localStorage
let arr = []
export const setStore = (name,content)=>{
  if(!name) return 
  if(typeof content !== 'string'){
    content = JSON.stringify(content);
  }
  arr.push(content)
  window.localStorage.setItem(name,arr)
}

//获取 localStorage

export const getStore = name =>{
  if(!name) return;
  return window.localStorage.getItem(name)
}

//删除localStorage

export const removeStore = name =>{
  if(!name) return ;
  window.localStorage.removeItem(name)
}

