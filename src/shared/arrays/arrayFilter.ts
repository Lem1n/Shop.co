

export const useArrays =()=> {
    const categories = [
		{
			id: "1",
			name: "T-shirt",
		},
		{
			id: "2",
			name: "Undershirts",
		},
		{
			id: "3",
			name: "Shirts",
		},
		{
			id: "4",
			name: "Hoodie",
		},
		{
			id: "5",
			name: "Blazer",
		},
		{
			id: "6",
			name: "Vest",
		},
		{
			id: "7",
			name: "Trousers",
		},
		{
			id: "8",
			name: "Shorts",
		},
		{
			id: "9",
			name: "Jeans",
		},
		{
			id: "10",
			name: "Tie",
		},
	];
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
    return {styles, colors, sizes, categories}
}