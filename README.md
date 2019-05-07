# isso-client

Using [Svelte][3] for replacing the official hand-crafted [isso][2] client libraries with modern Web API counterparts.

## Development

**NOTE: Project is work in progress at the moment!**

Clone the project and install dependencies ...

```bash
git clone github.com:macedigital/isso-client.git
cd isso-client
npm ci
```

*Note that you will need to have [Node.js][4] installed.*

...then start [Rollup][5]:

```bash
npm run dev
```

Navigate to [localhost:10001](http://localhost:10001).

You should see your app running. Edit a component file in `src`, save it.

If livereload isn't working (which it should), reload the page to see your changes.

### Building library

Running a build

```bash
npm run build
```

will put minified files into the `/dist` folder, which are ready for production.

### Why svelte?

- Compiles components down to plain vanilla javascript
- Small bundle size with no additional runtime requirements
- Fully reactive with minimum amount of code to write

## License

MIT

[1]: https://posativ.org/isso/
[2]: https://github.com/posativ/isso
[3]: https://svelte.dev
[4]: https://nodejs.org
[5]: https://rollupjs.org
