//1. Anonymous Function Without Input & Without Return
//Print Numbers Divisible by 3 and 5
let divisibleNumbers=function(){
    for(let i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
            console.log(i)
        }
    }
};
divisibleNumbers();

//Print Star Pattern
// *
// * *
// * * *
// * * * *
// * * * * *

let pattern=function(){
    for(let i=1;i<=5;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row=row+"* "
        
        }
        console.log(row);
    }
};
pattern();

//Print Fibonacci Series

let fibonacci=function(){
    let a=0;
    let b=1;
    for(let i=1;i<=10;i++){
        console.log(a);
        let c=a+b;
        a=b;
        b=c;
    }
};
fibonacci()

//2. Anonymous Function With Input & Without Return
//Check Strong Number
let checkStrong=function(num){
    let original=num;
    let sum=0;
    while (num>0){
        let ld=num%10;
        let fact=1;
        for(let i=1;i<=ld;i++){
            fact=fact*i;
        }
        sum=sum+fact;
        num=parseInt(num/10);
    }
    if (sum==original){
        console.log(original,"is a strong number");
    } else{
        console.log(original,"is not a strong number");
    }
};
checkStrong(145);

//Calculate Electricity Bill
let electricityBill=function(units){
    let bill=0;
    if(units<=100){
        bill=units*2;
    }else if (units<=200){
        bill=100*2+(units-100)*3;
    }
    else{
        bill=100*2+100*3+(units-200)*5;
    }
    console.log("Electricity Bill=",bill);
};
electricityBill(250);

//Student Grade
let findGrade=function(marks){
     if (marks >= 90) {
        console.log("Grade A");
    }
    else if (marks >= 75) {
        console.log("Grade B");
    }
    else if (marks >= 60) {
        console.log("Grade C");
    }
    else if (marks >= 40) {
        console.log("Grade D");
    }
    else {
        console.log("Fail");
    }
};
findGrade(82);

// 3. Anonymous Function Without Input & With Return
Calculate Sum of Even Numbers
let evenSum=function(){
    let sum=0;
    for(let i=1;i<=50;i++){
        if(i%2==0){
            sum=sum+i;
        }
    }
    return sum;
}
let result=evenSum();
console.log("Sum of even numbers=",result);

//Find the Largest Digit from a Fixed Number
let largestDigit=function(){
    let num=573689
    let largest=0;
    while(num>0){
        var ld=num%10;
        if(ld>largest){
            largest=ld
        }
        num=parseInt(num/10);
    }
    return largest;
}
let result=largestDigit();
console.log("Largest digit=",result);

//Calculate Total Marks
let totalMarks = function() {
    let maths = 85;
    let science = 78;
    let english = 92;
    let social = 88;
    let computer = 95;
    return maths + science + english + social + computer;
};
let result = totalMarks();
console.log("Total Marks =", result);

//4. Anonymous Function With Input & With Return
//Calculate Percentage
let calculatePercentage=function(maths,science,english,computer){
    let total=maths+science+english+computer;
    let percentage=(total/400)*100;
    return percentage;
};
let result=calculatePercentage(85,78,92,88);
console.log("Percentage=",result);

// Find LCM of Two Numbers
let findLCM=function(a,b){
    let greater;
    if(a>b){
        greater=a;
    }
    else{
        greater=b;
    }
    while(true){
        if(greater%a==0 && greater%b==0){
            return greater;
        }
        greater++;
    }
};
let result=findLCM(12,18);
console.log("LCM=",result)

//Calculate Electricity Bill
let calculateBill=function(units){
    let bill=0;
    if(units<=100){
        bill=units*2;
    }
    else if(units<=200){
        bill=100*2+(units-100)*3;
    }
    else{
        bill=100*2+100*3+(units-200)*5;
    }
    return bill;
};
let result=calculateBill(150);
console.log("Electricity Bill=",result);