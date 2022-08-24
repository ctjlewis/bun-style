# Console styles for Bun

Type-safe wrapper around `ansi-styles`, similar to `chalk`.

### Example

You can provide a single style as a string, or multiple as an array of strings
to avoid callback hell common with chalk.

```ts
import { style } from "bun-style";

console.log(
  "\n\n",
  style(" Running tests... ", ["bold", "underline", "grey"]),
  "\n\n",
  style(" ✓ 10 tests passed", ["green"]),
  "\n\n",
);
```

![](/assets/example.png)