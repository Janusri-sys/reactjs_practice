import React from 'react'
//with jsx
const Hello=()=>{
    // return(
    //     <div id="hello" className="dummy">
    //         <h1>Hello World</h1>
    //     </div>
    // )

    return React.createElement('div',{id:'hello',className:'dummy'},
    React.createElement('h1',null,'Hello world'),React.createElement('p',null,'Paragraph'))
}
export default Hello;
