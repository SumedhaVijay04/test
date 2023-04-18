function input()
{
  a=parseInt(prompt("Enter number a:"));
  b=parseInt(prompt("Enter number b:"));
  return[a,b];
}
function add(a,b)
{
  return a+b;
}
function output(a,b,c)
{
  console.log("%d+%d is %d",a,b,c) 
}
function main()
{
  let a,b;
  [a,b]=input();
  let c=add(a,b);
  output(a,b,c);
}
main()
