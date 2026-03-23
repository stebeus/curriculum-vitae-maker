function Field({ name, type }) {
  return (
    <label>
      {name}: <input type={type} name={name} required />
    </label>
  );
}

export { Field };
