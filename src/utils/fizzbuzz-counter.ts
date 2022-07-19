export default function counter(
  fizzbuzzArray: (number | string)[]
): number | string {
  const num: number = fizzbuzzArray.length + 1;
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return num;
  }
}
