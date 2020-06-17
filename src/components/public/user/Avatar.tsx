import React, { FC, createElement } from 'react'
import { View, Image, StyleSheet, ImageSourcePropType, Text, ViewStyle } from 'react-native'

interface IAvatarProps {
    source: ImageSourcePropType
    size?: 'xs' | 'sm' | 'md' | 'lg'
    style?: ViewStyle
    count?: number
    dot?: boolean
}

const defaultSize = {
    xs: { width: 20, height: 20 },
    sm: { width: 30, height: 30 },
    md: { width: 40, height: 40 },
    lg: { width: 50, height: 50 },
}

const Avatar: FC<IAvatarProps> = (props) => {
    const { size, source, style, count } = props

    const sizeStyle = size ? defaultSize[size] : {}

    const isCountOver = () => {

    }

    return (
        <View
            style={{ ...styles.avatar, ...sizeStyle, ...style }}
        >
            <Image source={source} />

            {
                createElement(
                    Text,
                    {
                        style
                    }
                )
            }
            <Text>{count}</Text>
        </View>
    )
}

Avatar.defaultProps = {
    size: 'md'
}

const styles = StyleSheet.create({
    avatar: {
        position: 'relative'
    },
    count: {
        position: 'absolute',
        right: -5,
        top: -5,
        backgroundColor: 'red',
        height: 10,
        minWidth: 10,
        textAlign: 'align',
        borderRadius: 5
    },
    dot: {
        position: 'absolute',
        right: -2,
        top: -2,
        backgroundColor: 'red',
        height: 4,
        minWidth: 4,
        borderRadius: 4
    }
})

export default Avatar
