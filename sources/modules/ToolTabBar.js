'use strict';
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
/** 
 * Created with IntelliJ IDEA. 
 * User: east 
 * Date: 2016/10/27.
  * Time: 下午1:51. 
 */
export default class ToolTabBar extends React.Component {
    static propTypes = {
        goToPage: React.PropTypes.func, // 跳转到对应tab的方法
        activeTab: React.PropTypes.number, // 当前被选中的tab下标
        tabs: React.PropTypes.array, // 所有tabs集合
        tabNames: React.PropTypes.array, // 保存Tab名称
        tabIconNames: React.PropTypes.array, // 保存Tab图标
    };

    renderTabOption(tab, i) {
        const color = this.props.activeTab == i? "#B0E2FF" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab} key={"bar"+i}>
                <View style={styles.tabItem}>
                    <Icon
                        name={this.props.tabIconNames[i]}  // 图标
                        size={30}
                        color={color}/>
                    <Text style={{color: color}}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 60,
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'#F0F8FF'
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});