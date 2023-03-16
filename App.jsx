import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './src/components/CarsList';

const App = () => {
	return (
		<View style={styles.container}>
			<CarsList />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
