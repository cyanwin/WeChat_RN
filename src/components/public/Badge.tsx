import React, { FC, cloneElement } from 'react'
import { View, Text, StyleSheet } from 'react-native'

/**
 * @IBadgeProps 角标组件参数
 * @dot 纯小圆点
 * @count 计数
 * */
interface IBadgeProps {
    dot?: boolean
    count?: number
}

const Badge: FC<IBadgeProps> = ({ dot, count, children }) => {
    const isCountOver: string = count && count > 99 ? '99+' : `${count || ''}`

    const renderContext = dot && !count ? null : isCountOver

    const styleKey = ((count && 'count') || (dot && 'dot')) || ''

    const style = styleKey && styles[styleKey]

    return (
        <View style={{ flexDirection: 'row' }}>
            {children}
            {/*{cloneElement(children, { style: { position: 'relative' } })}*/}
            <View style={styles.badge}>
                <Text style={{ ...style }}>{renderContext}</Text>
            </View>
        </View>
    )
}

const grid = 4

const styles = StyleSheet.create({
    badge: {
        position: 'absolute'
    },
    dot: {
        position: 'absolute',
        right: -2,
        top: -2,
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: 'red'
    },
    count: {
        position: 'absolute',
        top: 10,
        right: -20,
        minWidth: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: 'red',
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
    }
})

export default Badge
