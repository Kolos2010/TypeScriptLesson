import React from "react";

function getGreetingPhrase(name: string) {
  return `Hello, ${name.toUpperCase()}!`;
}

const result1 = getGreetingPhrase("sometext");

const page = () => {
  return (
    <div>
      <h1>Пример 1</h1>
      <p>{result1}</p>
    </div>
  );
};

export default page;
