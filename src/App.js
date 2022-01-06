import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.scss';

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />

        <div className="others">oi</div>
      </div>
    </div>
  );
}

export default App;
