function plans() {

    let currentPlans = "See a movie";
    let changePlansCounter = 0;
    
    return function planner (newPlans) {
      
      console.log(`counter ${changePlansCounter}`);
      
      if(newPlans && changePlansCounter < 2) {
        
        currentPlans = newPlans;
        changePlansCounter++;
      
      }
    
      return currentPlans;
    }
  }
  
  const plansWithFriends = plans();
  
  console.log(plansWithFriends('Go for a run'));
  console.log(plansWithFriends('Go hiking'));
  console.log(plansWithFriends('Play video games'));