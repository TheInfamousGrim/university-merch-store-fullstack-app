const { Product } = require('../models');

const productData = [
    {
        product_name: 'Exeter American Style Hoodie',
        price: 22.95,
        stock: 25,
        category_id: 1,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873634/University-Merchandise-Assets/Hoodies/Exeter_American_Style_Hoody_l6ld03.jpg',
    },
    {
        product_name: 'Exeter Premium Style Hoodie',
        price: 26.99,
        stock: 50,
        category_id: 1,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873634/University-Merchandise-Assets/Hoodies/Exeter_Premium_Style_Hoody_pkgsg7.jpg',
    },
    {
        product_name: 'Exeter Simple Style Hoodie',
        price: 32.0,
        stock: 35,
        category_id: 1,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873634/University-Merchandise-Assets/Hoodies/Exeter_Simple_Style_Hoody_rbwujo.jpg',
    },
    {
        product_name: 'Exeter Player Layer Mens Baselayer Crew Neck Top Green',
        price: 29.5,
        stock: 46,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873635/University-Merchandise-Assets/Player%20Layer/Player_Layer_Mens_Baselayer_Crew_Neck_Top_Green_mzkkm9.jpg',
    },
    {
        product_name: 'Exeter Player Layer Mens Baselayer Leggings Black',
        price: 45.0,
        stock: 29,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873637/University-Merchandise-Assets/Player%20Layer/Player_Layer_Mens_Baselayer_Leggings_Black_sxhdp2.jpg',
    },
    {
        product_name: 'Exeter Player Layer Mens Blitz Field Shorts With Pockets',
        price: 26.0,
        stock: 15,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873636/University-Merchandise-Assets/Player%20Layer/Player_Layer_Mens_Blitz_Field_Shorts_Black_b0pnzy.jpg',
    },
    {
        product_name: 'Exeter Player Layer Mens Quarter Zip Midlayer Top Black',
        price: 42.5,
        stock: 37,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873637/University-Merchandise-Assets/Player%20Layer/Player_Layer_Mens_Quater_Zip_Midlayer_Black_t9gnby.jpg',
    },
    {
        product_name: 'Exeter Player Layer Mens Victory Layer Tee Black',
        price: 21.5,
        stock: 29,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873643/University-Merchandise-Assets/Player%20Layer/Player_Layer_Mens_Victory_Layer_Tee_Black_purtwn.jpg',
    },
    {
        product_name: 'Exeter Player Layer Mens Victory Layer Tee Green',
        price: 21.5,
        stock: 18,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873637/University-Merchandise-Assets/Player%20Layer/Player_Layer_Mens_Victory_Layer_Tee_Green_ixsevc.jpg',
    },
    {
        product_name: 'Exeter Player Layer Mens Weather Layer Jacket Green',
        price: 49.0,
        stock: 41,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873638/University-Merchandise-Assets/Player%20Layer/Player_Layer_Mens_Weather_Layer_Jacket_Green_kjl7rt.jpg',
    },
    {
        product_name: 'Exeter Player Layer Womens Baselayer Crew Neck Top Green',
        price: 29.5,
        stock: 52,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873639/University-Merchandise-Assets/Player%20Layer/Player_Layer_Womens_Base_Layer_Crew_Neck_Top_Green_u75vwh.jpg',
    },
    {
        product_name: 'Exeter Player Layer Womens Blitz Field Shorts With Pockets Black',
        price: 26.0,
        stock: 34,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873644/University-Merchandise-Assets/Player%20Layer/Player_Layer_Womens_Blitz_Field_Shorts_Black_adjzjk.jpg',
    },
    {
        product_name: 'Exeter Player Layer Womens Ecolayer Leggings Black',
        price: 45.0,
        stock: 27,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873642/University-Merchandise-Assets/Player%20Layer/Player_Layer_Womens_Eco_Layer_Leggins_Black_zwcszl.jpg',
    },
    {
        product_name: 'Exeter Player Layer Womens Quarter Zip Midlayer Top Black',
        price: 42.5,
        stock: 38,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873640/University-Merchandise-Assets/Player%20Layer/Player_Layer_Womens_Quater_Zip_Midlayer_Black_uudsbj.jpg',
    },
    {
        product_name: 'Exeter Player Layer Womens Victory Layer Tee Black',
        price: 21.5,
        stock: 29,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873646/University-Merchandise-Assets/Player%20Layer/Player_Layer_Womens_Victory_Layer_Tee_Black_trkvrr.jpg',
    },
    {
        product_name: 'Exeter Player Layer Womens Victory Layer Tee Green',
        price: 21.5,
        stock: 29,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873642/University-Merchandise-Assets/Player%20Layer/Player_Layer_Womens_Victory_Layer_Tee_Green_cy64pm.jpg',
    },
    {
        product_name: 'Exeter Player Layer Womens Weather Layer Jacket Green',
        price: 49.0,
        stock: 37,
        category_id: 2,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873643/University-Merchandise-Assets/Player%20Layer/Player_Layer_Womens_Weather_Layer_Jacket_Green_temwdw.jpg',
    },
    {
        product_name: 'Exeter Gym T-Shirt Unisex',
        price: 15.99,
        stock: 68,
        category_id: 3,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873642/University-Merchandise-Assets/For%20The%20Gym/Exeter_Gym_T-Shirt_Unisex_ndbpbd.jpg',
    },
    {
        product_name: 'Exeter Gym Shorts Navy',
        price: 19.99,
        stock: 47,
        category_id: 3,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873643/University-Merchandise-Assets/For%20The%20Gym/Exeter_Mens_Gym_Shorts_aqnrxo.jpg',
    },
    {
        product_name: 'Exeter Ladies Gym Vest',
        price: 12.99,
        stock: 33,
        category_id: 3,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873642/University-Merchandise-Assets/For%20The%20Gym/Exeter_Ladies_Gym_Vest_p4ajbo.jpg',
    },
    {
        product_name: 'Exeter Canvas Crested Bag',
        price: 4.0,
        stock: 87,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873643/University-Merchandise-Assets/Gifts/Exeter_Canvas_Crested_Bag_fywoyu.jpg',
    },
    {
        product_name: 'Exeter Car Sticker Large',
        price: 1.75,
        stock: 250,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873643/University-Merchandise-Assets/Gifts/Exeter_Car_Sticker_Large_ctmfeo.jpg',
    },
    {
        product_name: 'Exeter Car Sticker Small',
        price: 0.7,
        stock: 175,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873644/University-Merchandise-Assets/Gifts/Exeter_Car_Sticker_Small_zira3h.jpg',
    },
    {
        product_name: 'Exeter Certificate Tube',
        price: 11.99,
        stock: 236,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873644/University-Merchandise-Assets/Gifts/Exeter_Certificate_Tube_Green_qssyoa.jpg',
    },
    {
        product_name: 'Exeter Clear Water Bottle',
        price: 14.99,
        stock: 136,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873649/University-Merchandise-Assets/Gifts/Exeter_Clear_Water_Bottle_dpzofi.jpg',
    },
    {
        product_name: 'Exeter Crested Pencil Sharpener',
        price: 0.95,
        stock: 78,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873648/University-Merchandise-Assets/Gifts/Exeter_Crested_Pencil_Sharpener_xoymke.jpg',
    },
    {
        product_name: 'Exeter Embroided Badge',
        price: 2.99,
        stock: 147,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873644/University-Merchandise-Assets/Gifts/Exeter_Embroidered_Badge_juc3qz.jpg',
    },
    {
        product_name: 'Exeter Enamel Mug',
        price: 7.99,
        stock: 102,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873647/University-Merchandise-Assets/Gifts/Exeter_Enamel_Mug_zcv0zi.jpg',
    },
    {
        product_name: 'Exeter Gregory Bear',
        price: 19.99,
        stock: 356,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665928708/University-Merchandise-Assets/Gifts/Exeter_Gregory_Bear_eukazz.jpg',
    },
    {
        product_name: 'Exeter Magnet',
        price: 2.99,
        stock: 183,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873645/University-Merchandise-Assets/Gifts/Exeter_Magnet_furqzn.jpg',
    },
    {
        product_name: 'Exeter Pennant',
        price: 19.99,
        stock: 162,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873645/University-Merchandise-Assets/Gifts/Exeter_Pennant_utvbp6.jpg',
    },
    {
        product_name: 'Exeter Stainless Steel Water Bottle',
        price: 17.99,
        stock: 121,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873648/University-Merchandise-Assets/Gifts/Exeter_Stainless_Steel_Water_Bottle_gmugei.jpg',
    },
    {
        product_name: 'Exeter Travel Mug Green',
        price: 8.5,
        stock: 208,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873646/University-Merchandise-Assets/Gifts/Exeter_Travel_Mug_Green_bilcw8.jpg',
    },
    {
        product_name: 'Exeter Umbrella Pro-Matic',
        price: 26.99,
        stock: 98,
        category_id: 4,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665873650/University-Merchandise-Assets/Gifts/Exeter_Umbrella_Pro-Matic_dut8gb.jpg',
    },
    {
        product_name: 'Exeter Bobble Hat',
        price: 12.0,
        stock: 87,
        category_id: 5,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665930706/University-Merchandise-Assets/Headwear/Exeter_Bobble_Hat_shgyln.jpg',
    },
    {
        product_name: 'Exeter Knitted Scarf',
        price: 19.99,
        stock: 94,
        category_id: 5,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665930706/University-Merchandise-Assets/Headwear/Exeter_Knitted_Scarf_nl296y.jpg',
    },
    {
        product_name: 'Exeter Snap-Back Cap',
        price: 10.0,
        stock: 58,
        category_id: 5,
        img_url:
            'https://res.cloudinary.com/dc2cdyype/image/upload/v1665930706/University-Merchandise-Assets/Headwear/Exeter_Snap-Back_Cap_uk5huu.jpg',
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
