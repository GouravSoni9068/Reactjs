let ele=React.createElement('h1',null,"Hello from React");

let parent=document.querySelector('#parent')

let root = ReactDOM.createRoot(parent)

root.render(ele)
