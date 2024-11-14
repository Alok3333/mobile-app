import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert, PanResponder } from 'react-native';
import { Appbar } from 'react-native-paper';

const IMAGE_URL = 'https://via.placeholder.com/300'; // Replace with your image URL
const IMAGE_PIECES = [
    { id: 0, x: 0, y: 0 },
    { id: 1, x: 100, y: 0 },
    { id: 2, x: 200, y: 0 },
    { id: 3, x: 0, y: 100 },
    { id: 4, x: 100, y: 100 },
    { id: 5, x: 200, y: 100 },
    { id: 6, x: 0, y: 200 },
    { id: 7, x: 100, y: 200 },
    { id: 8, x: 200, y: 200 },
    { id: 9, x: 100, y: 300 },
];

const ImgPuzzle = () => {
    const [pieces, setPieces] = useState(IMAGE_PIECES);
    const [selectedPiece, setSelectedPiece] = useState(null);

    const panResponders = pieces.map((piece) => {
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                setSelectedPiece(piece.id);
            },
            onPanResponderMove: (evt, gestureState) => {
                const newPieces = pieces.map((p) =>
                    p.id === piece.id
                        ? { ...p, x: p.x + gestureState.dx, y: p.y + gestureState.dy }
                        : p
                );
                setPieces(newPieces);
            },
            onPanResponderRelease: (evt, gestureState) => {
                const targetPosition = { x: piece.x, y: piece.y };
                if (
                    Math.abs(gestureState.moveX - targetPosition.x) < 50 &&
                    Math.abs(gestureState.moveY - targetPosition.y) < 50
                ) {
                    Alert.alert('Well Done!', 'You placed the piece correctly!');
                    // Logic to lock the piece in place or remove it from the array can be added here.
                } else {
                    Alert.alert('Try Again!', 'The placement is incorrect.');
                    // Reset piece position if necessary.
                }
                setSelectedPiece(null);
            },
        });
        return panResponder;
    });

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Image Puzzle Game" />
            </Appbar.Header>
            <View style={styles.box}>
                {pieces.map((piece, index) => (
                    <View
                        key={piece.id}
                        style={[
                            styles.piece,
                            {
                                left: piece.x,
                                top: piece.y,
                                position: 'absolute',
                            },
                        ]}
                        {...panResponders[index].panHandlers}
                    >
                        <Image
                            source={{ uri: IMAGE_URL }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    box: {
        width: '100%',
        height: 400,
        borderWidth: 2,
        borderColor: '#ccc',
        marginTop: 20,
        position: 'relative',
    },
    piece: {
        width: 100,
        height: 100,
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.8, // Make pieces slightly transparent
    },
});

export default ImgPuzzle;
