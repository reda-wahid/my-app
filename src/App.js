import './App.css';
import NavBar from './component/NavBar';
import SlideHome from './component/SlideHome';
import SlideProduct from './component/SlideProduct';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Wrapper from './component/Wrapper';
import Discount from './component/Discount';
function App() {
  return (
   <>
   
     <div className='bg-slate-50'>
     <NavBar/> 
<div>
<div className="container m-auto">
<SlideHome />
<SlideProduct/>
<Discount/>
<Banner />
</div>
<Wrapper/>
<Footer />
</div>
    </div>
   </>
  );
}

export default App;
