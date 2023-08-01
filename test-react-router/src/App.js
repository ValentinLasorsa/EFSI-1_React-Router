import logo from './logo.svg';
import './App.css';
import './pages/Layout.js';
import './pages/Persona';
import './pages/Contacto';
import './pages/Home.js';


function App() {
  return (
    <BrowserRouter>
       <Routes>
       	<Route path="/" element={<Layout />}>
	  		<Route index element={<Home />}></Route>
	  		<Route path="/quienes-somos" element={<Nosotros/>}></Route>
<Route path="/quienes-somos/:personaId" element={<Persona/>}></Route>
  		<Route path="/contacto" element={<Contacto />}></Route>
<Route path="*" element={<h1>404</h1>}></Route>
	</Route>
       </Routes>
     </BrowserRouter>
  )
}

export default App;
