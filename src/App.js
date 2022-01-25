import Navbar from "./components/Navbar/Navbar";

import ItemContainer from "./components/ItemListContainer/ItemContainer";


function App(){
    return(
      <div className="Container">
        <div className="Nav">
            <Navbar />
        </div>
        <div>
          <ItemContainer />
        </div>
      </div>
    );
}

export default App;


