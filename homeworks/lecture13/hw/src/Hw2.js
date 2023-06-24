import './Hw2.css';
import signal from './signal.png';
import battery from './battery.png';
import appIcon from './appIcon.png';

import { useState, useEffect } from 'react';

function App({ name, icon, callback }) {
      const handleClick = (e) => {
            if (e.target.nodeName === "P") alert(`${e.target.id} clicked`);
            else alert(`${e.target.name} clicked`);
            callback(e.target);
      }

      return (
            <div className="app" name={name} onClick={handleClick}>
                  <img className="appIcon" name={name} src={icon} alt={name} />
                  <p id={name} className="appName">{name}</p>
            </div>
      )
}

function Hw2() {
      const [time, setTime] = useState(new Date());
      const [apps, setApps] = useState([
            { name: "App1", icon: appIcon },
            { name: "App2", icon: appIcon },
            { name: "App3", icon: appIcon },
            { name: "App4", icon: appIcon },
            { name: "App5", icon: appIcon },
            { name: "App6", icon: appIcon },
            { name: "App7", icon: appIcon },
            { name: "App8", icon: appIcon },
            { name: "App9", icon: appIcon },
            { name: "App10", icon: appIcon },
            { name: "App11", icon: appIcon }
      ]);

      useEffect(() => {
            const intervalId = setInterval(() => {
                  setTime(new Date());
            }, 1000);
            return () => {
                  clearInterval(intervalId);
            }
      });

      const handleAppClick = (message) => {
            console.log(message);
      }

      return (
            <div className="Hw2">
                  <div id="phone">
                        <div id="statusBar">
                              <img id="signal" className="navicons" src={signal} alt="signal" />
                              <strong id="time">{time.toLocaleString().split(" ")[1]}</strong>
                              <img id="battery" className="navicons" src={battery} alt="battery" />
                        </div>
                        <div id="apps">
                              {
                                    apps.map(app => (
                                          <App
                                                key={app.name}
                                                name={app.name}
                                                icon={app.icon}
                                                callback={handleAppClick}
                                          />)
                                    )
                              }
                        </div>
                  </div>
            </div>
      )
}

export default Hw2;