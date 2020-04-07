React的學習Project


## Table of Contents
- [JSX](#jsx)
- [Props & State](#props-and-state)
- [Basic Style](#basic-style)
- [Lists](#sending-feedback)
- [Style](#style)


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

