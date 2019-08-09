import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [

    new Goal(1,'Watch finding Nemo','Find an online version and watch merlin finds his son',new Date(2019,3,14)),
    new Goal(2,'Buy cookies','I have to buy cookies for my parrot',new Date(2019,6,9)),
    new Goal(3,'Get new phone case','Diana has her birthday coming soon',new Date(2019,1,12)),
    new Goal(4,'Get Dog food','pupper likes expensive food',new Date(2019,0,18)),
    new Goal(5,'Solve new math problem','DAMN math',new Date(2019,2,14)),
    new Goal(6,'Plot my world new domination plan','Cause i am an evil Overload',new Date(2019,3,14)),
  ]


  deleteGoal(isComplete,index){
    let toDelete=confirm('Are you sure you want to delete ${this.goal[index].name}')
    if(toDelete){
      this.goals.splice(index,1);
    }
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id=goalLength+1;
    goal.CompleteDate = new Date(goal.CompleteDate)
    this.goals.push(goal);
    

  }


  toogleDetails(index){
    this.goals[index].showDescription =! this.goals[index].showDescription;
  }
  ngOnInit() {
  }

}
