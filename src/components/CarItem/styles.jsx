import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	carContainer: {
		width: '100%',
		height: Dimensions.get('window').height,
	},

	titles: {
		marginTop: '30%',
		width: '100%',
		alignItems: 'center',
	},

	heading: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#000',
	},

	subheading: {
		fontSize: 16,
		color: '#5c5e62',
	},

	subheadingCTA: {
		textDecorationLine: 'underline',
	},

	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		position: 'absolute',
	},

	buttonContainer: {
		position: 'absolute',
		bottom: 50,
		width: '100%',
	},
});

export default styles;
