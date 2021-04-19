
function setup() {
  createCanvas(800,800);
  test=new Test(6)
  test.positiveNumbers()
  test1=new Test(-4)
  test1.positiveNumbers()
  test2=new Test(28)
  test2.evenNumbers()
  test3=new Test(47)
  test3.buzzNumber()
  test4=new Test(76)
  test4.greatestNumber(17,66,126)
  test5=new Test()
  test5.displayEvens()
  test6=new Test()
  test6.displayLastDigit()
  test7=new Test()
  test7.perfectNumber()
}

function draw() {
  background("black");  
 
  
}




