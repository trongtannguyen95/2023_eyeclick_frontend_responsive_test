# 2023 EyeClick Test: Transform Figma into React Page with Responsive
- Code Base: NextJS Typescript
- Environment: Node 16

## Setting Up
- Run `npm install` in command prompt
- Run `npm run dev` to start the project
## Important Folders and Files
- `assets`: contains the assets files like images, icons pages of the website.
- `pages`: contains the `.tsx` files that will display pages of the website.
- `components`: contains the component `.tsx` will be used as component by pages files
- `styles`: contains css file for styling and theme file for MUI theme
- `utility`: contains file that will config emotion cache.
- `pages/_document.tsx`: this is the file that will be use to render the DOM by Next, all of the changes and config for DOM will be done here.
- `pages/_app.tsx`: this file will init the config and element for ReactJS firstime.
- `pages/index.tsx`: contains the function and html of the index page.
