function update(){
    const now = new Date()
    //console.log(now)
    let h=now.getHours()
    let m=now.getMinutes()
    let s=now.getSeconds()
    let a= h>=12 ? "PM" : "AM"

    h = h%12
    h=h?h:12 
    h=h<10 ? "0"+h:h
    m=m<10 ? "0"+m:m
    s=s<10 ? "0"+s:s

    document.getElementById("hours").textContent = h
    document.getElementById("minutes").textContent = m
    document.getElementById("seconds").textContent = s
    document.getElementById("ampm").textContent=a

    
}

setInterval(update,1000);

update();