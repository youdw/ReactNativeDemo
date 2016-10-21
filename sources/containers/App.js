import React from 'react';
import {Text,View} from 'react-native';
import Login from '../modules/Login';
import {connect} from 'react-redux';
import {login} from '../actions/IndexAction';/**/
/** 
 * Created with IntelliJ IDEA. 
 * User: east 
 * Date: 16/10/21.
  * Time: 下午2:45. 
 */
class App extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        // this.props.dispatch(login())/**/
    }

    render() {
        console.log(this.props.LoginInfo,"//////");
        return (
            <View>
                <Text>
                   HEllp
                </Text>
            </View>
        )
    }
};

export default connect(
    state => {
        let {LoginInfo} = state;
        return {
            LoginInfo
        }
    }
)(App);

