import Hero from './components/header'
import Main from './components/main'
import './App.css'

function App() {
  return (
    <>
      <Hero title={`Title`} subtitle={'Some about text'} subtitle1={'in two lines'} />
      <Main
        aName={'Portfolio'}
        aBody={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de mons trate the visual form of a document or a typeface without relying on.'}
        img={'https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        description={'photo 1'} 
        img2={'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        description2={'photo 2'}
      />
    </>
  );
}

export default App;

