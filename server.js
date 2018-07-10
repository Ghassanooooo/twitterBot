const Twit = require('twit');

const config = require('./config');

 let T = new Twit(config);
/* get twittes */ 
//  let param= { q: 'AFD',count: 2}

//  function gotData(err, data, response) {
//      for(let twit of data.statuses){ console.log(twit.text) } }

//  T.get('search/tweets',param, gotData)

/* post twittes*/
function twites(text){
// let rand=Math.floor(Math.random()*100)
// let pos= { status: `${rand} #Hi_Im_Node_App` }

let pos= { status: text }

    function posted(err, data, response) {
       if(err){console.log('ERROR:there is somthing wrong')}else{console.log('its work.....')}
      }
    
    T.post('statuses/update',pos, posted)
}
// twites()

// setInterval(twites,50000)

var stream = T.stream('user')

stream.on('follow',followed)

function followed (event) {
    console.log('follow event....')
   let name=event.source.name;
   let screenName=event.source.screen_name;
    twites(`@${screenName} thank you for followed me`)
  }


  


