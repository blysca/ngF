import {Component, OnInit} from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

export interface Exercise {
  name: string;
  value: string;
}

@Component({
  selector: 'app-training-day',
  templateUrl: './training-day.component.html',
  styleUrls: ['./training-day.component.scss']
})
export class TrainingDayComponent implements OnInit {
  trainingDayForm: FormGroup;

  exercisesAuto: Exercise[] = [
    {
      name: 'Snatch',
      value: 'snatch',
    }
    , {
      name: 'Clean & Jerk',
      value: 'clean-and-jerk',
    }
    , {
      name: 'Front Squat',
      value: 'front-squat',
    }
    , {
      name: 'Back Squat',
      value: 'back-squat',
    }
  ];

  constructor(
    private fb: FormBuilder
  ) {
    this.trainingDayForm = this.fb.group({
      exercises: this.fb.array([this.buildTrainingExercise()])
    });
  }

  buildTrainingExercise(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]]
      , pm: ['', [Validators.required]]
      , activity: this.fb.array([this.buildActivity()])
    });
  }

  buildActivity(): FormGroup {
    return this.fb.group({
      weight: ['', [Validators.required]]
      , sets: ['', [Validators.required]]
      , reps: ['', [Validators.required]]
    });
  }

  addExercise(): void {
    this.exercises.push(this.buildTrainingExercise());
  }

  addActivity(j: number): void {
    const currentExercise = this.exercises.controls[j];
    // console.log('*addActivity*', currentExercise);
    const activity = currentExercise.controls.activity;
    // console.log('*activity1*', activity);
    console.log('*activity2*', <FormArray>this.trainingDayForm.get(`exercises`));
    console.log('*activity2*', this.trainingDayForm.get(`exercises`).controls[j].controls.activity);
    // activity.controls.push(this.buildActivity());
    // this.activity.push(this.buildActivity());
  }



  get exercises(): FormArray {
    return <FormArray>this.trainingDayForm.get('exercises');
  }

  /*get activity(): FormArray {
    return <FormArray>this.trainingDayForm.get('activity');
  }*/

  private _filterStates(value: string): Exercise[] {
    const filterValue = value.toLowerCase();

    return this.exercisesAuto.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    // console.log('*this.form = *', this.trainingDayForm);
    // console.log('*this.exercises.controls = *', this.exercises.controls[0].controls.activity.controls);
  }

  onSubmit() {
    console.log('*trainingDayForm = *', this.trainingDayForm);
  }

}
