export interface BannerData {
    _rev: string,
    image: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        }
    };
    _ref: string;
    subtitle: string;
    _type: string;
    _createdAt: string;
    description: string;
    _id: string;
    title: string;
    _updatedAt: string;
    price: number;
}
type ImageAsset = {
    _type: "image";
    asset: {
        _ref: string;
        _type: string;
    }
}

type Slug = {
    current: string,
    _type: "slug";
}

type Category = {
    _id: string,
    name: string
}

export interface ProductData {
    title: string;
    image: ImageAsset;
    quantity: number;
    price: number;
    category: Category[],
    slug: Slug;
    _createdAt: string;
    description: string;
    _updatedAt: string;
    ratings: number;
    brand: string;
    _type: "product",
    _id: string;
    position: string;
    rowprice: number

}
export interface UserInformation {
    id: string,
    name: string,
    email: string
}
export interface storeState {
    shoppers: {
        cart: ProductData[],
        wishList: ProductData[],
        userInformation: UserInformation | null,
    }

}