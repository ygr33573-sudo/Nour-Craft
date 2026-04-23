export interface Product {
  id: number;
  name: string;
  price: number;
  artisan: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  badge?: string;
  dimensions?: string;
  material?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Beni Ourain Wool Rug",
    price: 840,
    artisan: "Fatima Zohra • Atlas Mountains",
    category: "Woven Rugs",
    badge: "Hand-woven",
    description: "Authentic sheep's wool rug with traditional Berber geometric symbols.",
    longDescription: "Woven in the heart of the Middle Atlas Mountains, this Beni Ourain rug is a masterpiece of nomadic art. Each knot is tied by hand using undyed natural wool, featuring spontaneous geometric charcoal lines that tell the weaver's story. It's soft, durable, and naturally stain-resistant.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDZDftsPAOqIJrvb5UKKGAZZYUyuN0w4vnTxVC1KHh-_HbqZyZKbcsmjQFVv8iO7GlUBzY41S7obCxZYcG0wxKIdrzN3cT-gA4IHtBq_UnZxfUaTHUKabqNQNkS79xjZjvlr-WDkBxwahXWC1VRrhSETYXONDqqaaGIW3ze0dzjcqs1Fl1RtidGw6_wGeQqa4_KqkEoJGQliRWgTkA4oB3uD66i0RV4ZNymKBTui01zIH2SSNmwqLc2tmUfwmPNMMShpLxV2DHNXE",
    dimensions: "150cm x 240cm",
    material: "100% Organic Atlas Wool"
  },
  {
    id: 2,
    name: "Heritage Leather Tote",
    price: 220,
    artisan: "Ahmed Benani • Fez Medina",
    category: "Leather Bags",
    badge: "Vegetable Tanned",
    description: "Supple, hand-stitched leather tote with brass hardware.",
    longDescription: "Crafted in the legendary tanneries of Fez, this tote uses vegetable-tanned cowhide that will develop a unique patina over time. Hand-finished with saddle stitching, it's designed to be a lifelong companion.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPJrTi-tHRgerJ8MjgW1XL1czHmdDhy7ZstYZdejqtjjyN5haI3Of9L8pf-2BrtB_sSwVGE8ve64mH_3hTmCY4eGz4LH-cUWEp1maAdW6bkWNn-r1rG1E1ilJ4HVxldS5beiilKPlzzwAcCUniq6nt9nIzuLU1vRWs1fi0ftq6OnAWiR6d04T5F8WrVXe15uIG3W56A3gRky8yM3HZ7NzuKtCTCdM3YA9nNtquQmrD_5-aekN7m8XKpQ5JFHy2MsaMTq8tk3GoHto",
    dimensions: "35cm x 40cm x 12cm",
    material: "Full-grain Vegetable-tanned Leather"
  },
  {
    id: 3,
    name: "Noor Brass Pendant",
    price: 315,
    artisan: "Youssef El-Fassi • Marrakesh",
    category: "Brass Lamps",
    badge: "Hand-pierced",
    description: "Intricately hand-pierced brass lamp that projects celestial patterns.",
    longDescription: "A labor of patience, this lamp is created using nothing but a hammer and a tiny chisel. When lit, it transforms your room with mesmerizing shadows of geometry and light, characteristic of traditional Moroccan Riads.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCYucgdNipzLHqzLKyZzytqTX8xB51uQcG7zLWRke_lpCseNTxETBhvMsQOPh2lNU1E7wphwHwvCLfu3LwZp-RIgkGNYF1whuMgqpzuWZG6m6Drh_KhitL8lqdi_kYI32oMm-Z0ONOsc2Rv-c9E3Mh_2wOtAdIowznHEGEcNyBN9K-sk3R-SmTlL4zo3_KflVNp3x28Jwle0F03QzjiXPowNZJ94K3wCKspvEF_8AChpNjjweHdQatUopaNvpkGZGWjlmCo5hWayU",
    dimensions: "45cm Diameter",
    material: "Solid Antiqued Brass"
  }
];
