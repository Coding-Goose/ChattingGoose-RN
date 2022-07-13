import {Text, View, StyleSheet, Image} from "react-native";

export default function ChatItem(props) {
    return (
        <View style={styles.chatItem}>
            <Image style={styles.avatar} source={props.avatar}></Image>
            <View style={styles.middleContainer}>
            <Text style={styles.userName}>{props.username}</Text>
            <Text>{props.message}</Text>
            </View>
            <Text style={styles.time}>{props.time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    chatItem: {
        width: '95vw',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderWidth: 1,
        borderColor: '#454961',
        flexDirection: "row"
    },
    userName: {
        fontWeight: "bold"
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: '50%',
    },
    middleContainer: {
        justifyContent: 'space-between',
        marginLeft: 10
    },
    time: {
        fontWeight: "bold",
        flex: 1,
        textAlign: "right"
    }
});
