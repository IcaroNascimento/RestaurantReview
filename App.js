import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import HeaderStyle from './HeaderStyle';

const restaurants = [
	{ name: 'React Cafe', adress: '123 Anywhere St' },
	{ name: 'Fancy Restaurant', adress: '799 Main St' },
	{ name: 'Taco Place', adress: '555 Mapple Rd' }
];

export default class App extends Component<Props> {
	render() {
		return (
			<View
				style={{
					flex: 1
				}}
			>
				<Text style={HeaderStyle.header}>Restaurant Review</Text>

				{restaurants.map((place, index) => {
					return (
						<View key={place.name} style={[
            style.row,
            { backgroundColor: index %2 === 0 ? 'white' : '#F3F3F7'}
            ]}>
							<View style={style.edges}>
								<Text>{index + 1}</Text>
							</View>
							<View style={style.nameAdress}>
								<Text>{place.name}</Text>
								<Text style={style.adressText}>{place.adress}</Text>
							</View>

							<View style={style.edges}>
								<Text>Info</Text>
							</View>
						</View>
					);
				})}
			</View>
		);
	}
}

const style = StyleSheet.create({
	row: {
		flexDirection: 'row'
	},
	edges: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
    padding: 5
	},
	nameAdress: {
		flexDirection: 'column',
		flex: 8
	},
	adressText: {
		color: 'grey'
	}
});
