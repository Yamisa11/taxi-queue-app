function TaxiQueue() {
var persons = 0;
var taxiNumber = 0;

	function joinQueue() {
	 persons++;
	}

	function leaveQueue() {
	 if (persons>0) {
		persons--
	 }
	}

	function joinTaxiQueue() {
		taxiNumber++
	}
	
	function taxiDepart(){
		if (taxiNumber>=1 && persons>=12) {
			taxiNumber--
			persons -= 12
		}
	}
	function taxiQueueLength() {
		return taxiNumber;
		
	}
	function queueLength() {
		return persons;
	}


	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}