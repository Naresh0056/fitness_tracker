import { Exercise } from './excerise.model';
import { Subject } from 'rxjs';

export class TrainingService {
    private avaliableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ]
    private runningExercise: Exercise;
    exercisedChanged = new Subject<Exercise>();
    private exercises: Exercise[] = [];

    getAvaliableExercise() {
        return this.avaliableExercises.slice();
    }
    startExercise(selectedId: string) {
        this.runningExercise = this.avaliableExercises.find(ex => ex.id === selectedId);
        this.exercisedChanged.next({ ... this.runningExercise })

    }
    getRunningExercise() {
        return { ... this.runningExercise };
    }
    cancelExercise(progress: number) {
        this.exercises.push({
            ...this.runningExercise,
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.duration * (progress / 100),
            date: new Date(),
            state: "cancelled"
        })
        this.runningExercise = null;
        this.exercisedChanged.next(null)
    }
    completeExercise() {
        this.exercises.push({ ...this.runningExercise, date: new Date(), state: "completed" })
        this.runningExercise = null;
        this.exercisedChanged.next(null)
    }
}