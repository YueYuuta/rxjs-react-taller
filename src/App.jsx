import './App.css';
import Component1 from './components/RxJS/component1';
import Component2 from './components/RxJS/component2';
import JcJunior from './pages/JcJunior/JcJunior';

function App() {
  return (
    <div className='App'>
      <h2>RxJS</h2>
      <Component1></Component1>
      <Component2></Component2>
      <h2>Context</h2>
      <JcJunior></JcJunior>
    </div>
  );
}

export default App;
