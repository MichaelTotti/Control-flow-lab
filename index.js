
function scuberGreetingForFeet(ride){
  if (ride <= 400){
  return 'This one is on me!'
  }else if (ride <= 2000){
  return "That will be twenty bucks."
  }else if (ride > 2000 && ride <=2500){
  return "I will gladly take your thirty bucks."
  }else if (ride > 2500){
  return "No can do."
}
  // Write your code here!
}
scuberGreetingForFeet(1999)


function ternaryCheckCity(city){
  return city === "NYC"? "Ok, sounds good.":"No go."
}
function switchOnCharmFromTip(tip){
   switch(tip){
    case "generous":
      return "Thank you so much."
        break;
    case "not as generous":
      return "Thank you."
        break
    default :
      return "Bye."
       break
}
}