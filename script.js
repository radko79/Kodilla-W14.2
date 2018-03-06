// var element = React.createElement('div', {}, 'Hello world!');
// 	ReactDOM.render(element, document.getElementById('app'));

// var element1 =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'Lista filmów'),
//     React.createElement('ul', {},
//       React.createElement('li', {},
//         React.createElement('h2', {}, 'Harry Potter'),
//         React.createElement('p', {}, 'Film o czarodzieju')
//       ),
//       React.createElement('li', {},
//         React.createElement('h2', {}, 'Król Lew'),
//         React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
//       )
//     )
//   );
// ReactDOM.render(element1, document.getElementById('app'));

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Czarownik na miotła',
    pic: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages5.fanpop.com%2Fimage%2Fphotos%2F25800000%2FHarry-Potter-harry-potter-25862569-166-195.gif&f=1'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Hakuna Matata',
    pic: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FzeoxV7uCUCqt2%2Fgiphy.gif&f=1'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.pic})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));

	