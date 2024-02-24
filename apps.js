const MainURL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  let downDrp = document.querySelectorAll('.dropdown select')
  let amt = document.querySelector('#input')
  let button = document.querySelector('#btn')
  let fromCurr =document.querySelector('.from select')
  let toCurr =document.querySelector('.to select')
  let msg =document.querySelector('.msg')

  for (const select of downDrp) {
    for (const curcode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = curcode;
      newOption.value = curcode;
    //    console.log(newOption);
    if (select.name ==='from' && curcode ==="USD") {
        newOption.selected ='selected'
    }
else if(select.name ==='to' && curcode ==="NPR"){
    newOption.selected ='selected'
}
       select.append(newOption)


    
       
    }
    select.addEventListener('change',(e) =>{
newFlag(e.target)

    })
}
const newFlag =(element)=>{
  console.log(element);
let currcode =element.value
let ctycode = countryList[currcode];
console.log(ctycode);
let newimg =`https://flagsapi.com/${ctycode}/flat/64.png`
console.log(newimg);
newsrc = element.parentElement.querySelector('#img')
console.log(newsrc);

newsrc.src =newimg

}
button.addEventListener('click', async(e)=>{
  e.preventDefault()
  let amtval = amt.value
  if (amtval==='' || amtval<1) {
    amtval =1;
    amtval.value
  }
  console.log(amtval)
  // console.log(formCurr.value,toCurr.value)

// let UrL = `${MainURL}/${formCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}/.json`
let URL=`${MainURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response = await fetch(URL)
let data =await response.json()
let rate = data[toCurr.value.toLowerCase()]
// console.log(rate);
finalRate = amtval*rate;

// console.log(finalRate)
msg.innerText=`${amtval} ${fromCurr.value} = ${finalRate} ${toCurr.value}`
// console.log(msg);
})