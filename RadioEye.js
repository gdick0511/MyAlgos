// 1) B
// 2) A 
// 3) D 
// 4) D 


5) function listener(){
  let div = document.createElement('div')
  div.addEventListener('keypress', () => {
        alert('I have been selected using the keyboard')
    })
}

6) function setRole(){
    let headingElements = document.querySelectorAll('h1','h2','h3','h4')
    headingElements.role = 'presentation'
}

7) function startCountdown(a,b){
    let sum = a + b 
    const interval = setInterval(() => {
        console.log(sum)
        sum--

        if (sum < 0){
            clearInterval(interval)
            console.log('Done!')
        }
    }, 1000)
}

console.log(startCountdown(1,4))