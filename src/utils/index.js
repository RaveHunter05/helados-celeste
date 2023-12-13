const utils = {}

utils['listOfCategories'] = [
	{
		value: 'conos',
		photo: 'https://services-project.s3.us-east-2.amazonaws.com/helados/WhatsApp+Image+2023-12-10+at+8.34.04+PM.jpeg',
		subcategories: [
			{value: 'cono_regular', text: 'cono regular', price: 30},
			{value: 'cono_jumbo', text: 'cono jumbo', price: 45},
			{value: 'cono_combinado', text: 'cono combinado', price: 35},
		],
	},
	{
		value: 'sundae',
		photo: 'https://services-project.s3.us-east-2.amazonaws.com/helados/WhatsApp+Image+2023-12-10+at+5.35.51+PM.jpeg',
		subcategories: [
			{value: 'sirope_chocolate', text: 'sundae con sirope de chocolate', price: 60},
			{value: 'sirope_fresa', text: 'sundae con sirope de fresa', price: 60},
			{value: 'sirope_caramelo', text: 'sundae con sirope de caramelo', price: 60},
		],
	},
	{
		value: 'mega sundae',
		photo: 'https://services-project.s3.us-east-2.amazonaws.com/helados/WhatsApp+Image+2023-12-10+at+5.35.49+PM.jpeg',
		subcategories: [
			{value: 'oreo', text: 'oreo', price: 80},
			{value: 'granola', text: 'granola', price: 80},
			{value: 'chips ahoy', text: 'chips ahoy', price: 80},
			{value: 'M&Ms', text: 'M&Ms', price: 80},
			{value: 'Mani', text: 'Mani', price: 80},
		]
	},
	{
		value: 'sabores',
		photo: 'https://services-project.s3.us-east-2.amazonaws.com/helados/WhatsApp+Image+2023-12-10+at+8.35.55+PM.jpeg',
		subcategories: [
			{value: 'fresa', text: 'fresa', price: 100},
			{value: 'mora', text: 'mora', price: 110},
			{value: 'kiwi', text: 'kiwi', price: 100},
			{value: 'piña', text: 'piña', price: 80},
			{value: 'durazno', text: 'durazno', price: 110},
			{value: 'banano', text: 'banano', price: 80},
			{value: 'coco', text: 'coco', price: 80},
			{value: 'oreo', text: 'oreo', price: 80},
			{value: 'chips_ahoy', text: 'chis ahoy', price: 80},
			{value: 'bon_o_bon', text: 'bon o bon', price: 80},
			{value: 'chocolate', text: 'chocolate', price: 90},
			{value: 'ferrero', text: 'ferrero', price: 90},
			{value: 'nutella', text: 'nutella', price: 80},
		]
	},
	{
		value: 'topping',
		photo: 'https://services-project.s3.us-east-2.amazonaws.com/helados/topping.jpg',
		subcategories: [
			{value: 'gomitas_acidas', text: 'gomitas acidas'},
			{value: 'chispas_de_colores', text: 'chispas de colores'},
			{value: 'chispas_de_chocolate', text: 'chispas de chocolate'},
			{value: 'oreo', text: 'oreo'},
			{value: 'm&ms', text: 'm&ms'},
			{value: 'mani', text: 'mani'},
			{value: 'granola', text: 'granola'},
		]

	},
	{
		value: 'siropes',
		photo: 'https://services-project.s3.us-east-2.amazonaws.com/helados/WhatsApp+Image+2023-12-10+at+8.35.59+PM.jpeg',
		subcategories: [
			{value: 'fresa', text: 'fresa'},
			{value: 'caramelo', text: 'caramelo'},
			{value: 'chocolate', text: 'chocolate'},
			{value: 'leche_condensada', text: 'leche condensada'},
			{value: 'dulce_de_leche', text: 'dulce de leche'}
		]
	}
]

export default utils
