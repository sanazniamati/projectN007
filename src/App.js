//import library
import {Stage,Layer,Circle,RegularPolygon} from 'react-konva';

function App() {
  return (
   <>
     <button>change width</button>
       <button>change height</button>
       <Stage  width={window.innerWidth} height={window.innerHeight}>
           <Layer>
               <Circle
                   x={100}
                   y={100}
                   width={100}
                   height={100}
                   fill="red"
                   shadowBlur={5}
               />
               <RegularPolygon
                   sides={10}
                   x={100}
                   y={100}
                   width={100}
                   height={100}
                   fill="red"
                   shadowBlur={5}
               />
           </Layer>
       </Stage>
   </>
  );
}

export default App;
