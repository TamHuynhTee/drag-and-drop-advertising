import React from 'react';

// const AppRouter = ({ children }: { children: React.ReactNode }) => {
//   return <div>{children}</div>;
// };
type MyProps = {
  children: React.ReactNode;
};
type MyStates = {
  message: string;
};

class ClassComponent extends React.Component<MyProps, MyStates> {
  constructor(props: MyProps) {
    console.log('constructor');
    super(props);
    this.state = {
      message: 'hello',
    };
    this.changeText = this.changeText.bind(this);
  }

  // Life Cycles
  componentDidMount(): void {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(
    nextProps: Readonly<MyProps>,
    nextState: Readonly<MyStates>,
    nextContext: any
  ): boolean {
    console.log('shouldComponentUpdate', { nextProps, nextState, nextContext });
    return true;
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<MyProps>,
    prevState: Readonly<MyStates>
  ) {
    console.log('getSnapshotBeforeUpdate', { prevProps, prevState });
    return null;
  }

  componentDidUpdate(): void {
    console.log('componentDidUpdate');
  }
  componentWillUnmount(): void {
    console.log('componentWillUnmount');
  }
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
    return null;
  }

  // Methods
  changeText(e: any) {
    console.log(e);
    this.setState((state) => ({
      message: state.message === 'hello' ? 'bye' : 'hello',
    }));
  }

  render() {
    return (
      <div>
        <p>
          {this.props.children} {this.state.message}
        </p>
        <button onClick={this.changeText}>Change</button>
      </div>
    );
  }
}

export default ClassComponent;
