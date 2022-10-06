# ffi-ex

FFI example with Bun and Rust.

## About

This is a simple CLI (TypeScript w/ Bun is a driver, Rust dylib contains and exposes `spawn` implementation) that can run given commands.

## Example

Running:

```shell
bun src/index.ts echo 'sup!'
```

Will output:

```
Spawning... echo sup!
...
sup!
```

## License

No license, do whatever you want.
