import  Button  from "./Button/Button";
import Input from "./Input"
import Card from "./Card/Card";


function App() {
 

  return (<div>
<h1>Hello React</h1>
<br />
<br />
    <img src="/vite.svg" alt="" /><br />
    <br />
<Input /><br />
<br />
<Button /><br />
<br />
<br />
<Card img="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png" tittle="card 1" discription="This is a info of card 1"/>
<Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aqwoL7VUtABCU-Ue2Bv_q56l_sreWwmyD93AXMwILHNASxrMvOei2xL1MVvnslIxo28&usqp=CAU" tittle="card 2" discription="This is a info of card 2"/>
<Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zU9oVJCA7L04y0hPqmpHz910ZezLgRFwFlE34BDrNHzXG87iT1sXA2_dnyn7QvD7ljI&usqp=CAU" tittle="card 3" discription="This is a info of card 3"/>
<Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFreSXEmZ0VI4RDHgKh_vtfrizWcR1wLTQjpeBkTvc4X08M_K59kibcbd3hQsrt-00DGE&usqp=CAU" tittle="card 4" discription="This is a info of card 4"/>

  </div>
      
  )
}

export default App
