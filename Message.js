import {StyleSheet, Text, View} from "react-native";

export default function Message(props) {
    return (
        <View style={styles.messageBox}>
            <Text>
                {props.message}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    messageBox: {
        padding: 10,
        margin: 10,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 20
    }
});
