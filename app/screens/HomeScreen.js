import React,{ useEffect,useState } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import axios from 'axios';

import HotelApp from '../components/AppHotel';

function HomeScreen() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://testict7.iau.org/api/Person/get`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);
    return (
        <View>
                {
                    APIData.map((hotel) =>{
                        return(
                            <View>
                                <ScrollView>
                                    <HotelApp hotel={hotel} />
                                </ScrollView>
                            </View>
                        )
                    })
                }
        </View>
        // <View>
        //     <View>
        //         <FlatList 
        //             data={APIData}  
        //             renderItem={({ item }) => ( 
        //                 <Hotel hotel={item} />
        //             )}/>
        //     </View>
        // </View>

    );
}

export default HomeScreen;