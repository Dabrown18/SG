import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from "react-native";
import {FlatListSlider} from 'react-native-flatlist-slider';
import Preview from './Preview';
import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
  query {
    ants {
        name
        length
        weight
        color
      }
  }
`;

const HomeContainer = () => {
  const {data, loading} = useQuery(QUERY);
  const [antData, setAntData] = useState([]);
  function generateAntWinLikelihoodCalculator() {
    return Math.random() * 100;
  }

  const images = [
    {
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
  ];

  useEffect(() => {
    let mutatedData = [];

    if (data?.ants?.length > 0) {
      data?.ants?.map(ant => {
        mutatedData.push({
          ...ant,
          likelihoodOfWinning: generateAntWinLikelihoodCalculator()
        });
      });

      const sortedAnts = mutatedData.sort(
        (a, b) => b?.likelihoodOfWinning - a?.likelihoodOfWinning,
      );
      setAntData(sortedAnts);
    }
  }, [data]);

  console.log('dlnlkdna', antData);

  return (
    <View style={styles.container}>
      {
        antData?.length > 0 && (
          <FlatListSlider
            data={antData}
            width={275}
            timer={5000}
            component={<Preview />}
            onPress={item => alert(JSON.stringify(item))}
            indicatorActiveWidth={40}
            contentContainerStyle={{paddingHorizontal: 16}}
          />
        )
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default HomeContainer;
