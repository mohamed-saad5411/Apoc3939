let moneyInp = document.getElementById('moneyInp')
let moneyBtn = document.getElementById('moneyBtn')

let constructionProfitInp = document.getElementById('constructionProfitInp')
let constructionBtn = document.getElementById('constructionBtn')

let buildInp = document.getElementById('buildInp')
let buildBtn = document.getElementById('buildBtn')

let salary = document.getElementById('salary')
let construction = document.getElementById('construction')
let build = document.getElementById('build')

let total = document.getElementById('total')

totalMoney = 0
function getData() {
    let salaryCalc = (moneyInp.value * 0.025)
    salary.innerHTML = salaryCalc
    let buildCalc = (buildInp.value * 0.025)
    build.innerHTML = buildCalc
    let constructionCalc = (constructionProfitInp.value * 0.025)
    construction.innerHTML = constructionCalc

    totalMoney = salaryCalc + buildCalc + constructionCalc
    total.innerHTML = totalMoney
}

let offsetTop = $('#whoWeAre').offset().top
$(window).scroll(function () {
    // console.log($(window).scrollTop());
    let windowTop = $(window).scrollTop()
    if (windowTop > offsetTop) {
        $('#hidden').removeClass("visually-hidden");
        $('.navbar').addClass("bg-dark");
        
    }else{
        $('#hidden').addClass("visually-hidden");
        $('.navbar').removeClass("bg-dark");

    }

});
// function scroll() {
//     console.log($('#whoWeAre').offset().top);
// }

