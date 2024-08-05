export default function Food() {
  const food1 = "orange";
  const food2 = "apple";
  const food3 = "banana";

  return (
    <div>
      <h1>My Favorite Foods</h1>
      <ul>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3.toUpperCase()}</li>
      </ul>
    </div>
  );
}
