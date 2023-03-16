import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
	const { name, tagLine, tagLineCTA, image } = props.car;

	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={image}
				style={styles.image}
			/>
			<View style={styles.titles}>
				<Text style={styles.heading}>{name}</Text>
				<Text style={styles.subheading}>
					{tagLine}&nbsp;<Text style={styles.subheadingCTA}>{tagLineCTA}</Text>
				</Text>
			</View>

			<View style={styles.buttonContainer}>
				<StyledButton
					type='primary'
					title='Custom Order'
					onPress={() => {
						console.log('Primary Button');
					}}
				/>
				<StyledButton
					type='secondary'
					title='Existing Inventory'
					onPress={() => {
						console.log('Seconday Button');
					}}
				/>
			</View>
		</View>
	);
};

export default CarItem;
