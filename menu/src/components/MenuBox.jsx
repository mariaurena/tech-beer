import { Link } from 'react-router-dom';
import './MenuBox.css';

function MenuBox({ onRouteChange }) {

  const handleRouteChange = (path) => {
    onRouteChange(path);
  };

  return (
    <div className="menu-container">
      <div className="menu-content">
        <div className="menu">
          <div className="menu-title">Menú</div>
          <ul className="menu-options">
            <li><Link to="/catalogo" className = "menu-link" onClick={() => handleRouteChange('/catalogo')}>Catálogo</Link></li>
            <li><Link to="/ventas" className = "menu-link" onClick={() => handleRouteChange('/ventas')}>Ventas</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuBox;
