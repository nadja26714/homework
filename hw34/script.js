const UserCard = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <UserCard name="Мария" age={25} />
      <UserCard name="Алексей" age={30} />
      <UserCard name="Ирина" age={28} />
    </div>
  );
};