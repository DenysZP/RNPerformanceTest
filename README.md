# React Native Performance test project

## Build application
- - - -

### Before build

```bash
yarn
```

```bash
cd ios && pod install && cd ..
```


### Android

```bash
yarn android
```

### iOS

```bash
yarn ios
```

## Performance best practices
- - - -

1. For components that contain only primitive data, you can perform a "shallow comparison" by making it a `React.PureComponent`, which automatically implements a `shouldComponentUpdate()` function. Using these as opposed to regular components can speed up React's re-rendering process.

   React components can also be defined as functions which can be wrapped by React.memo.

2. For components that contain not primitive data (like functions or objects), you should use your own `shouldComponentUpdate()` implementation. At the same time, do not forget about the time spent comparing the previous props and the current ones. 

    ```javascript
    shouldComponentUpdate(nextProps) {
      return !R.equals(nextProps, this.props);
    }
    ```
   
    The HOC (Memo) approach also works great. Unlike the `shouldComponentUpdate()` method on class components, the areEqual function returns true if the props are equal and false if the props are not equal.

    ```javascript
    const areEqual = (prevProps, nextProps) => R.equals(nextProps, this.props);
    export default React.memo(MyComponent, areEqual);
    ```
   
3. Remove objects initialization and functions definition from the render method.
    
   For example:
   * style, prop, date, etc. objects initialization;
   * arrow functions;
   * component creators like `renderItem`;

4. Additional state checks. If the current state is: `{ stateKey: 'stateValue' }` and you call:
   
    ```javascript
    this.setState({ stateKey: 'stateValue' })
    ```

    a render will occur although the actual state did not change:
`prevState !== nextState`, but:
`prevState.stateKey === nextState.stateKey`

    To deal with it, make sure to not set state where it doesn’t have to change:
  
    ```javascript
    if (newStateKeyValue !== this.state.stateKey) { 
      this.setState({{ stateKey: newStateKeyValue }})
    }
    ```
5.  Children are just props.
So what usually happens is that you want something to be pure but pass a new reactElement to it all the time:
    ```html
    <PureFather>
      <SomeChild/>
    </PureFather>
    ```

    This is because it is equivalent to:
    ```html
    <PureFather children={<SomeChild />} />
    ```
    And when react shouldComponentUpdate runs it re-renders since:
`this.props.children !== nextProps.children`
    
     A good way to deal with it is to create a pure wrapper:

    ```html
    class PureFatherWrapper extends React.PureComponent{
      render(){
        return (
          <PureFather>
            <SomeChild/>
          </PureFather>
        )
      }
    }
    ```

    This will ensure your father never re-renders.

6. Use Reselect in Redux to Avoid Frequent Re-render. Because a selector is not recomputed unless one of its arguments changes.
   
7. Better to set primitive data for FlatList items (for example id) instead of set complex object. And in an item itself, receive a required object. There are several advantages to this approach:
   
     * the ability to use the `React.PureComponent`;
     * savings on comparing nested data;

## Links
- - - -

* https://medium.com/welldone-software/why-did-you-render-mr-big-pure-react-component-2a36dd86996f
  
* https://medium.com/welldone-software/why-did-you-render-mr-big-pure-react-component-part-2-common-fixing-scenarios-667bfdec2e0f

* https://reactjs.org/docs/react-api.html#reactpurecomponent

* https://www.codementor.io/blog/react-optimization-5wiwjnf9hj

* https://www.merixstudio.com/blog/react-native-performance
