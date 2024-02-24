const MainURL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let selectDrp = document.querySelectorAll(".dropdown select");

let btn = document.querySelector("#btn");
let amtbox = document.querySelector("#input"));
let msg = document.querySelector(".msg");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
for (const select of selectDrp) {
  for (const curcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = curcode;
    newOption.value = curcode;
    if (select.name === "from" && curcode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && curcode === "NPR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}
const updateFlag = (element) => {
  console.log(element);
  let curcode = element.value;
  let ctycode = countryList[curcode];
  console.log(ctycode);
  let newimg = `https://flagsapi.com/${ctycode}/flat/64.png`;
  // parentElement.querySelector('#img')
  let newsrc = element.parentElement.querySelector("#img");

  newsrc.src = newimg;
};
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let amtval = amtbox.value;
  if (amtval < 1 || amtval === "") {
    amtval = 1;
    amtval.value = 1;
  }
  console.log(amtval);
  console.log(fromCurr.value,toCurr.value);

  const URL = `${MainURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  //  console.log(data);
  let rate = data[toCurr.value.toLowerCase()];

  finallamt = amtval * rate;

  msg.innerText = `${amtval}  ${fromCurr.value}= ${finallamt}  ${toCurr.value}`;
});
