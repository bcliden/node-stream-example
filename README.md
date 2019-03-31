## filter.js

This is am example program for dealing with streams in Node.

`filter.js` takes a stream of either 'x' or 'y' (utf8) via `stdin`.
Once a pattern is matched, it will print the pattern name to the console.
The patterns in this example are A: 'xxx' and B: 'xyx'.
Uncomment the `console.log` at ln.26 to see the buffer actively filling!

## generator.js

the `generator.js` program emits a sample stream of pseudorandom x and y characters.
Uncomment the `setTimeout` block to limit the program to 10 seconds.

### how to use:

You can pipe these programs together using the following command:

`node generator.js | node filter.js`
