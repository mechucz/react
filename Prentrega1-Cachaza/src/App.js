
import './App.css';
import NavBar from './componentes/NavBar.js';
import ItemListContainer from './componentes/ItemListContainer.js';

function App() {
  return (
<>
<NavBar/>
<ItemListContainer 
  greeting='Un mercadito de ropa previamente amada y querida'
  />
<ItemListContainer 
  greeting='Consume de manera consciente'
  imagen="https://mechucz.github.io/mercaditoCool/assets/images/closet.jpeg"
/>
<ItemListContainer/>
<ItemListContainer/>

</>
  );
}

export default App;
