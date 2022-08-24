# Console styles for Bun

Type-safe wrapper around `ansi-styles`, similar to `chalk`.

### Example

You can provide a single style as a string, or multiple as an array of strings
to avoid callback hell common with chalk.

```ts
import { style } from "bun-style";

console.log(
  style(" Running tests.... ", ["bgGreen", "bold"])
);
```

![](/assets/example.png)