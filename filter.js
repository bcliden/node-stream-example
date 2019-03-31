// values we're looking for
// can also be gathered from CLI arguments, .env variables, etc
const patterns = {
  A: "xxx",
  B: "xyx"
};

let lastThreeVals = Array(3).fill(null);

process.stdin
  .setEncoding("utf8")
  .on("data", filter)
  .on("end", () => console.log("stream ended."))
  .on("error", console.error);

function filter(buf) {
  const letter = buf.toString();
  lastThreeVals.shift(); // remove the first elem
  lastThreeVals.push(letter); // append letter third elem

  Object.keys(patterns)
    .filter(key => lastThreeVals.join("") === patterns[key]) // filter only matching patterns
    .forEach(key => process.stdout.write(key)); // emit Key name if a match is found

  // uncomment to see the incoming stream fill the buffer
  // console.log(lastThreeVals);
}
