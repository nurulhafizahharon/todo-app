const person = {
  name: "Fiza",
  address: {
    line1: "Baker Street London",
    city: "London",
    country: "UK",
  },
  profiles: ["twitter", "linkedln", "instagram"],
  printProfile: () => {
    person.profiles.map((profiles) => console.log(profiles));
    console.log(person.profiles[0]);
  },
};

function LearningJavaScript() {
  return (
    <>
      <div>Learning JavaScript</div>
      <div>{person.name}</div>
      <div>{person.address.line1}</div>
      <div>{person.address.city}</div>
      <div>{person.address.country}</div>
      <div>{person.profiles[0]}</div>
      <div>{person.printProfile()}</div>
    </>
  );
}

export default LearningJavaScript;
