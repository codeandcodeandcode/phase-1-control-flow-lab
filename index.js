function scuberGreetingForFeet(feet){

  let rv = "";
  if(feet<=400) rv= 'This is on me!';
  else if(feet>2000&&feet<2500) rv = 'I will gladly take your thirty bucks.';
  else rv = 'No can do.';
  return rv;
}

console.log(scuberGreetingForFeet(199));

function ternaryCheckCity(city){
    
  let rv;
  city == "NYC" ? rv = 'Ok, sounds good.' : rv='No go.';
  return rv;
}

console.log(ternaryCheckCity("NYC"));

function switchOnCharmFromTip(tip){

  let rv="";
    switch(tip) {
        case "generous":
            rv='Thank you so much.';
            break;
        case "not as generous":
        rv = 'Thank you.';
        break;
        default:
            rv = "Bye.";
            break;
    }
    return rv;
  }

  console.log(switchOnCharmFromTip('thanks for everything'));