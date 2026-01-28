export interface Workout {
    id: string;
    name: string;
    date: string;
    duration: number; // in seconds
    exercises: Exercise[];
}

export interface Exercise {
    id: string;
    name: string;
    sets: Set[];
}

export interface Set {
    id: string;
    reps: number;
    weight: number;
    completed: boolean;
}
