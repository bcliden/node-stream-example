var interval = setInterval(emit, 500);

// setTimeout(() => {
//   clearInterval(interval);
// }, 10000);

function emit() {
  let int = Math.round(Math.random());
  // console.log(int === 1 ? "x" : "y");
  process.stdout.write(int === 1 ? "x" : "y");
}
