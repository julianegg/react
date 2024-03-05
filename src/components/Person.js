export default function Person({ name, description }) {
  return (
    <div className="Person">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}
