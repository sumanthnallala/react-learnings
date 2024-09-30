// this is an example of creating a react element using the createElement method

const root = ReactDOM.createRoot(document.getElementById('root'));
const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('h1', { key: 'h1' }, 'Hello World'),
  React.createElement('h2', { key: 'h2' }, 'Hello World'),
]);
root.render(parent);