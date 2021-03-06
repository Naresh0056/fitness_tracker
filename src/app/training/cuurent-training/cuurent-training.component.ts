import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { StopTrainingComponent } from './stop.training';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-cuurent-training',
  templateUrl: './cuurent-training.component.html',
  styleUrls: ['./cuurent-training.component.scss']
})
export class CuurentTrainingComponent implements OnInit {
  @Output() trainingExt = new EventEmitter();
  progress = 0;
  timer;
  constructor(public dialog: MatDialog, private trainingService: TrainingService) { }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer);
      }
    }, 1000)
  }
  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.trainingService.cancelExercise(this.progress)
        // this.trainingExt.emit();
      } else {
        this.startOrResumeTimer()
      }

    })
  }

}
