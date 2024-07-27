import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop.tsx";

import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
