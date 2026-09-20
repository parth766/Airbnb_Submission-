import {
  img_hero_1_jpg,
  img_hero_2_jpg,
  img_hero_3_jpg,
  img_hero_4_jpg,
  img_hero_5_jpg,
  img_room_bedroom_jpg,
  img_room_living_jpg,
  img_nearby_1_jpg,
  img_nearby_2_jpg,
  img_nearby_3_jpg,
  img_nearby_4_jpg,
  img_nearby_5_jpg
} from './images';

export interface CoHost {
  id: string;
  name: string;
  avatar?: string;
  initials?: string;
  color?: string;
}

export interface GalleryPhoto {
  id: number;
  url: string;
  caption: string;
  category: string;
  subtext?: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  amenities: string[];
  photos: GalleryPhoto[];
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface NearbyStay {
  id: string;
  title: string;
  price: string;
  rating: number;
  image: string;
}

export interface ListingData {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  rating: number;
  reviewsCount: number;
  isSuperhost: boolean;
  host: {
    name: string;
    avatar: string;
    joinedDate: string;
    isSuperhost: boolean;
    responseRate: string;
    responseTime: string;
    bio: string;
    totalReviews: number;
    overallRating: number;
    yearsHosting: number;
    bornIn: string;
    school: string;
  };
  coHosts: CoHost[];
  details: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  offerDiscountText: string;
  pricePerNight: number;
  totalPriceFor5Nights: number;
  cleaningFee: number;
  serviceFee: number;
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
  description: string[];
  amenities: {
    category: string;
    items: { iconName: string; name: string; description?: string; available?: boolean }[];
  }[];
  categories: RoomCategory[];
  photos: GalleryPhoto[];
  reviews: Review[];
  nearbyStays: NearbyStay[];
}

export const LISTING_DATA: ListingData = {
  id: "mirashya-ug10-candolim",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  subtitle: "Entire serviced apartment in Candolim, India",
  location: "Candolim, Goa, India",
  rating: 4.95,
  reviewsCount: 19,
  isSuperhost: true,
  host: {
    name: "Mirashya Homes",
    avatar: img_hero_1_jpg,
    joinedDate: "2 years hosting",
    isSuperhost: true,
    responseRate: "100%",
    responseTime: "within an hour",
    bio: "Welcome to Mirashya Homes! We curate premium boutique living spaces in North Goa designed for maximum comfort, luxury relaxation, and romantic getaways.",
    totalReviews: 1463,
    overallRating: 4.68,
    yearsHosting: 2,
    bornIn: "Born in the 80s",
    school: "Where I went to school: NICMAR GOA"
  },
  coHosts: [
    { id: "ch1", name: "Sharath", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
    { id: "ch2", name: "Aman Dev Pahwa", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
    { id: "ch3", name: "Maria Karen Priyanka", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
    { id: "ch4", name: "Simran", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" },
    { id: "ch5", name: "Pallavi", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" },
    { id: "ch6", name: "Sanyukta", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80" },
    { id: "ch7", name: "Shruti", initials: "S", color: "bg-pink-100 text-pink-700" },
    { id: "ch8", name: "Amisha", initials: "A", color: "bg-blue-100 text-blue-700" }
  ],
  details: {
    guests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1
  },
  offerDiscountText: "Get 10% off your next stay. Terms apply",
  pricePerNight: 5700,
  totalPriceFor5Nights: 28499,
  cleaningFee: 0,
  serviceFee: 0,
  highlights: [
    {
      icon: "Tv",
      title: "Outdoor entertainment",
      description: "The pool and alfresco dining are great for summer trips."
    },
    {
      icon: "Wind",
      title: "Designed for staying cool",
      description: "Beat the heat with the A/C and ceiling fan."
    },
    {
      icon: "DoorOpen",
      title: "Self check-in",
      description: "You can check in with the building staff."
    }
  ],
  description: [
    "Welcome to Mirashya UG10 - A newly designed, luxurious 1BHK serviced apartment located right in the heart of Candolim, North Goa.",
    "Designed for couples, honeymooners, and discerning travelers looking for a serene aesthetic escape. Featuring a private jacuzzi hydro-therapy tub, warm mood lighting, rattan lounge furniture, high-speed Wi-Fi (300 Mbps), and a fully equipped modular kitchen.",
    "Step out onto your private balcony overlooking lush greenery, or enjoy the estate's swimming pool, fully equipped gymnasium, and 24/7 security. Just a short stroll away from Goa's finest beach shacks, dining spots, and nightlife."
  ],
  amenities: [
    {
      category: "Basic & Highlights",
      items: [
        { iconName: "Utensils", name: "Kitchen" },
        { iconName: "Wifi", name: "Wifi" },
        { iconName: "Laptop", name: "Dedicated workspace" },
        { iconName: "Car", name: "Free parking on premises" },
        { iconName: "Waves", name: "Pool" },
        { iconName: "HotTub", name: "Hot tub" },
        { iconName: "PawPrint", name: "Pets allowed" },
        { iconName: "Video", name: "Exterior security cameras on property" },
        { iconName: "ShieldAlert", name: "Carbon monoxide alarm", available: false },
        { iconName: "ShieldAlert", name: "Smoke alarm", available: false }
      ]
    }
  ],
  photos: [
    {
      id: 1,
      url: img_hero_1_jpg,
      caption: "Spacious aesthetic living room with ambient sconces and rattan lounge chairs",
      category: "Living room 1",
      subtext: "Sofa · Air conditioning · Ceiling fan · Smart TV"
    },
    {
      id: 2,
      url: img_hero_2_jpg,
      caption: "Outdoor balcony lounge seating area with warm accent lights",
      category: "Living room 2",
      subtext: "Private balcony · Rattan coffee table · Garden views"
    },
    {
      id: 3,
      url: img_hero_3_jpg,
      caption: "Private romantic Jacuzzi tub with therapeutic jets and mood lighting",
      category: "Full bathroom",
      subtext: "Hydro jets · Ambient LED lighting · Hot water shower"
    },
    {
      id: 4,
      url: img_hero_4_jpg,
      caption: "Cozy master bedroom with king mattress, ambient wall sconces, and soft lighting",
      category: "Bedroom",
      subtext: "King Bed · Premium linens · Split AC"
    },
    {
      id: 5,
      url: img_hero_5_jpg,
      caption: "Modern apartment complex exterior with Mediterranean terracotta roof accents",
      category: "Exterior",
      subtext: "Boutique apartment building · 24/7 security"
    }
  ],
  categories: [
    {
      id: "bedroom",
      name: "Bedroom",
      amenities: ["1 double bed"],
      photos: [
        {
          id: 101,
          url: img_room_bedroom_jpg,
          caption: "Bedroom with double bed",
          category: "Bedroom"
        }
      ]
    },
    {
      id: "living-room",
      name: "Living room",
      amenities: ["1 sofa"],
      photos: [
        {
          id: 102,
          url: img_room_living_jpg,
          caption: "Living room with sofa",
          category: "Living room"
        }
      ]
    }
  ],
  reviews: [
    {
      id: "r1",
      author: "Aarav Sharma",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "August 2026",
      comment: "Mirashya UG10 exceeded all expectations! The private jacuzzi was super relaxing after a day at Candolim beach. Squeaky clean and beautiful!"
    },
    {
      id: "r2",
      author: "Priya Nair",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "July 2026",
      comment: "Unbelievable stay. The host was incredibly responsive, check-in was seamless, and the location is ideal. 5 minutes walk to great cafes."
    }
  ],
  nearbyStays: [
    {
      id: "ns1",
      title: "Beautiful Studio with a view to die for",
      price: "₹23,600",
      rating: 4.91,
      image: img_nearby_1_jpg
    },
    {
      id: "ns2",
      title: "NAQAB - 1bhk with private pool",
      price: "₹42,218",
      rating: 4.95,
      image: img_nearby_2_jpg
    },
    {
      id: "ns3",
      title: "Greentique Luxury Flat with plunge pool, Calangute",
      price: "₹44,506",
      rating: 4.94,
      image: img_nearby_3_jpg
    },
    {
      id: "ns4",
      title: "The Tropical Studio | 5 mins to Beach",
      price: "₹22,824",
      rating: 4.96,
      image: img_nearby_4_jpg
    },
    {
      id: "ns5",
      title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
      price: "₹39,942",
      rating: 4.95,
      image: img_nearby_5_jpg
    }
  ]
};



