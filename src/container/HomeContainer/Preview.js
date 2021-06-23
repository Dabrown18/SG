import React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Preview = ({
                   style,
                   item,
                   imageKey,
                   onPress,
                   index,
                   active,
                   local,
                 }) => {
  return (
    <TouchableOpacity
      style={[styles.videoContainer]}
      onPress={() => onPress(item)}>
      <View style={[styles.imageContainer, styles.shadow]}>
        <Image
          style={[styles.videoPreview, active ? {} : {height: 120}]}
          source={{
            uri: 'https://cdn.britannica.com/w:1100/04/167704-131-9D6F0EED/ant-wood-grass-horse-Formica-insect.jpg',
          }}
        />
      </View>
      <Text style={styles.desc}>{item.name}</Text>
      <Text style={styles.desc}>{`Chance of winning: ${parseInt(
        item.likelihoodOfWinning,
        10,
      )}%`}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  videoContainer: {
    width: 275,
    paddingVertical: 28,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  videoPreview: {
    width: 275,
    height: 155,
    borderRadius: 8,
    resizeMode: "cover",
  },
  desc: {
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default Preview;
