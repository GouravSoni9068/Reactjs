function customRender(reactElement,root)
{
    let ele=document.createElement(reactElement.type)
    ele.innerHTML=reactElement.children
    
    for (let element in reactElement.props) {
        
        ele.setAttribute(element,reactElement.props[element])
        
    }
    console.log(ele);

    root.appendChild(ele)
}


let reactElement={
    type:'a',
    props:{
        href:"http://google.com",
        target:"_blank"
    },
    children:'click me'
}                                                   

let root=document.getElementById('root')

customRender(reactElement,root)
customRender(reactElement,root)
