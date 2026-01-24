import React from 'react';
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';
import Hero from './components/Hero/Hero';

const nav_link = [
  'Amazon haul', 'medical care', 'amazon basics', 'best sellers', 'books', 'registry', 'gift cards',
  'smart home', 'new release', 'today deals', 'prome', 'groceries', 'customer service', 'pharmacy', 'music'
];

const data = [
  {
    title: 'Curated vacation looks',
    card: [
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'Swim'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'beauty'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'accessories'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'apparel'
      }
    ]
  },
  {
    title: 'Save on Amazon Devices',
    card: [
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'Limited time deal'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'Limited time deal'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'Limited time deal'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'Limited time deal'
      }
    ]
  },
  {
    title: 'Shop Saks on Amazon',
    card: [
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'Coats & jackets'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'beauty'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
        subtitle: 'shoes'
      },
      {
        url: 'https://castore.uz/upload/iblock/75b/57qax8fpt9bitb7jbfftqs9n20j07n34/planshet-apple-ipad-air-wi-fi-cellular-256gb-space-grey.jpg',
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
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
      { url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hds/hds94959/y/24.jpg' },
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
    </div>
  );
}

export default App;