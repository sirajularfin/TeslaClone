import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';

const CarItem = () => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require(`../../../assets/images/ModelS.jpeg`)}
				style={styles.image}
			/>
			<View style={styles.titles}>
				<Text style={styles.heading}>Model S</Text>
				<Text style={styles.subheading}>Starting at $69.420</Text>
			</View>
		</View>
	);
};

export default CarItem;
