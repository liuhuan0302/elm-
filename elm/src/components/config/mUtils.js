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