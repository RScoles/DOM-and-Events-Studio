// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener ('load' , function() {
    let takeOffBtn = this.document.getElementById("takeoff");
    takeOffBtn.addEventListener('click', function() {
        let isReadyToLaunch =  window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(isReadyToLaunch) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerText = "Shuttle in flight.";
            let shuttleFlightScreen = document.getElementById("shuttleBackground");
            shuttleFlightScreen.setAttribute("style", "background-color: blue");
            let shuttleHeight =document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerText = "10000";
            
        }
    });
    let landingBtn = document.getElementById("landing");
    landingBtn.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "The shuttle has landed.";

        let shuttleFlightScreen = document.getElementById("shuttleBackground");
            shuttleFlightScreen.setAttribute("style", "background-color: green");

        let shuttleHeight =document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerText = "0";

            let leftOffset = shuttleBackground.offsetWidth / 2 - 37.5;
            document.getElementById("rocket").style.left = leftOffset + "px";

    });
    let abortMissionBtn = this.document.getElementById("missionAbort");
    abortMissionBtn.addEventListener('click', function(){
        let shouldAbortMission =  window.confirm("Confirm that you want to abort the mission.");
        if (shouldAbortMission) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerText = "Mission aborted.";

            let shuttleFlightScreen = document.getElementById("shuttleBackground");
            shuttleFlightScreen.setAttribute("style", "background-color: green");

            let shuttleHeight =document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerText = "0";

            let leftOffset = shuttleBackground.offsetWidth / 2 - 37.5;
            document.getElementById("rocket").style.left = leftOffset + "px";

        }
    });
    let rocketIMG = this.document.getElementById("rocket");
    let upBtn = this.document.getElementById("up");
    let top = 0;
    let left = 0;
    upBtn.addEventListener('click', function(){
        let shuttleHeight =document.getElementById("spaceShuttleHeight");
        let shuttleHeightAmount =Number(shuttleHeight.innerText);
        shuttleHeightAmount += 10000;
        shuttleHeight.innerText = shuttleHeightAmount;
        top -= 10;
        if (top < 0){
            top = 0;
        }
        document.getElementById("rocket").style.top = (top - 10) + "px";

    });
    let downBtn = this.document.getElementById("down");
    downBtn.addEventListener('click', function(){
        let shuttleHeight =document.getElementById("spaceShuttleHeight");
        let shuttleHeightAmount =Number(shuttleHeight.innerText);
        shuttleHeightAmount -= 10000;
        shuttleHeight.innerText = shuttleHeightAmount;
        let heightOfBox = shuttleBackground.offsetHeight - 75;
        if(heightOfBox < top) {
            top = heightOfBox;
        }
        top += 10;
        document.getElementById("rocket").style.top = (top + 10) + "px";
    });
    let leftBtn = this.document.getElementById("left");
    leftBtn.addEventListener('click', function(){
        left -= 10;
        if (left < 0){
            left = 0;
        }
        document.getElementById("rocket").style.left = (left - 10) + "px";
    });
    let rightBtn = this.document.getElementById("right");
    rightBtn.addEventListener('click', function(){
        left += 10;
        let widthOfBox = shuttleBackground.offsetWidth - 60;
        if(widthOfBox < left) {
            left = widthOfBox;
        }
        document.getElementById("rocket").style.left = (left + 10) + "px";
    });
});