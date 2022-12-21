import { useState } from "react";
import "./App.css";

const questions = [false,false,false,false,false];

export const App = () => {

//const [isExpanded, setExpanded ] = useState([false]);
const [isExpanded, setExpanded ] = useState(questions);

  const toggleQuestion = event => {
    setExpanded(
      isExpanded.map((el,i)=> i === Number(event.target.id) ? !el : el )
      )
  }

  return (
    <div class="container">
        <div class="accordion">
           <h1>FAQ</h1>
           <button type="button" class="btn" id="expand-all" onClick={()=>setExpanded(isExpanded.map(()=>true))}>Expand All</button>
           <button type="button" class="btn" id="collapse-all" onClick={()=>setExpanded(questions)}>Collapse All</button>
            <div class="accordion-item">
              <p class="title" id="0" onClick={toggleQuestion}>
                First Question
              </p>
              {isExpanded[0] && <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
      
                  Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                </p>
              </div>}
            </div>
            <div class="accordion-item">
              <p class="title" id="1" onClick={toggleQuestion}>
                Second Question
              </p>
              {isExpanded[1] && <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
      
                  Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                </p>
              </div>}
            </div>
            <div class="accordion-item">
              <p class="title" id="2" onClick={toggleQuestion}>
                Third Question
              </p>
              {isExpanded[2] && <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
      
                  Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                </p>
              </div>}
            </div>
            <div class="accordion-item">
              <p class="title" id="3" onClick={toggleQuestion}>
                Furth Question
              </p>
              {isExpanded[3] && <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
      
                  Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                </p>
              </div>}
            </div>
            <div class="accordion-item">
              <p class="title" id="4" onClick={toggleQuestion}>
                Fifth Question
              </p>
              {isExpanded[4] && <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
      
                  Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                </p>
                </div>}
            </div>
        </div>
    </div>
  );
};
