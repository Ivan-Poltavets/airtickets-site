function getValues(){
  localStorage.setItem("from",document.getElementById("from").value)
  localStorage.setItem("to",document.getElementById("to").value)
  localStorage.setItem("dateFrom",document.getElementById("dateFrom").value)
  localStorage.setItem("dateTo",document.getElementById("dateTo").value)
  localStorage.setItem("passenger",document.getElementById("passenger").value)
  window.location.href = 'search_page.html'
}
function returnValues(){
  document.getElementById("from").value = localStorage.getItem("from")
  document.getElementById("to").value = localStorage.getItem("to")
  document.getElementById("dateFrom").value = localStorage.getItem("dateFrom")
  document.getElementById("dateTo").value = localStorage.getItem("dateTo")
  document.getElementById("passenger").value = localStorage.getItem("passenger")
}

function search(type){
  document.getElementById("result").style.display = "inline-flex"
  let image = document.getElementById("ticket_image")
  let data
  if (!type){
    data = {
      from:document.getElementById("from").value,
      to:document.getElementById("to").value,
      dateFrom:document.getElementById("dateFrom").value,
      dateTo:document.getElementById("dateTo").value,
    }
  }
  else{
    data = {
      from:localStorage.getItem("from"),
      to:localStorage.getItem("to"),
      dateFrom:localStorage.getItem("dateFrom"),
      dateTo:localStorage.getItem("dateTo"),
    }
  }
  document.getElementById("ticket_from").innerHTML = "Lviv"
  document.getElementById("ticket_to").innerHTML = data.to
  document.getElementById("dateTextFrom").innerHTML = data.dateFrom
  document.getElementById("dateTextTo").innerHTML = data.dateTo
  if(data.to == "Барселона" | data.to == "Barcelona"){
    image.src = "assets/barcelona_547fdf5.jpg"
  }
  else if(data.to == "Париж" | data.to == "Paris"){
    image.src = "assets/paris_a70e6.jpg"
  }
  else if(data.to == "Стамбул" | data.to == "Istanbul"){
    image.src = "assets/istanbul_0c78b0.jpg"
  }
  else if(data.to == "Рим" | data.to == "Rome"){
    image.src = "assets/rome_8fa540d.jpg"
  }
  else if(data.to == "Відень" || data.to == "Vienna"){
    image.src = "assets/vienna_fdda28.jpg"
  }
  else if(data.to == "Варшава" | data.to == "Warsaw"){
    image.src = "assets/warsaw_e1a04.jpg"
  }
  else if(data.to == "Тбілісі" | data.to == "Tbilisi"){
    image.src = "assets/tbilisi_9af213.jpg"
  }
  else if(data.to == "Прага" | data.to == "Prague"){
    image.src = "assets/prague_835b.jpg"
  }
  else{
    image.src = "assets/main_page_img.jpg"
  }
}
function validate(type) {
  let date = new Date()
  if(localStorage.getItem("to") != ""){
    if(localStorage.getItem("dateFrom") == "") localStorage.setItem("dateFrom",`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+5}`)
    if(localStorage.getItem("dateTo")=="") localStorage.setItem("dateTo",`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+6}`)
    search(type);
  }
}

function onOver(index){
  document.getElementsByClassName("ways-block")[index].style.boxShadow = "0px 5px 15px #000"
}
function onOut(index){
  document.getElementsByClassName("ways-block")[index].style.boxShadow = "0px 0px 0px #fff"
}

function fillField(id){
  switch(id){
    case 0:
      document.getElementById("to").value = "Paris"
      return
    case 1:
      document.getElementById("to").value = "Barcelona"
      return
    case 2:
      document.getElementById("to").value = "Rome"
      return
    case 3:
      document.getElementById("to").value = "Prague"
      return
    case 4:
      document.getElementById("to").value = "Istanbul"
      return
    case 5:
      document.getElementById("to").value = "Warsaw"
      return
    case 6:
      document.getElementById("to").value = "Vienna"
      return
    case 7:
      document.getElementById("to").value = "Tbilisi"
      return
  }

}