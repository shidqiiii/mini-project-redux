const initState = [{
    image: "https://els.id/media/catalog/product/cache/31f3c0b07cbf4027df3ecbd24b5c34ea/h/p/hp_245_g7.jpg",
    price: 5999000,
    name: "HP 245-G8 - Black [Ryzen 3 5300U-4GB-SSD 256GB]"
}, {
    image: "https://els.id/media/catalog/product/cache/31f3c0b07cbf4027df3ecbd24b5c34ea/m/o/modern_14-b10mw_grey_5__3.jpg",
    price: 10499000,
    name: "MSI Modern 14-B5M-068ID - Carbon Grey [Ryzen 7 5700U-8GB-SSD 512GB] Slim Design"
}, {
    image: "https://els.id/media/catalog/product/cache/31f3c0b07cbf4027df3ecbd24b5c34ea/a/s/asus_creator_k3500_2.jpg",
    price: 17659000,
    name: "Asus Creator M3500QC-OLED955 - Cool Silver [Ryzen 9 5900H-16GB-SSD 512GB-RTX3050]"
}, {
    image: "https://els.id/media/catalog/product/cache/31f3c0b07cbf4027df3ecbd24b5c34ea/a/l/all_in_one_acer_c22-1650_usb_2.jpg",
    price: 7529000,
    name: "PC All In One Acer C22-1650 (i3) (LED 22' FHD) HDD"
}]

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
