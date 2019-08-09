import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Goal } from '../goal';
let GoalComponent = class GoalComponent {
    constructor() {
        this.goals = [
            new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin finds his son'),
            new Goal(2, 'Buy cookies', 'I have to buy cookies for my parrot'),
            new Goal(3, 'Get NEW phone case', 'Diana has her birthday coming soon'),
            new Goal(4, 'Get Dog food', 'pupper likes expensive food'),
            new Goal(5, 'Solve new math problem', 'DAMN math'),
            new Goal(6, 'Plot my world new domination plan', 'Cause i am an evil Overload'),
        ];
    }
    toogleDetails(index) {
        this.goals[index].showDescription = !this.goals[index].showDescription;
    }
    ngOnInit() {
    }
};
GoalComponent = tslib_1.__decorate([
    Component({
        selector: 'app-goal',
        templateUrl: './goal.component.html',
        styleUrls: ['./goal.component.css']
    })
], GoalComponent);
export { GoalComponent };
//# sourceMappingURL=goal.component.js.map