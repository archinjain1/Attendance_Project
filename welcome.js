firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}


var inst = mobiscroll.eventcalendar('#demo-events-labels', {
    theme: 'ios',
    themeVariant: 'light',
    clickToCreate: false,
    dragToCreate: false,
    dragToMove: false,
    dragToResize: false,
    view: {
        calendar: {
            labels: true
        }
    },
    onEventClick: function (event, inst) {
        mobiscroll.toast({
            message: event.event.title
        });
    }
});

mobiscroll.util.http.getJson('https://trial.mobiscroll.com/events/?vers=5', function (events) {
    inst.setEvents(events);
}, 'jsonp');

function att(){
    const d = new Date();
    let t1 = d.getHours();
    let t2 = d.getMinutes();
    let t3 = d.getSeconds();
    


    // obj=useapi(date)
    // if(obj.flag):(flag==face recognised  True/False)

    //     let t4=d.getDate()
    //     obj1=look_firebase(date,month)
            

    //     obj1.list.append(date)
    //     obj1.count=len(obj1.list)
    //     update_firebase(obj1)

        


    
    document.getElementById("a1").innerHTML="Attendance Marked: Yes";
    document.getElementById("a2").innerHTML="Entry Time:"+t1+":"+t2+":"+t3;
    
}