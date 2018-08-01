import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import "assets/css/global.css";
import indexRoutes from "routes/index.jsx";
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from "layouts/Theme/Theme.jsx";
// userInfo
import {UserContext} from 'UserContext.js';

const hist = createBrowserHistory();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        // loginUser Info
        this.setState({
            user: {
                "mail": "zj_john@qq.com",
                "displayName": "zjjohn"
            }
        });
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                <Router history={hist}>
                    <Switch>
                        {indexRoutes.map((prop, key) => {
                            return <Route path={prop.path} component={prop.component} key={key}/>;
                        })}
                    </Switch>
                </Router>
            </UserContext.Provider>
        );
    }
}

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <App/>
</MuiThemeProvider>, document.getElementById("root"));
