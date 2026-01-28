import React from 'react';
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';
import Hero from './components/Hero/Hero';
import Carts from './components/carts/Carts';
import Card from './components/card/card';
const nav_link = [
  'Amazon haul', 'medical care', 'amazon basics', 'best sellers', 'books', 'registry', 'gift cards',
  'smart home', 'new release', 'today deals', 'prome', 'groceries', 'customer service', 'pharmacy', 'music'
];

const data = [
  {
    title: 'Curated vacation looks',
    card: [
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg',
        subtitle: 'Swim'
      },
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_2x._SY232_CB563137408_.jpg',
        subtitle: 'beauty'
      },
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_2x._SY232_CB563137408_.jpg',
        subtitle: 'accessories'
      },
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_2x._SY232_CB563137408_.jpg',
        subtitle: 'appare'
      }
    ]
  },


  
  {
    title: 'Save on Amazon Devices',
    card: [
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x2._SY232_CB595261253_.jpg',
        subtitle: 'Limited time deal'
      },
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x2._SY232_CB595261253_.jpg',
        subtitle: 'Limited time deal'
      },
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x2._SY232_CB595261253_.jpg',
        subtitle: 'Limited time deal'
      },
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x2._SY232_CB595261253_.jpg',
        subtitle: 'Limited time deal'
      }
    ]
  },
  {
    title: 'Shop Saks on Amazon',
    card: [
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x2._SY232_CB595261253_.jpg',
        subtitle: 'Coats & jackets'
      },
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_2x._SY232_CB623353881_.jpg',
        subtitle: 'beauty'
      },
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_2x._SY232_CB624172947_.jpg',
        subtitle: 'shoes'
      },
      {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x2._SY232_CB595261253_.jp',
        subtitle: 'handbags'
      }
    ]
  },
  {
    title: 'Up to 50% off luxury styles',
    card: [
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'accessories'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'bags'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'clothing'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'jewelry'
      }
    ]
  }
];

const BestData = [
  {
    title: 'Best Sellers in Beauty & Personal Care', 
    images: [
      { url: 'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_2x._SY232_CB555960040_.jpg' },
      { url: 'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_2x._SY232_CB555960040_.jpg' },
      { url: 'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_2x._SY232_CB555960040_.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' }
    ]
  },
  {
    title: 'Best Sellers in Grocery & Gourmet Food', 
    images: [
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' }
    ]
  }
]; 

function App() {
  return (
    <div>
      <Header data={data} link={nav_link} />
      <Banner data={data}/>
      <Hero bestData={BestData}/>
      <Carts data={data}/>
      <Card data ={data}/>
    </div>
  );
}

export default App;