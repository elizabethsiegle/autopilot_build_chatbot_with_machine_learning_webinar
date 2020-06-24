exports.handler = function(context, event, callback) {
    //Memory from the answered question
    let memory = JSON.parse(event.Memory);
    let respObj = {};
    //get answer from Memory
    let name = memory.twilio.collected_data.make_reservation.answers.first_name.answer; 
    let date = memory.twilio.collected_data.make_reservation.answers.date.answer;
    let time = memory.twilio.collected_data.make_reservation.answers.time.answer;
    let party_size = memory.twilio.collected_data.make_reservation.answers.party_size.answer;
    
   
    var msg = `Confirming reservation for ${name} on ${date} at ${time} for ${party_size} number of species.`;
    respObj= {"actions":[
        { "say": msg
        },
        {
            "redirect": "task://anything_else"
        }
    ]};
	callback(null, respObj);
};