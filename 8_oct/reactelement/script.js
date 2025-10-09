// const h2=React.createElement('h2',{className:'subheadings',id:"subhead1"},'Hello Programmer')

const container=React.createElement('section',{className:'sections',id:'section1'},[
    React.createElement('h2',{className:'subheadings',id:'subhead1'},'FrontEnd development'),
    React.createElement('p',{className:'paragraphs',id:'id1'},"this is paragraph")
])
const Root=ReactDOM.createRoot(document.querySelector('#root'))

Root.render(container)
