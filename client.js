const employees = [
  {
    name: 'Atticus',
    employeeNumber: 2405,
    annualSalary: 47000,
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: 62347,
    annualSalary: 63500,
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: 6243,
    annualSalary: 74750,
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: 2683,
    annualSalary: 66000,
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: 89068,
    annualSalary: 35000,
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


function calculateBonus(addBonus) {
  if (annualSalary >= 65000){
    addBonus =( totalCompesation* .01);
  }
  
  else if (reviewRating <= 2){
    addBonus =( totalCompesation* .0);
  }

  else if (reviewRating === 3){
    addBonus =( (totalCompesation * .04) + totalCompesation );
  
  }

    else if (reviewRating === 4){
      addBonus =( (totalCompesation * .06) + totalCompesation );
    
    }

 else if (reviewRating === 5){
    addBonus =( (totalCompesation * .1) + totalCompesation );
  
  }

  if ( employeeNumber.lenght === 4);{
    return addBonus;
  }
}
  





