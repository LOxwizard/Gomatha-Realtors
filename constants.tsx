import { Venture, VentureStatus } from './types';

export const VENTURES: Venture[] = [
  {
    id: 'bitra-colony',
    name: 'Bitra Colony',
    location: 'Venkannapalem @ Chodavaram Mandalam, Visakhapatnam',
    description: 'Fully developed site with hill view living and proximity to Universities. Featuring 40 & 33 feet BT roads and 360° hill views.',
    status: VentureStatus.RUNNING,
    features: [
      '4 Grand Entrance Gates',
      '40 & 33 Feet BT Roads',
      'Avenue Plantation',
      'Open Park Landscape',
      'Gated Community',
      'Beside Sai Baba Temple',
      '360° Hill View Site',
      '100% Clear Title & Vasthu',
      'Drainage Facility'
    ],
    imageUrl: '/Bitra-Colony.jpg', 
    price: 'Contact for Price'
  },
  {
    id: 'siri-chandana',
    name: 'Siri Chandana Gardens',
    location: 'Singamdorapalem (V), K.Kotapadu (M), Visakhapatnam',
    description: 'Premium Residential Plots with high-value plantations featuring White Sandal and Mahogani. Just 2km from K Kotapadu.',
    status: VentureStatus.RUNNING,
    features: [
      'White Sandal & Mahogani Plantation',
      'Coconut & Fruit Plants',
      'Entire Layout Fencing',
      '100% Vasthu',
      'Land Conversion Done',
      '24/7 Security',
      'Spot Registration',
      'Resorts & Guest Houses'
    ],
    // Updated: Pointing to local public folder file
    imageUrl: '/Siri-Chandana-Gardens.jpg',
    price: '5,999/-',
    sqyds: 'Per Sq. Yd'
  },
  {
    id: 'Kubera Phase-1',
    name: 'Kubera Phase-1',
    location: 'Chintalapalem, Pendurthi, Visakhapatnam',
    description: 'New 2026 launch. Premium independent house plots just 4km from Pendurthi Junction and near 150ft main road.',
    status: VentureStatus.RUNNING,
    features: [
      '4km from Pendurthi Junction',
      '1.5km to Govt 150ft Main Road',
      'Independent Houses in 500m',
      'Black Top Roads',
      'Modern Drainage System',
      'Electricity & Street Lights',
      'Compound Wall',
      '24/7 Gated Security'
    ],
    imageUrl: '/pendurthi.mp4',
    price: '11,999/-',
    sqyds: 'Per Sq. Yd'
  },
  {
    id: 'siri-lake-view-gardens',
    name: 'Siri Lake View Gardens',
    location: 'Devarapalli, Visakhapatnam',
    description: 'Premium residential project with stunning lake views and modern amenities.',
    status: VentureStatus.RUNNING,
    features: [
      'Lake View Properties',
      'Modern Amenities',
      'Gated Community',
      '24/7 Security'
    ],
    imageUrl: '/siri-lake-view.jpg',
    price: 'Contact for Price'
  };

{
  id: 'akshaya-nidhi',
  name: 'Akshaya Nidhi',
  location: 'Kothavalasa, Visakhapatnam',
  description: 'Premium residential open plots in Kothavalasa with excellent connectivity and essential infrastructure.',
  status: VentureStatus.RUNNING,
  features: [
    'Well Developed Roads',
    'Electricity Facility',
    'Drainage Facility',
    'Avenue Plantation',
    'Clear Title',
    '100% Vasthu',
  ],
  imageUrl: '/Akshaya-Nidhi.jpg',
  price: '₹8,500 per Sq. Yd',
};


export const COMPANY_DETAILS = {
  name: 'Gomatha Realtors',
  established: 2017,
  email: 'gomatharealtors@gmail.com',
  altEmail: 'bvb.9743@gmail.com',
  addresses: [
    'D.No. 58-1-226, Flat No. 202, Satyamamba Residency, Old Karasa, NAD, Visakhapatnam - 530009',
    'D.No. 50-94-30/1, 2nd Floor, Opp. Vijaya Medical Centre, Seethammapeta Road, Visakhapatnam - 530016'
  ]
};
