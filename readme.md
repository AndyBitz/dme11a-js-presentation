# js-presentation with next.js

short presentation I made for school

## how to install 

clone repository

```bash
git clone https://github.com/AndyBitz/dme11a-js-presentation
```

move to the directory and install the dependencies

```bash
npm install
```

now you can build the project and start it with

```bash
npm run build && npm start
```

or alternatively you can use the development environment to make changes
```bash
npm run dev
```
and then build, start and host it.

## usage 

The host of the presentation can go to `/host`.
Every user who went on `/join` will then see the same slide as the host.
The project is written in javascript and uses the framework [next.js](https://github.com/zeit/next.js).
New slides are added to the `/pages/slides` folder. In addition the slide needs to be added to the `slides.json` file in `/static/`.


## infos

:rocket: made with [next.js](https://github.com/zeit/next.js)


