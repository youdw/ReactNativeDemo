import React from 'react';
import {Text, TextInput, View, TouchableHighlight, Platform} from 'react-native';
import styles from '../styles/Common';
/** 
 * 查询ip归属地
 * User: east 
 * Date: 2016/10/25.
  * Time: 下午2:24. 
 */
export default class SearchIp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            address: <Text></Text>
        }
    }

    handleChange(text) {
        this.setState({text: text});
    }

    onSearch = async(ip) => {
        try {
            let response = await fetch('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=' + this.state.text);
            let responseJson = await response.json();
            console.log(responseJson);
            if(responseJson.ip){
                this.setState({address:<View style={styles.searchResult}><Text style={styles.resultText}>😯查不着！看着像个局域网啊</Text></View>});
            }else if(responseJson == -3){
                this.setState({address:<View style={styles.searchResult}><Text style={styles.resultText}>错误的IP地址</Text></View>});
            }else {
                this.setState({
                    address: (
                        <View style={styles.searchResult}>
                            <Text style={styles.resultText}>国家：{responseJson.country}</Text>
                            <Text style={styles.resultText}>省区：{responseJson.province}</Text>
                            <Text style={styles.resultText}>市区：{responseJson.city}</Text>
                        </View>
                    )
                });
            }
        } catch (error) {
            this.setState({address: <View style={styles.searchResult}><Text style={styles.resultText}>error</Text></View>});
        }
    };

    render() {
        return (
            <View style={styles.tab}>
                <View style={styles.searchIpView}>
                    <TextInput
                        style={styles.searchIpInput} placeholder="请输入要查询的ip"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.handleChange(text)}
                        value={this.state.text}
                    />
                    <TouchableHighlight underlayColor="#AEEEEE" onPress={()=>this.onSearch()}
                                        style={styles.searchIpBtn}>
                        <View >
                            <Text style={{color: '#fff'}}>查询</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {this.state.address}
            </View>
        )
    }
};