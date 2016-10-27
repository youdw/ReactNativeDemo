import React from 'react';
import {Text,View,ListView,RefreshControl,WebView} from 'react-native';
import Login from '../modules/Login';
import {connect} from 'react-redux';
import {login} from '../actions/IndexAction';/**/
import styles from '../styles/Common';
import SearchIp from '../modules/SearchIp';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ToolTabBar from '../modules/ToolTabBar';
import Icon from 'react-native-vector-icons/Ionicons';

/** 
 * Created with IntelliJ IDEA. 
 * User: east 
 * Date: 16/10/21.
  * Time: 下午2:45. 
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.tabNames=['IP查询', 'Tab2', 'Tab3'];
        this.tabIconNames=['ios-search','ios-albums','ios-paper-plane'];
    }

    render() {
        return (
            <View style={styles.main}>
                <ScrollableTabView style={styles.content}
                   renderTabBar={() => <ToolTabBar tabNames={this.tabNames} tabIconNames={this.tabIconNames}/>}>

                    <SearchIp tabLabel="1"/>
                    <View tabLabel="2">
                        <Icon name="ios-search" size={30} color="#900" />
                    </View>
                    <View tabLabel="3">
                        <Text>第三个工具，并没有什么东西</Text>
                    </View>

                </ScrollableTabView>
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

