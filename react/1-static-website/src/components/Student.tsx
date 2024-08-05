import { StudentProps } from "../types.ts";

export default function Student(props: StudentProps) {
  return (
    <div className="card box max-w-sm">
      <h1>Name: {props.name} </h1>
      <p>Student ID: {props.id}</p>
      <p>Status: {props.isEnrolled ? "Is enrolled" : "Is not enroled"}</p>
    </div>
  );
}

Student.defaultProps = {
  name: "No name",
  id: "No ID",
  isEnrolled: false,
};
