import React , { useState } from 'react';
import { View, Image, TouchableHighlight, Button } from 'react-native';
import { WheelPicker, Item } from "react-native-android-wheel-picker";

import MyText from './MyText';


function Hotel(props) {
    var myvar1;
    var myvar2;
    var myvar3;

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // const myPrice=

    const [price, setPrice]=useState('');

    const handlePrice=(e)=>{
        if(myPrice[myvar2]!==undefined){
            myPrice[myvar2].innerHTML='';
        }
        myvar1 = e.target.childNodes[e.target.selectedIndex].getAttribute('data-price')
        myvar2 = e.target.childNodes[0].getAttribute('data-id') - 1
    }

    return (
        <View style={styles.mainContainer} key={props.Id}>
            <TouchableHighlight /*onPress={handleShow}*/>
                <Image>{props.image}</Image>
                <MyText>{props.name}</MyText>                
            </TouchableHighlight>
            <View style={styles.mainContainer}>
                <View style={styles.subContainer}>
                    <MyText>نوع تخت</MyText>
                    <WheelPicker backgroundColor="White" itemStyle={styles.picker} onValueChange={handlePrice}>
                        {
                            [...Array(10).keys,"انتخاب کنید..."].map((value,index)=>{
                                return <Item label={index+1} value={index+1} />
                            })
                        }
                    </WheelPicker>
                </View>
                <View style={styles.subContainer}>
                        <View style={styles.mainContainer}>
                            <MyText>قیمت:</MyText>
                            <Text>{price}</Text>
                        </View>
                        <TouchableHighlight onPress={} onFocus={styles.btnHover}>
                            <Button>رزرو</Button>
                        </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'rgb(246, 114, 66)',
        color:'White',
        borderTopLeftRadius:25,
        borderTopRightRadius:10,
        borderBottomRightRadiuys:25,
        borderBottomLeftRadius:10,
        transition:1
    },
    btnHover:{
        backgroundColor:'rgb(241, 25, 25)',
        color:'#000',
        scale:1.1
    },
    picker:{
        color:'#1e90ff'
    },
    mainContainer:{
        flexDirection:'column', 
        backgroundColor:'White',
        flex:1,
        margin:5,
        padding:5,
        borderWidth:2,
        borderColor:'#ccc',
        borderRadius:10
    },
    subContainer:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#737373',
        marging:5,
        padding:5
    }
})
export default HotelScreen;