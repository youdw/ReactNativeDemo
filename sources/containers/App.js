import React from 'react';
import {Text,View,ListView,RefreshControl} from 'react-native';
import Login from '../modules/Login';
import {connect} from 'react-redux';
import {login} from '../actions/IndexAction';/**/
import styles from '../styles/Common';
/** 
 * Created with IntelliJ IDEA. 
 * User: east 
 * Date: 16/10/21.
  * Time: 下午2:45. 
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.initData = ['row 1', 'row 2'];
        this.state = {
            dataSource: this.ds.cloneWithRows(this.initData),
            isRefreshing:false
        };

        console.log(this.state.dataSource,"----");
    }

    render() {
        return (
            <View style={styles.test}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.showData(rowData)}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={()=>this._onRefresh()}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                        />}
                />
            </View>
        )
    }


    showData(rowData){
        return (
            <View style={styles.listView}>
                <Text style={[styles.listViewText]}>{rowData}</Text>
            </View>
        );
    }

    _onRefresh(){
        this.initData = this.initData.concat(["newRow"]);
        // let sources = this.initData.concat(["row"]);
        console.log(this.initData,"........");
        let newData =this.ds.cloneWithRows(this.initData);
        console.log("刷新了");
        this.setState({dataSource:newData});
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

