import '../css/habit.css'

interface HabitProps {
    completed : number
}

export function Habit(props : HabitProps) {
    return (
        <div className='habit'>{props.completed}</div>
    )
}