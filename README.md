# Empty React And Moralis app setup
Quick start a react app with Moralis, includes Authentication, login, Signup and Basic Menu + Route

Inspired by the Moralis Moralis video serie [React & Moralis Programming](https://www.youtube.com/playlist?list=PLFPZ8ai7J-iSbOoPePI9c_XCeZQLpOO2z), with only part 1 & 2 realized (see [Moralis Forum](https://forum.moralis.io/t/react-moralis-next-parts/1497/3?u=casnwk)).

Editor used: Visual Studio Code
with extensions:
- Babel ES6/ES7
- Babel Javascript
- Bracket Pair Colorizer --> (2)
- Prettier+

From a commandprompt, in a map where to create the app, where `<projectname>` is the name of your project (without spaces etc):
```
npx create-react-app <projectname>
cd <projectname>
del yarn.lock
npm install
npm audit fix
npm install @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4 @chakra-ui/icons
npm audit fix
npm install moralis react-moralis react-router react-router-dom
npm audit fix
cd src
del *
```

Clone (or use zip file) the js files from here (into src map)
  
Edit index.js and fill appId and serverUrl with your Moralis-server values

Happy coding!
