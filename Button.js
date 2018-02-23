function answerme() 
{
  let name = prompt("What is you name?");
  let noun = prompt("List a noun");
  let verb = prompt("List a verb");
  let adjective = prompt("List an adjective");
  let num1 = prompt("In what year you were born?");
  let num2 = prompt("What is your age? ");
  let theArr1 = [name, noun, verb, adjective];
  let theArr2 = [num1,num2];
  let story = "My name " + theArr1[0] + " I like to go to " + theArr1[1] + " I do this daily " + theArr1[2] + " my spouse is " + theArr1[3] + " My car is " + theArr2[0] + " I am " + theArr2[1] + " years old in dog years. " ;
  alert(story);
} 
