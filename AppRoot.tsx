import React, { FC, createElement } from 'react'
import { Router, Scene, StackProps, Tabs } from 'react-native-router-flux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Chats from './src/pages/main/Chats'
import Contacts from './src/pages/main/Contacts'
import Discover from './src/pages/main/Discover'
import Me from './src/pages/main/Me'

interface TabIconProps extends StackProps {
    focused: boolean
}

const config = [
    {
        key: 'Chats',
        icon: ({ focused, tintColor }: TabIconProps) => createElement(
            MaterialIcons,
            {
                name: focused ? 'chat-bubble' : 'chat-bubble-outline',
                size: 20,
                color: tintColor
            }
        ),
        component: Chats
    },
    {
        key: 'Contacts',
        icon: ({ focused, tintColor }: TabIconProps) => createElement(
            MaterialCommunityIcons,
            {
                name: focused ? 'account-group' : 'account-group-outline',
                size: 20,
                color: tintColor
            }
        ),
        component: Contacts
    },
    {
        key: 'Discover',
        icon: ({ focused, tintColor }: TabIconProps) => createElement(
            MaterialCommunityIcons,
            {
                name: focused ? 'compass' : 'compass-outline',
                size: 20,
                color: tintColor
            }
        ),
        component: Discover
    },
    {
        key: 'Me',
        icon: ({ focused, tintColor }: TabIconProps) => createElement(
            MaterialCommunityIcons,
            {
                name: focused ? 'account' : 'account-outline',
                size: 20,
                color: tintColor
            }
        ),
        component: Me
    }
]

const AppRoot: FC = () => {
    return (
        <Router>
            <Tabs key="tabBar">
                {
                    config.map(e => {
                        const { key, icon, component } = e

                        return (
                            <Scene
                                tabs
                                hideNavBar
                                key={key}
                                icon={icon}
                                component={component}
                            />
                        )
                    })
                }
            </Tabs>
        </Router>
    )
}

export default AppRoot
