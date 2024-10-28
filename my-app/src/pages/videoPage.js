import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, Keyboard, ScrollView } from 'react-native';
import { Button, Card, Text, Title, IconButton } from 'react-native-paper';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
// import { Link } from 'expo-router';

const screenHeight = Dimensions.get('window').height;

const videoUrl = 'https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/10-2024-18-2437-AI%20Mentor%20(1).mp4';

const VideoPage = ({ navigator }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideoCompleted, setIsVideoCompleted] = useState(false);
    const videoRef = useRef(null);


    // Function to toggle play/pause
    const togglePlayback = () => {
        if (isPlaying) {
            videoRef.current.pauseAsync();
        } else {
            videoRef.current.playAsync();
        }
        setIsPlaying(!isPlaying);
    };

    // Function to handle video completion
    const handlePlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            setIsVideoCompleted(true);
        }
    };

    // Function to replay the video
    const replayVideo = () => {
        videoRef.current.replayAsync();
        setIsVideoCompleted(false);
        setIsPlaying(true);
    };

    return (

        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#F35668', '#8F52FB']}
                style={styles.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
            />
            <View style={styles.videoCard}>

                <Text variant="titleLarge" style={styles.title}>Watch the video to know more about AI Mentor</Text>
                <Video
                    ref={videoRef}
                    source={{ uri: videoUrl }}
                    style={styles.video}
                    resizeMode="contain"
                    shouldPlay={isPlaying}
                    onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                    onError={(error) => console.log("Video Error:", error)}
                />
                <View style={styles.controls}>
                    <IconButton
                        icon={isPlaying ? "pause-circle-outline" : "play-circle-outline"}
                        size={50}
                        onPress={togglePlayback}
                    />
                    {isVideoCompleted && (
                        <IconButton
                            icon="replay"
                            size={50}
                            onPress={replayVideo}
                        />
                    )}
                </View>

            </View>

            <LinearGradient
                colors={['rgba(255,255,255,0.2)', "rgba(255,255,255,0.4)"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientButtonBackground}
            >
                <Button
                    mode="contained"
                    icon="arrow-right"
                    iconPosition="right"
                    // onPress={()=> navigator.navigation('/login')}
                    style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                >
                    Continue to Login
                </Button>
            </LinearGradient>
        </View>

    );
};

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: screenHeight,
    },

    videoCard: {
        marginTop: 50,
        height: screenHeight - 250,
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        paddingBottom: 20
    },
    title: {
        // fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    video: {
        width: '100%',
        height: '70%',
        backgroundColor: 'black',
    },
    controls: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    gradientButtonBackground: {
        marginHorizontal: 50,
        marginVertical: 20,
        paddingVertical: 6,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        flexDirection: 'row',
    },

});

export default VideoPage;
