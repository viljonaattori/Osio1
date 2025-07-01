// Osion 1 tehtävät, 1.5 tehtävään asti
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return (
    <div>
      <p>Course: {course}</p>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>
        Part: {name}, exercises: {exercises}
      </p>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const Total = parts.reduce((sum, part) => sum + part.exercises, 0); // voisi tehdä myös loopilla esim. for
  return <p>Number of exercises: {Total}</p>;
};

export default App;
