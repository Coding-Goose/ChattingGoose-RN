import {StatusBar} from 'expo-status-bar';
import {ImageBackground, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import bg from './assets/bg.png';
import ChatItem from "./ChatItem";
import {DATA} from "./data";
import {useState} from "react";
import Message from "./Message";

export default function App() {

    const [homeVisible, setHomeVisible] = useState(true);
    const [selectedChat, setSelectedChat] = useState(null);

    const onChatClick = (el) => {
        setSelectedChat(el);
        setHomeVisible(false);
    }

    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
            <StatusBar style="auto"/>
            {
                homeVisible ?
                    <View style={styles.chatList}>
                        {
                            DATA.map(el => {
                                    return (
                                        <TouchableOpacity onPress={_ => onChatClick(el)}>
                                            <ChatItem key={el.username} username={el.username} avatar={el.avatar}
                                                      message={el.message}
                                                      time={el.time}></ChatItem>
                                        </TouchableOpacity>
                                    );
                                }
                            )
                        }
                    </View>
                    :
                    <View style={styles.messagesContainer}>
                        {selectedChat.messages.map(message => {
                            return (
                                <Message key={message} message={message}/>
                            );
                        })}
                    </View>
            }

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    chatList: {
        paddingTop: 70,
    },
    messagesContainer: {
        paddingTop: 70,
        alignItems: "flex-end",
        width: "100%"
    }
});
