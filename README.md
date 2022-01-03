# Clio browser compiler

Based on [Clio playground](https://github.com/clio-lang/clio/tree/develop/packages/playground).

## Usage

```html
<script src="https://cdn.jsdelivr.net/npm/@live-codes/clio-browser-compiler/public/build/compile.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@live-codes/clio-browser-compiler/public/build/exec.js"></script>

<script>
  const src = `
export fn main:
  console.log "Hello world!"
`;

  (async () => {
    const { code } = await clioCompiler.compile(src);
    await clio.exec(
      code,
      "https://cdn.jsdelivr.net/npm/@live-codes/clio-browser-compiler/public/build/worker.js"
    );
  })();
</script>
```

## License

Apache License 2.0, same as Clio.
