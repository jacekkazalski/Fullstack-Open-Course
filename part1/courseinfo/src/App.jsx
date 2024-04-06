const App = () => {
    const Header = ({course}) => {
        return (
            <h1>{course}</h1>
        )
    }
    const Content = ({props}) => {
        const Part = ({props}) => {
            return(
                <p>
                    {props.part} {props.exercises}
                </p>
            )
        }
        return (
            <div>
                <Part props={{
                    part: props.part1,
                    exercises: props.exercises1
                }}/>
                <Part props={{
                    part: props.part2,
                    exercises: props.exercises2
                }}/>
                <Part props={{
                    part: props.part2,
                    exercises: props.exercises2
                }}/>
            </div>
        )
    }
    const Total = ({total}) => {
        return(
            <p>Number of exercises {total}</p>
        )
    }
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course}/>
            <Content props={{
                part1: part1.name,
                part2: part2.name,
                part3: part3.name,
                exercises1: part1.exercises,
                exercises2: part2.exercises,
                exercises3: part3.exercises,
            }}/>
            <Total total={part1.exercises+part2.exercises+part3.exercises}/>
        </div>
    )
}

export default App