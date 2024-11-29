import './App.css';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import ApiContent from './components/api_content/ApiContent';
import GachaChar from './components/gacha_char/GachaChar';

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <ApiContent />
      <GachaChar />
    </>  
  )
}

export default App;