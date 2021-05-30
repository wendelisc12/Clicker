var points = 0

var time = 15
var startTime = time
var progressBar = document.getElementById('progress-bar')

var tamanho = 50

var contador = 3

pastTime = document.getElementById('tempoP')
showPoints = document.getElementById('points')
finalPoints = document.getElementById('show-final-points')
areaClick = document.getElementById('area-click')
start = document.getElementById('comecar')
countdown = document.getElementById('cont')
modalPoints = document.getElementById('pontos-final-box')
textClick = document.getElementById('text-count')

function timer(){
    time--
    time < 10 ? pastTime.innerHTML = "0" + time : pastTime.innerHTML = time

    if(time == 0){
        clearInterval(contagem)

        areaClick.setAttribute('disabled',"disabled")

        pastTime.innerHTML = "15"
        showPoints.innerHTML = "00"
        countdown.innerHTML = "3"
        textClick.style.fontSize = tamanho + 'px'
        contador = 3

        countdown.classList.remove('hide')

        textClick.classList.add('hide')

        modalPoints.style.top = 50+'%'
        finalPoints.innerHTML = points

        countdown.classList.add('hide')
        areaClick.classList.add('disabled')
        document.getElementById('area-click-box').classList.remove('active')
        areaClick.style.cursor = 'initial'
        document.getElementById('progress-box').classList.remove('active-bar')

        pontuacao = points/startTime*60
        console.log(pontuacao)
    }

    p = (100*time) / startTime
    progressBar.style.width = p + '%'
}

start.addEventListener('click', ()=>{
    points = 0
    countdown.classList.remove('hide')
    start.classList.add('hide')
    startCountdown = setInterval(()=>{
        contador--
        cont.innerHTML = contador
        progressBar.style.width = 100 + '%'

        if(contador == 0){
            countdown.classList.add('hide')
            textClick.classList.remove('hide')

            clearInterval(startCountdown)

            areaClick.classList.remove('disabled')
            areaClick.style.cursor = 'pointer'
            document.getElementById('area-click-box').classList.add('active')
            document.getElementById('progress-box').classList.add('active-bar')
            contagem = setInterval(() => {timer()}, 1000)
            areaClick.removeAttribute("disabled")
            time = 15
        }
    }, 1000)

    
    })


areaClick.addEventListener('click', () => {
    points++
    points < 10 ? showPoints.innerHTML = "0" + points : showPoints.innerHTML = points
    var texto = tamanho + points
    textClick.style.fontSize = texto + 'px'
})

document.getElementById('button-close').addEventListener('click', ()=> {
    modalPoints.style.top = '-'+20+'%'
    start.classList.remove('hide')
})