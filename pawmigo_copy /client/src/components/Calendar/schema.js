{
    "event": "invitee.created",
    "time": "2019-11-02T20:24:59Z",
    "payload": {
      "event_type": {
        "uuid": "HAFGSBMCWXTPDGYC",
        "kind": "One-on-One",
        "slug": "15min",
        "name": "15 Minute Meeting",
        "duration": 15,
        "owner": {
          "type": "users",
          "uuid": "BFDDHNNVJOLAN7MH"
        }
      },
      "event": {
        "uuid": "AFOD4ENAAU44TI4Y",
        "assigned_to": [
          "Pawmigo"
        ],
        "extended_assigned_to": [
          {
            "name": "Pawmigo",
            "email": "greg@frontsightmarketing.com",
            "primary": true
          }
        ],
        "start_time": "2019-11-08T10:30:00-08:00",
        "start_time_pretty": "10:30am - Friday, November 8, 2019",
        "invitee_start_time": "2019-11-08T10:30:00-08:00",
        "invitee_start_time_pretty": "10:30am - Friday, November 8, 2019",
        "end_time": "2019-11-08T10:45:00-08:00",
        "end_time_pretty": "10:45am - Friday, November 8, 2019",
        "invitee_end_time": "2019-11-08T10:45:00-08:00",
        "invitee_end_time_pretty": "10:45am - Friday, November 8, 2019",
        "created_at": "2019-11-02T13:24:58-07:00",
        "location": null,
        "canceled": false,
        "canceler_name": null,
        "cancel_reason": null,
        "canceled_at": null
      },
      "invitee": {
        "uuid": "CEPJAQWPV5G7FLAY",
        "first_name": null,
        "last_name": null,
        "name": "Kevin Gorham ",
        "email": "kevin.gorham@gmail.com",
        "text_reminder_number": null,
        "timezone": "America/Los_Angeles",
        "created_at": "2019-11-02T13:24:58-07:00",
        "is_reschedule": false,
        "payments": [],
        "canceled": false,
        "canceler_name": null,
        "cancel_reason": null,
        "canceled_at": null
      },
      "questions_and_answers": [],
      "questions_and_responses": {},
      "tracking": {
        "utm_campaign": null,
        "utm_source": null,
        "utm_medium": null,
        "utm_content": null,
        "utm_term": null,
        "salesforce_uuid": null
      },
      "old_event": null,
      "old_invitee": null,
      "new_event": null,
      "new_invitee": null
    }
  }


//   / name,
//  req.body.payload.invitee.name =
//  // email,
//  req.body.payload.invitee.email
//  // time (pretty)
//  req.body.payload.event.start_time_pretty
//  // event type
//  req.body.payload.name