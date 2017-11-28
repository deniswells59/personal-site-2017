import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class App extends Component {
  render() {
    return (
      <div className='App'>

        <div className='past'>
          <Link to="/personal">
            <button>
              Past?
            </button>
          </Link>
        </div>

        <div className='future'>
          <Link to="/professional">
            <button>
              Future?
            </button>
          </Link>
        </div>

      </div>
    );
  }
}

export default App;
