const scopeDebugging =  {
  whatThis: function() {
    console.log(this);
  },
  // 일반 함수 작성 방식으로 whatThis 라는 메서드를 만들었다.
  arrowThis: () => {
    console.log(this);
  }
  // 화살표 함수 방식으로 arrowThis 라는 메서드를 만들었다.
}

console.log(scopeDebugging.whatThis()) // scopeDebugging을 가리킴
console.log(scopeDebugging.arrowThis()) // arrowThis를 가리킴

// undefined는 콘솔 자체