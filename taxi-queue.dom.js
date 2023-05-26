// write your DOM code here.
var passengerCount = document.querySelector(".passenger_queue_count")
var taxiCount = document.querySelector(".taxi_queue_count")
var passengerJoin = document.querySelector(".join_queue")
var passengerLeave = document.querySelector(".leave_queue")
var taxiJoin = document.querySelector(".join_taxi_queue")
var taxiDepart = document.querySelector(".depart")
// DOM element references

// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events
var numPassengers = JSON.parse(localStorage.getItem("passengers"))
passengerCount.innerHTML = numPassengers;
var numTaxis = JSON.parse(localStorage.getItem("taxis"))
taxiCount.innerHTML = numTaxis;


passengerJoin.addEventListener('click', function(){
     taxiQueue.joinQueue()
    localStorage["passengers"] = JSON.stringify(taxiQueue.queueLength());
    passengerCount.innerHTML = taxiQueue.queueLength()
})

passengerLeave.addEventListener('click', function(){
    taxiQueue.leaveQueue()
    localStorage["passengers"] = JSON.stringify(taxiQueue.queueLength())
    passengerCount.innerHTML = taxiQueue.queueLength()
})

taxiJoin.addEventListener('click', function(){
    taxiQueue.joinTaxiQueue()
    localStorage["taxis"] = JSON.stringify(taxiQueue.taxiQueueLength())
    taxiCount.innerHTML = taxiQueue.taxiQueueLength()
})

taxiDepart.addEventListener('click', function(){
    taxiQueue.taxiDepart()
    localStorage["taxis"] = JSON.stringify(taxiQueue.taxiQueueLength())
    taxiCount.innerHTML = taxiQueue.taxiQueueLength()
    localStorage["passengers"] = JSON.stringify(taxiQueue.queueLength());
    passengerCount.innerHTML = taxiQueue.queueLength()

})