import React from "react";

export default function task() {
  return (
    <GroceryApp
      products={[
        { name: "Oranges", votes: 0 },
        { name: "Apples", votes: 0 },
        { name: "Bananas", votes: 0 },
      ]}
    />
  );
}

const Product = (props) => {
  const { name, votes, onVote, index } = props;

  const plus = () => {
    onVote("up", name);
  };
  const minus = () => {
    onVote("down", name);
  };
  return (
    <li>
      <span>{name}</span> - <span>votes: {votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

class GroceryApp extends React.Component {
  // Finish writing the GroceryApp class
  constructor(props) {
    super(props);
    this.state = { Oranges: 0, Apples: 0, Bananas: 0 };
  }

  onVote = (dir, index) => {
    console.log(dir);
    if (dir === "up") {
      this.setState((prevState, props) => ({
        [index]: (prevState[index] += 1),
      }));
    } else {
      this.setState((prevState, props) => ({
        [index]: (prevState[index] -= 1),
      }));
    }
  };

  render() {
    const { products } = this.props;
    console.log(this.state);
    return (
      <ul>
        {products.map(({ name, votes }, i) => (
          <Product
            index={i}
            key={name}
            onVote={this.onVote}
            name={name}
            votes={this.state[name]}
          />
        ))}
      </ul>
    );
  }
}

//   ReactDOM.render(<GroceryApp
//     products={[
//       { name: "Oranges", votes: 0 },
//       { name: "Apples", votes: 0 },
//       { name: "Bananas", votes: 0 }
//     ]}
//   />, document.getElementById('root'))
