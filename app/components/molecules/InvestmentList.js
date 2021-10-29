import React from 'react'
import { FlatList } from 'react-native'
import InvestmentItem from '../atom/InvestmentItem';

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
