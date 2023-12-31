import * as React from "react";
import {View, Text, Image, StyleSheet,SafeAreaView,FlatList} from "react-native";
import PostCards from "./PostCards";

export default class Feed extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style ={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                
                    <View style={styles.appIcon}>
                        <Image
                            source={requestAnimationFrame("../assets/logo.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View Style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Espectagrama</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtrator={this.keyExtrator}
                        data={posts}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "black"
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? statusbar.currentHeight : RFValue(35)
    },
    appTitle:{
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon:{
        flex: 0.2, 
        justifyContent: "center", 
        alingItems: "center" 
    },
    iconImage:{
        width: "100%", 
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer:{ 
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color:"white",
        fontSize: RFValue(28)
    },
    cardContainer:{
        flex: 0.85
    }
})