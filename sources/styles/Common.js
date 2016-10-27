import React from 'react';
import {StyleSheet, PixelRatio, Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
    main:{
        flexDirection:'column',
        flex:1
    }
    ,
    tab:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        flex:1,
        marginBottom:10
    }
    ,
    test:{
        // backgroundColor:'#fbfbfc',
        marginTop:50,
        flex:1
    },
    listView:{
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    searchIpView:{
        flexDirection:'row',
        height:40
    }
    ,
    searchIpInput:{
        height: 40,
        padding:0,
        margin:0,
        backgroundColor:'#E0EEE0',
        flex:1,
        paddingLeft:10
    },
    searchIpBtn:{
        width:50,
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#668B8B'
    },
    searchResult:{
        backgroundColor:'#E0EEE0',
        marginTop:50,
        alignItems:'center',
        justifyContent:'center',
        height:150,
    },
    resultText:{
        lineHeight:40,
        fontSize:20,
        color:'#778899'
    }

});

export default styles;