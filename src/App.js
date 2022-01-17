import Navbar from "./components/Navbar/Navbar";

import Text from "./components/ItemListContainer/Text";


function App(){
    return(
      <div className="Container">
        <div className="Nav">
            <Navbar />
        </div>
        <div className="text-body">
            <Text />
        </div>
      </div>
    );
}

export default App;


