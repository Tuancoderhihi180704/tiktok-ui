import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Paragrap(){
 const context = useContext(ThemeContext);
  return (
    <div>
        <p className={context.theme}>I have a small dog named Max. He has soft,
             brown fur and big, round eyes that shine with curiosity. 
             Max is very playful and energetic — he loves to run around the garden and chase butterflies. 
             He’s also very friendly and always wags his tail when he sees someone new. 
             At night, he curls up next to me and keeps me warm. Max is not just a pet; he’s a loyal friend and a part of my family.</p>
    </div>
  )
}
export default Paragrap;