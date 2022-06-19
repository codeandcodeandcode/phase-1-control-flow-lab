function scuberGreetingForFeet(feet){
  let rv = "";
  if(feet<=400) rv= 'This is on me!';
  else if(feet>2000&&feet<2500) rv = 'I will gladly take your thirty bucks.';
  else rv = 'No can do.';
  return rv;
}

