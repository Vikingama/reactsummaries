import React, { Component } from "react";
import { CDNFlagIcon } from "react-flag-kit";

const localeMap = {
        "en-US": {
            locale: "en-US",
            flag: "US",
            content: "America"
        },
        "fr-FR": {
            locale: "fr-FR",
            flag: "FR",
            content: "France"
        },
        "es-ES": {
            locale: "es-ES",
            flag: "ES",
            content: "Spain"
        }
    },
    ThemeContext = React.createContext(),
    LocaleSelect = () => {
        return (
            <ThemeContext.Consumer>
                {context => (
                    <select
                        value={context.state.locale}
                        onChange={context.updateLocale}
                    >
                        <option value="en-US">America</option>
                        <option value="fr-FR">France</option>
                        <option value="es-ES">Spain</option>
                    </select>
                )}
            </ThemeContext.Consumer>
        );
    },
    LocaleFlag = () => {
        return (
            <ThemeContext.Consumer>
                {context => (
                    <CDNFlagIcon
                        code={context.state.flag}
                        size={256}
                        style={{
                            height: "128px"
                        }}
                    />
                )}
            </ThemeContext.Consumer>
        );
    },
    LocaleContent = () => {
        return (
            <ThemeContext.Consumer>
                {context => <p>{context.state.content}</p>}
            </ThemeContext.Consumer>
        );
    };

class LocaleSwitch extends Component {
    constructor() {
        super();
        this.state = localeMap["en-US"];
    }
    render() {
        return (
            <ThemeContext.Provider
                value={{
                    state: this.state,
                    updateLocale: e => {
                        this.setState(localeMap[e.target.value]);
                    }
                }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

class Flags extends Component {
    render() {
        return (
            <LocaleSwitch>
                <LocaleSelect />
                <br />
                <LocaleFlag />
                <br />
                <LocaleContent />
            </LocaleSwitch>
        );
    }
}

export default Flags;
