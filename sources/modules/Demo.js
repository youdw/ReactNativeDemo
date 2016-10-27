import React from 'react';
import {Text,ListView,RefreshControl} from 'react-native';
/** 
 * Created with IntelliJ IDEA. 
 * User: east 
 * Date: 2016/10/25.
  * Time: 下午2:22. 
 */
export default class Demo extends React.Component {
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

    showData(rowData){
        return (
            <View style={styles.listView}>
                <Text style={[styles.listViewText]}>{rowData}</Text>
            </View>
        );
    }

    _onRefresh(){
        this.initData = this.initData.concat(["newRow"]);
        let newData =this.ds.cloneWithRows(this.initData);
        this.setState({dataSource:newData});
    }

    render() {
        return (
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
        )
    }
};