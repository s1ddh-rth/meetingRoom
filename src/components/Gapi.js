import React from 'react'

function Gapi(props) {
    var gapi = window.gapi
    /* 
      Update with your own Client Id and Api key 
    */
    var CLIENT_ID = "496320596315-n1vtfd5c46ci84h0opj35i88sgc39fa2.apps.googleusercontent.com"
    var API_KEY = "-NuRzK28lUAV2Lyg"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"
    console.log(props.data);
    const handleClick = () => {
      gapi.load('client:auth2', () => {
        console.log('loaded client')
  
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
  
        gapi.client.load('calendar', 'v3', () => console.log('working!'))
        

        gapi.auth2.getAuthInstance().signIn()
        .then(() => {
          
          var event = {
            'summary': props.agenda,
            'location': 'India',
            'description': props.desc,
            'start': {
              'dateTime': props.dateTime,
              'timeZone': 'Asia/Kolkata'
            },
            'end': {
              'dateTime': props.dateTime,
              'timeZone': 'Asia/Kolkata'
            },
            'recurrence': [
              'RRULE:FREQ=DAILY;COUNT=2'
            ],
            'reminders': {
              'useDefault': false,
              'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
              ]
            }
          }
  
          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event,
          })
  
          request.execute(event => {
            console.log(event)
            window.open(event.htmlLink)
          })                                    
        })
      })
    }
  
  
    return (
      <div className="event">
        
          <p>Click to add event to Google Calendar</p>
          
          <button style={{width: 100, height: 50}} onClick={handleClick}>Add Event</button>
        
      </div>
    );
  }

export default Gapi
