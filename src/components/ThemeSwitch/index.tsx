import React, { Component } from 'react';

import './ThemeSwitch.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export class ThemeSwitch extends Component {

  private darkTheme = false;

  onToggle(e: React.FormEvent<HTMLInputElement>) {
    console.log(e.currentTarget.checked);
  }

  render() {
    return (
      <div className="app-container__theme-switch">
        <h4 className="theme-switch__heading">Light Mode</h4>
        <div className="theme-switch__toggler">
          {this.darkTheme && <FontAwesomeIcon icon={faSun} />}
          <input onChange={(e) => this.onToggle(e)} type="checkbox" className="toggler__checkbox" id="checkbox" name="checkbox" />
          <label htmlFor="checkbox" className="toggler__slider"></label>
        </div>
      </div>
    )
  }
}

export default ThemeSwitch;
