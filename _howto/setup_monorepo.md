# HOW TO SET UP MONO REPOSITORY

## Steps

1. Create `packages` folder in root of your projects
2. Create packages inside of `packages` folder
3. At the root of the project initialize new `npm` project
4. install `lerna` package in the root of the project
5. initialize a new `lerna` project
   1. `yarn lerna init`
   2. this will crate `lerna.json` file
6. in `package.json` file set `"private": true` this will let yarn know that this is a private package
7. in the same folder set add `"workspaces": ["packages/*"]`
8. in `lerna.json` file
   1. add `"npmClient": "yarn"` this will let `lerna` know we are using a `yarn` as a package manager
   2. add `"stream": true` to let `lerna` display some useful information
   3. add `"useWorkspaces": true` to let lerna know we using a workspaces
9. 