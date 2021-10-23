import React from 'react'
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color } from '../styles/Color'
import { Dimens } from '../styles/Dimens'
import InvestmentDetail from '../components/molecules/InvestmentDetail'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const HomePage = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={{flex: 1}}>
            
            <ScrollView style={{}}>
                <View style={styles.secondaryBottomRoundedBackground}>
                    <Text style={[styles.whiteBoldMediumText]}>Welcome, DuitLover User!</Text>
                </View>
                
                <View style={styles.whiteShadowedCardView}>
                    <InvestmentDetail />
                </View>

                <View>
                    <Text style={styles.secondaryBoldBigText}>Active Investment List</Text>
                </View>

                <FlatList
                    nestedScrollEnabled 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ScrollView>

            <TouchableOpacity activeOpacity={0.9} style={styles.secondaryTopRoundedBackground}>
                <Text style={[styles.whiteBoldMediumText, {textAlign: 'center'}]}>Insert New Investment     +</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    whiteBoldMediumText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_medium,
        color: Color.white,
        padding: 12,
    },
    secondaryBoldMediumText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_medium,
        color: Color.secondary,
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    secondaryBoldBigText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_big,
        color: Color.secondary,
        paddingHorizontal: 12,
        paddingTop: 12,
    },
    darkBoldBigText: {
        fontWeight: 'bold',
        fontSize: Dimens.text_big,
        color: Color.dark,
        padding: 12
    },
    secondaryBackground: {
        backgroundColor: Color.secondary,
    },
    lightBackground: {
        backgroundColor: Color.light,
    },
    secondaryBottomRoundedBackground: {
        backgroundColor: Color.secondary,
        borderBottomStartRadius: 80,
        borderBottomEndRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    secondaryTopRoundedBackground: {
        backgroundColor: Color.secondary,
        borderTopStartRadius: 10, 
        borderTopEndRadius: 10
    },
    whiteShadowedCardView: {
        backgroundColor: Color.white,
        borderColor: Color.light_gray,
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
    },

    container: {
        flex: 1,
      },
      item: {
        backgroundColor: Color.white,
        borderColor: Color.light_gray,
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 12,
      },
      title: {
        fontSize: 32,
      },
})
