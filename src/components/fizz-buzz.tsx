import { useState } from "react";
import counter from "../utils/fizzbuzz-counter";
import ArrayArranger from "./array-arranger";

export default function FizzBuzz(): JSX.Element {
  const [prevStoredNumbers, queueRerenderNumbers] = useState<
    (number | string)[]
  >([1]);
  const nextNumber: number | string = counter(prevStoredNumbers);
  const handleNextNumber = () => {
    queueRerenderNumbers((prevStoredNumbers) => [
      ...prevStoredNumbers,
      nextNumber,
    ]);
  };

  return (
    <>
      <h1>Fizzbuzz player</h1>
      <p>Your current number: {prevStoredNumbers.length}</p>
      <button onClick={handleNextNumber}>Next</button>

      <p>Your FizzBuzz sequence: {prevStoredNumbers.map(ArrayArranger)}</p>
    </>
  );
}
