React的學習Project

## Table of Contents
- [JSX](#jsx)
- [Props & State](#props-and-state)
- [Basic Style](#basic-style)
- [Lists](#sending-feedback)
- [Style](#style)
- [Split into more components](#split)
- [Creation Life Cycle](#creation-life-cycle)
- [Update Life Cycle](#update-life-cycle)
- [React Hook - useEffect](#useEffect)
- [shouldComponentUpdate](#shouldComponentUpdate)
- [React.memo](#react-memo)
- [PureComponent](#pure-component)
- [Rendering Adjacent JSX Elements(HOC)](#adjacent)
- [setState With prevState](#setState-prevState)
- [PropType](#prop-type)
- [Refs](#refs)
- [Refs with React Hook](#refs-react-hook)
- [Prop Chain Problem](#prop-chain-problem)

## JSX

1. 單純的Javacript寫出像html的格式
2. React會轉換JSX code如下
   JSX : (< div className="App" >
          < h1 >Does this work now?< / >
         < /div >)
   轉換成 React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

## Props And State

1. 學習Statefull component 傳遞 Props 給dumb component
2. 使用 ES6 的 Arrow Function 來 使用 setState()，而不需使用bind
3. ReHook 的 useState() 的使用方式

## Basic Style

1. 使用 css file 於 js import 進來使用
2. Inline Style 使用

## Lists

1. 使用 ES6 Spreed Operator 來複製 State
2. Data Change without Mutation
3. 使用 ES6 Array Map 方式來產生 List 的 JSX code

## Style

1. Inline Code 動態更換 css style
2. 動態更換 className
   ex: let classes = ['red','bold'].join(' ');
   className={classes}
3. Install Radum
   Inline styles with pseudo selector
   StyleRoot with Media Queries
4. Install Styled Components
   styled.button`css code`
   pass props dynamic change css style
5. CSS Modules

## Split into more components

1. Organize Folder Structure
2. 實作於 App.js 內的JSX Code 切割成多個 Component

## Creation Life Cycle
1. Life Cycle
   a. constructor
   b. getDerivedStateFromProps
   c. render
   d. componentDidMount => can side effect

## Update Life Cycle
1. Life Cycle
   a. getDerivedStateFromProps
   b. shouldComponentUpdate
   c. render
   d. getSnapshotBeforeUpdate
   e. componentDidUpdate => can side effect

## React Hook - useEffect
1. Combind componentDidMount & componentDidUpdate
2. second argument to control if execute useEffect
   ex: useEffect(()=>{

   },[count])
   count有變化時才會觸發useEffect

3. second argument empty array => componentDidMount 只會運行一次
4. cleanup => componentWillUnmount
   useEffect(()=>{
      return () =>{
         cleanup code...
      }
   },[])

## shouldComponentUpdate
1. use shouldComponentUpdate for optimization class component

## React.memo
1. React.memo for optimization function component

## PureComponent
1. use PureComponent instead of shouldComponentUpdate

## Rendering Adjacent JSX Elements(HOC)
1. use array or Aux Component
 　<Aux>
      < h1 >xxxx< /h1 >
      < p >xxxx< /p >
   </Aux>
2. use React.Fragment

## setState With prevState
1. Setting State Correctly
   setState((prevState,props)=>{
      return {
        counter:prevState.counter + 1
      }
   })

## PropType
1. npm install --save prop-types
2. 可以定義 prop 是屬於哪種 type (string,number,func...)

## Refs
1. Class based JSX use ref can assign a element to input, then you can control this element in componentDidMount
    ex: 
    <input 
      type="text"
      ref={(inputEl)=>{this.inputElement= inputEl}}
      onChange={this.props.changed} 
      value={this.props.name} 
    />

    this.inputElement.focus()
2. Use this.inputElementRef = React.createRef() in constructor
   , then in JSX code <input ref={this.inputElementRef}...

## Refs with React Hook
1. In function component use useRef to ref dom
2. Then you can use ref dom in useEffect

## Prop Chain Problem
1. Use Context API
   a. use React.createContext to create context
   b. 使用<AuthContext.Provider>來覆蓋想使用context的component，必且初始化context裡的值
   c. 使用<AuthContext.Consumer>來取得context的值
2. Use contextType for class based component
   a. 宣告 static contextType 指向你所要的 context
   b. 之後使用 this.context.xxx 取的所需要的值
3. useContext for function based component