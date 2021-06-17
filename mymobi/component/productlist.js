import React,{useState , useEffect} from "react";
import {StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import json from "./db.json";


function ProductList(){
    var[data]=useState(json);
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    return(
        <ScrollView style={styles.listContainer}>
            <Text>List of products</Text>
            <View>
                {
                    data.map((item)=>{
                        return(
                            <View key={item.id} style={styles.productBlock}>
                                <Image style={styles.placeImage} source={{uri:item.image}}></Image>
                                <Text style={styles.textVal}>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    listContainer:{
        width:"80%"
    },
    placeImage:{
        height:200
    },
    productBlock:{
        marginBottom:"5%",
        border:"1px solid black"
    },
    textVal:{
        fontSize:30,
        textAlign:"center",
        color:'olive'
    }
})

export default ProductList;