const games = require('./games.json');

const bgImageFromStyle = (styleStr = '') =>
  styleStr.replace("background-image: url('", '').replace("');", '');

const gameList = [];
games.children.map(({ children: [{ href, style }, { children }] }) => {
  // console.log(href);
  // console.log(bgImageFromStyle(style));
  // console.log(typeof children);
  if (children) {
    const [_, item] = children;

    if (item.html) {
      gameList.push({
        image: `https://sol1.casino${bgImageFromStyle(style)}`,
        name: item.html,
        href: `https://sol1.casino${href}`
      });
    }
  }
});

console.log(JSON.stringify(gameList));
