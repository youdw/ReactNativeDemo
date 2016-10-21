import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import App from './containers/App';
import configureStore from './store/Store';
/** 
 * Created with IntelliJ IDEA. 
 * User: east 
 * Date: 16/10/21.
  * Time: 下午2:39. 
 */
export default class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            store: configureStore(() => this.setState({isLoading: false})),
        };
    }

    render() {
        if (this.state.isLoading) {
            return null;
        }
        return (
            <Provider store = {this.state.store} >
                <App/>
            </Provider>
        )
    }
};