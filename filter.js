// values we're looking for
// can also be taken in as CLI arguments
const A = "xxx";
const B = "xyx";

let lastThree = Array(3).fill(null);

function filter(buf) {
  const letter = buf.toString();
  lastThree.shift(); // remove the first elem
  lastThree.push(letter); // append letter third elem

  if (lastThree.join("") === A) {
    // do work, log event, etc
    process.stdout.write("A");
  }
  if (lastThree.join("") === B) {
    // do work, log event, etc
    process.stdout.write("B");
  }

  // uncomment to see the incoming stream fill the buffer
  console.log(lastThree);
}

process.stdin
  .setEncoding("utf8")
  .on("data", filter)
  .on("end", () => {
    console.log("stream ended.");
  })
  .on("error", console.error);
