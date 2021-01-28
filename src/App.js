import Header from './components/Header';
import Layout from './components/LayoutBlock';
import Footer from './components/Footer';

import bg1 from './components/LayoutBlock/img/bg1.jpg';
import bg2 from './components/LayoutBlock/img/bg2.jpg';
import bg3 from './components/LayoutBlock/img/bg3.jpg';

const App = () => {
  return (
    <>
     <Header
        title="This is title"
        descr="This is Description!"
     />
     <Layout
        if="first"
        title="Pocemon"
        desc="Game"
        urlBg={bg1}
     />
     <Layout
        colorBg="red"
     />
     <Layout
        urlBg={bg2}
     />
     <Footer/>
    </>
  )
};

export default App;