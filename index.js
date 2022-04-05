function scuberGreetingForFeet(value){
  // Write your code here!
  let result;
  if(value<=400){
    result = 'This one is on me!';  
  }else if(value>400 && value<=2000){
    result = 'That will be twenty bucks.';  
  }else if(value>2000 && value<=2500){
    result = 'I will gladly take your thirty bucks.';
  }else{
    result = 'No can do.';
  }
  return result
}


function ternaryCheckCity(somecity){
  // Write your code here!
  const city = somecity === 'NYC'? "Ok, sounds good.":"No go."
  return city
}
ternaryCheckCity('Pittsburgh')


function switchOnCharmFromTip(someTip){
  // Write your code here!
  switch(someTip){
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default:
      return "Bye."
      break;
  }

}


  