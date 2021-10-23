import React from 'react'
import { FlatList } from 'react-native'
import InvestmentItem from '../atom/InvestmentItem';

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
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2a',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aaf63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-1455ed72',
        title: 'Third Item',
    },
];

const InvestmentList = ({data, headerComponent, footerComponent}) => {
    const renderItem = ({ item }) => (
        <InvestmentItem data={item} />
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={headerComponent}
            ListFooterComponent={footerComponent}
        />
    )
}

export default InvestmentList
