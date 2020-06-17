import React, { FC } from 'react'
import { View, Text } from 'react-native'

import Badge from '../../components/public/Badge'

import Avatar from '../../components/public/user/Avatar'

const Chats: FC = () => {

    return (
        <View>

            <Badge dot count={555}>
                <Text >聊天列表111</Text>
            </Badge>
            {/*<Image*/}
            {/*    style={{ width: 100, height: 100, marginLeft: 150, marginTop: 200 }}*/}
            {/*    source={{ uri: 'http://ww2.sinaimg.cn/large/9150e4e5ly1fpqujr1r38j205s04dglk.jpg' }}*/}
            {/*/>*/}

            {/*<Avatar*/}
            {/*    source={{ uri: 'http://ww2.sinaimg.cn/large/9150e4e5ly1fpqujr1r38j205s04dglk.jpg' }}*/}
            {/*/>*/}
        </View>
    )
}

export default Chats
