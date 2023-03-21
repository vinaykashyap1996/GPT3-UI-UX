import './App.css';
import { Brand , Cta , Navigation} from './Components'
import { Footer , Header , Blog , Features , Whatgpt, Possibility} from './Containers'

const App = () => {
  return (
   <div className='app'>
    <div className='gradient__bg'>
    <Navigation/>
    <Header/>
    </div>
    <Brand />
    <Whatgpt/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
   </div>
  );
}

export default App;
