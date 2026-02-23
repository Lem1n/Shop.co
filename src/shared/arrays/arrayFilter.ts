

export const useArrays =()=> {

	const styles = [
		{
			id: "1",
			name: "Casual",
		},
		{
			id: "2",
			name: "Formal",
		},
		{
			id: "3",
			name: "Party",
		},
		{
			id: "4",
			name: "Gym",
		},
	];
	const colors = [
		"Green", "Red", "Blue", "Black", "White", "Gold", "Silver", "Purple", "Pink",
	];
	const sizes = [
		"XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large",
	];
    return {styles, colors, sizes}
}