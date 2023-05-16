const Fs = require('fs');
const Path = require('path');
const Sass = require('node-sass');

const getComponents = () => {
  let allComponents = [];

  const types = ['atoms', 'molecules', 'organisms'];

  types.forEach((type) => {
    const allFiles = Fs.readdirSync(`src/${type}`).map((file) => ({
      input: `src/${type}/${file}`,
      output: `src/lib/${file.slice(0, -4)}css`,
    }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

const compile = (origin, destination) => {
  const result = Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(origin)).toString(),
    outputStyle: 'expanded',
    outFile: 'global.css',
    includePaths: [Path.resolve('src')],
  });

  Fs.writeFileSync(Path.resolve(destination), result.css.toString());
};

// compile('src/globals.scss', 'src/lib/global.css');

getComponents().forEach(({ input, output }) => {
  compile(input, output);
});

// console.log(getComponents());
// C:\Users\bmovl\code\react\react-entpr\scss\src\atoms\Button.scss
