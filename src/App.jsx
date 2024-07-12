import { Navbar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
  <>
  <Navbar />;
  <ItemListContainer greeting="chau" />;
  </>
  );
}
export default App;