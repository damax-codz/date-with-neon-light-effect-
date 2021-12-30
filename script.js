const func=()=>{
    var d= new Date()
    var da = d.toLocaleTimeString()
    document.getElementById("po").innerHTML=da
    var date=new Date()
    var data= date.toLocaleDateString('en-us',{dateStyle:'full'})
    document.getElementById("pop").innerHTML=data
   
}
    setInterval(func,1000)

  