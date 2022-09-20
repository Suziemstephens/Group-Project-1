//const flight_url = 'https://airlabs.co/api/v9/delays?delay=60&type=departures&api_key=104421b8-80bc-4442-95d4-afeb278be247';
var issueContainer = document.getElementById('issues');
var fetchButton = document.getElementById('fetch-button');
var departureDate = document.getElementById('departure_date');
var airlinesEl = document.getElementById('airlines');
var departure_dateEl = document.getElementById('departure_date');
var flight_numberEl =document.getElementById('lnumber')


function getApi() {
  //This link works...
  const departure_choice = departure_dateEl.value;
  const airline_name = airlinesEl.value;

  const flight_url = 'https://airlabs.co/api/v9/delays?airline_icao='+airline_name+'&dep_estimated='+departure_choice+'&delay=60&type=departures&api_key=104421b8-80bc-4442-95d4-afeb278be247';
//const flight_url = 'https://airlabs.co/api/v9/flights?_view=array&_fields=hex,flag,lat,lng,dir,alt&api_key=104421b8-80bc-4442-95d4-afeb278be247';


//const flight_url = 'https://airlabs.co/api/v9/flights?api_key=104421b8-80bc-4442-95d4-afeb278be247';
  fetch(flight_url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //console.log(data[0].status);
      //console.log(data[1]);
      for (var i = 0; i < 10; i++) {
        var flight_numberEl = document.createElement('h3');
        var flight_numberEl1 = document.createElement('h3');
        var statusEl1 = document.createElement('h6');
        var statusEl = document.createElement('p');
        var terminal1 = document.createElement('h6');
        var terminal = document.createElement('p');
        var depart_gate = document.createElement('p');
        var depart_gate1 = document.createElement('h6');
        var depart_estimated = document.createElement('p');
        var depart_estimated1 = document.createElement('h6');
        var arrive_estimated = document.createElement('p');
        var arrive_estimated1 = document.createElement('h6');
        var dep_delayed = document.createElement('p');
        var dep_delayed1 = document.createElement('h6');
        
        
        //userName.textContent = data[i].user.login;
        //issueTitle.textContent = data[i].title;
        
        flight_numberEl.textContent = data.response[i].flight_number;
        flight_numberEl1.textContent = 'Flight Number : ';
        statusEl1.textContent = 'Status : ';
        statusEl.textContent = data.response[i].status;
        terminal1.textContent = 'Terminal : ';
        terminal.textContent = data.response[i].dep_terminal;
        depart_gate1.textContent = 'Departure Gate : ';
        depart_gate.textContent = data.response[i].dep_gate;
        depart_estimated1.textContent = 'Departure Estimated : ';
        depart_estimated.textContent = data.response[i].dep_estimated;
        arrive_estimated1.textContent = 'Arrive Estimated :';
        arrive_estimated.textContent = data.response[i].arr_estimated;
        dep_delayed1.textContent = 'Departure Delayed';
        dep_delayed.textContent = data.response[i].delayed;

        issueContainer.append(flight_numberEl1);
        issueContainer.append(flight_numberEl);
        issueContainer.append(statusEl1);
        issueContainer.append(statusEl);
        issueContainer.append(terminal1);
        issueContainer.append(terminal);
        issueContainer.append(depart_gate1);
        issueContainer.append(depart_gate);
        issueContainer.append(depart_estimated1);
        issueContainer.append(depart_estimated);
        issueContainer.append(arrive_estimated1);
        issueContainer.append(arrive_estimated);
        issueContainer.append(dep_delayed1);
        issueContainer.append(dep_delayed);
        
        console.log(departure_choice);
        console.log(airline_name);
        
      }
    });
}
  


fetchButton.addEventListener('click', getApi);



  

