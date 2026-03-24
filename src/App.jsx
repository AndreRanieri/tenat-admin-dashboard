import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CreateTenantForm from './components/CreateTenantForm';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <div className="main-header-wrapper">
          <Header />
        </div>
        <div className="main-body">
          <CreateTenantForm />
        </div>
      </div>
    </div>
  );
}

export default App;
