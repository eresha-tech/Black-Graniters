// Product data with image paths for AWS CDN

export interface Product {
  id: string;
  name: string;
  category: 'granite' | 'marble' | 'sandstone' | 'onyx' | 'quartzite';
  subcategory?: string;
  description: string;
  features: string[];
  applications: string[];
  origin?: string;
  gradient: string;
  images?: string[];
  link: string;
}

export const graniteProducts: Product[] = [
  // White Granites
  {
    id: 'white-granite',
    name: 'White Granite',
    category: 'granite',
    subcategory: 'white',
    description: 'White granite is a natural igneous rock formed deep within the Earth\'s crust. It\'s made primarily of quartz, feldspar, and mica, which give it a light-colored, speckled appearance. Despite its name, white granite often includes subtle shades of gray, cream, pink, or black, depending on its mineral mix.',
    features: ['Natural igneous rock', 'Quartz, feldspar, and mica composition', 'Light-colored speckled appearance', 'Subtle color variations'],
    applications: ['Kitchen Countertops', 'Flooring', 'Wall Cladding', 'Monuments'],
    gradient: 'from-gray-100 to-gray-300',
    images: ['product-images/Granite/white-granite/White Granite.webp'],
    link: '/shop/granite/white-granite'
  },
  {
    id: 'alaska-white',
    name: 'Alaska White',
    category: 'granite',
    subcategory: 'white',
    description: 'Alaska White Granite is a premium natural stone processed in India, known for its cool white base with flowing patterns of gray, black, and silver minerals. Hard, dense, and resistant to heat, scratches, and stains—ideal for high-use areas.',
    features: ['Cool white base', 'Gray, black, and silver patterns', 'Heat resistant', 'Scratch and stain resistant'],
    applications: ['Kitchen Countertops', 'High-use Areas', 'Bathrooms', 'Commercial Kitchens'],
    origin: 'India',
    gradient: 'from-gray-50 to-gray-200',
    images: ['product-images/Granite/white-granite/Alaska white.webp'],
    link: '/shop/granite/alaska-white'
  },
  {
    id: 'colorado-white',
    name: 'Colorado White',
    category: 'granite',
    subcategory: 'white',
    description: 'Colorado White Granite is a premium Indian natural stone known for its clean white base with subtle patterns of gray, black, and beige minerals. The name reflects its cool-toned elegance. This granite is quarried and processed in India, especially in Rajasthan.',
    features: ['Clean white base', 'Subtle mineral patterns', 'Cool-toned elegance', 'Premium quality'],
    applications: ['Interior Design', 'Countertops', 'Wall Cladding', 'Export Markets'],
    origin: 'Rajasthan, India',
    gradient: 'from-gray-50 to-gray-150',
    images: ['product-images/Granite/white-granite/Colorado White.webp'],
    link: '/shop/granite/colorado-white'
  },
  // Black Granites
  {
    id: 'black-granite',
    name: 'Black Granite',
    category: 'granite',
    subcategory: 'black',
    description: 'Black granite is a durable, visually striking igneous rock known for its deep black color and fine-grained texture. Known for hardness and polishability. It\'s widely used in construction, design, and monuments for its elegance and strength.',
    features: ['Deep black color', 'Fine-grained texture', 'High hardness', 'Excellent polishability'],
    applications: ['Monuments', 'Construction', 'Design Projects', 'Luxury Interiors'],
    gradient: 'from-gray-900 to-black',
    images: ['product-images/Granite/Ask Balck granite.webp'],
    link: '/shop/granite/black-granite'
  },
  {
    id: 'black-galaxy',
    name: 'Black Galaxy',
    category: 'granite',
    subcategory: 'black',
    description: 'Black Galaxy Granite is a premium natural stone quarried in Ongole, Andhra Pradesh, India. It features a deep black base adorned with golden and bronze speckles that resemble a starry night sky, giving it its distinctive "galaxy" appearance.',
    features: ['Deep black base', 'Golden and bronze speckles', 'Starry night appearance', 'Premium quality'],
    applications: ['Kitchen Countertops', 'Flooring', 'Wall Cladding', 'Monuments'],
    origin: 'Ongole, Andhra Pradesh',
    gradient: 'from-gray-900 to-black',
    images: ['product-images/Granite/Black Galaxy.webp'],
    link: '/shop/granite/black-galaxy'
  },
  {
    id: 'cats-eye',
    name: 'Cat\'s Eye',
    category: 'granite',
    subcategory: 'black',
    description: 'Cat\'s Eye Granite is a striking natural stone known for its dark base—usually black or deep brown—interspersed with shimmering golden or bronze flecks that resemble the glint of a cat\'s eye. Quarried and processed in India, especially in Andhra Pradesh and Tamil Nadu.',
    features: ['Dark black/brown base', 'Shimmering golden flecks', 'Cat\'s eye appearance', 'Dramatic visual appeal'],
    applications: ['Feature Walls', 'Luxury Interiors', 'Countertops', 'Decorative Elements'],
    origin: 'Andhra Pradesh, Tamil Nadu',
    gradient: 'from-yellow-600 via-gray-900 to-black',
    images: ['product-images/Granite/Cats eye.webp'],
    link: '/shop/granite/cats-eye'
  },
  {
    id: 'coin-black',
    name: 'Coin Black',
    category: 'granite',
    subcategory: 'black',
    description: 'Coin Black Granite is a premium Indian natural stone known for its deep black base dotted with round, coin-like mineral specks—usually in shades of gray, silver, or bronze. Quarried and processed mainly in South India.',
    features: ['Deep black base', 'Round coin-like specks', 'Gray, silver, bronze accents', 'Low maintenance'],
    applications: ['Modern Interiors', 'Countertops', 'Flooring', 'Commercial Spaces'],
    origin: 'South India',
    gradient: 'from-gray-800 to-black',
    images: ['product-images/Granite/Coin black.webp'],
    link: '/shop/granite/coin-black'
  },
  // Red Granites
  {
    id: 'alaska-red',
    name: 'Alaska Red',
    category: 'granite',
    subcategory: 'red',
    description: 'Alaska Red Granite is a premium natural stone quarried in India, known for its vibrant red base accented with black, gray, and silver mineral patterns. It\'s part of the "Alaska" family of granites, standing out for its bold, dramatic appearance.',
    features: ['Vibrant red base', 'Black, gray, and silver patterns', 'Bold dramatic appearance', 'Premium quality'],
    applications: ['Feature Walls', 'Countertops', 'Flooring', 'Luxury Projects'],
    origin: 'India',
    gradient: 'from-red-600 to-red-800',
    images: ['product-images/Granite/red-granite/Alaska Red.webp'],
    link: '/shop/granite/alaska-red'
  },
  {
    id: 'himalaya-red',
    name: 'Himalaya Red',
    category: 'granite',
    subcategory: 'red',
    description: 'Himalaya Red Granite is a vibrant and durable natural stone quarried in Gujarat, India, known for its deep crimson base with scattered black and gray flecks. Its bold color and consistent texture make it a favorite for both traditional and modern architecture.',
    features: ['Deep crimson base', 'Black and gray flecks', 'Bold vibrant color', 'Consistent texture'],
    applications: ['Temples', 'Memorials', 'High-traffic Interiors', 'Traditional Architecture'],
    origin: 'Gujarat, India',
    gradient: 'from-red-700 to-red-900',
    images: ['product-images/Granite/red-granite/Himalaya Red.webp'],
    link: '/shop/granite/himalaya-red'
  },
  {
    id: 'k-red',
    name: 'K Red',
    category: 'granite',
    subcategory: 'red',
    description: 'K Red Granite is a vibrant and durable natural stone quarried in South India, especially in Karnataka—hence the "K" in its name. It features a bright red to reddish-pink base with scattered black and gray specks, giving it a bold, energetic appearance.',
    features: ['Bright red to reddish-pink base', 'Black and gray specks', 'Bold energetic appearance', 'Symbolic color'],
    applications: ['Temples', 'Memorials', 'High-traffic Interiors', 'Cultural Buildings'],
    origin: 'Karnataka, India',
    gradient: 'from-red-500 to-red-700',
    images: ['product-images/Granite/red-granite/K Red Granite.webp'],
    link: '/shop/granite/k-red'
  },
  // Golden/Yellow Granites
  {
    id: 'alaska-gold',
    name: 'Alaska Gold',
    category: 'granite',
    subcategory: 'gold',
    description: 'Luxurious gold granite with rich golden hues and intricate patterns. Perfect for premium applications and luxury interiors.',
    features: ['Rich golden color', 'Unique patterns', 'High polish finish', 'Premium quality'],
    applications: ['Luxury Interiors', 'Countertops', 'Feature Walls', 'Commercial Spaces'],
    origin: 'Rajasthan, India',
    gradient: 'from-yellow-400 to-yellow-600',
    images: ['product-images/Granite/Alaska gold.webp'],
    link: '/shop/granite/alaska-gold'
  },
  {
    id: 'crystal-yellow',
    name: 'Crystal Yellow',
    category: 'granite',
    subcategory: 'gold',
    description: 'Crystal Yellow Granite is a warm-toned natural stone quarried in Rajasthan, India, known for its golden-yellow base with fine specks of brown, gray, and white minerals. It\'s widely used in homes, public buildings, and temples.',
    features: ['Golden-yellow base', 'Fine mineral specks', 'Warm cheerful appearance', 'Reliable durability'],
    applications: ['Homes', 'Public Buildings', 'Temples', 'Commercial Projects'],
    origin: 'Rajasthan, India',
    gradient: 'from-yellow-400 to-yellow-600',
    images: ['product-images/Granite/Crystal Yellow.webp'],
    link: '/shop/granite/crystal-yellow'
  },
  // Green Granites
  {
    id: 'devda-green',
    name: 'Devda Green',
    category: 'granite',
    subcategory: 'green',
    description: 'Devda Green is a natural stone quarried in Rajasthan, India, known for its subtle greenish-gray base with fine specks of black, white, and olive minerals. It\'s popular for both residential and commercial projects due to its understated elegance.',
    features: ['Subtle greenish-gray base', 'Fine mineral specks', 'Understated elegance', 'Calm earthy appearance'],
    applications: ['Residential Projects', 'Commercial Buildings', 'Minimalist Design', 'Traditional Architecture'],
    origin: 'Rajasthan, India',
    gradient: 'from-green-200 to-green-400',
    images: ['product-images/Granite/green-granite/Devda green.webp'],
    link: '/shop/granite/devda-green'
  },
  {
    id: 'hassan-green',
    name: 'Hassan Green',
    category: 'granite',
    subcategory: 'green',
    description: 'Hassan Green Granite is a premium natural stone quarried in Karnataka, India, especially near the town of Hassan. It features a greenish-gray base with fine specks of black, white, and dark gray minerals, giving it a calm, earthy elegance.',
    features: ['Greenish-gray base', 'Fine mineral specks', 'Calm earthy elegance', 'Premium quality'],
    applications: ['Modern Architecture', 'Traditional Buildings', 'Interior Design', 'Landscaping'],
    origin: 'Hassan, Karnataka',
    gradient: 'from-green-300 to-green-500',
    images: ['product-images/Granite/green-granite/Hassan Green.webp'],
    link: '/shop/granite/hassan-green'
  },
  // Blue Granites
  {
    id: 'crystal-blue',
    name: 'Crystal Blue',
    category: 'granite',
    subcategory: 'blue',
    description: 'Crystal Blue Granite is a premium Indian natural stone known for its cool bluish-gray base with fine specks of white, black, and silver minerals. Quarried mainly in Andhra Pradesh and Tamil Nadu.',
    features: ['Cool bluish-gray base', 'Fine mineral specks', 'Elegant appearance', 'Versatile applications'],
    applications: ['Interior Design', 'Exterior Facades', 'Modern Architecture', 'Commercial Projects'],
    origin: 'Andhra Pradesh, Tamil Nadu',
    gradient: 'from-blue-200 to-blue-400',
    images: ['product-images/Granite/brown-blue-granite/Crystal blue.webp', 'product-images/Granite/brown-blue-granite/Crystal Blue 2.webp', 'product-images/Granite/brown-blue-granite/Crystal Blue Polished.webp'],
    link: '/shop/granite/crystal-blue'
  },
  {
    id: 'lavender-blue',
    name: 'Lavender Blue',
    category: 'granite',
    subcategory: 'blue',
    description: 'Lavender Blue Granite is a cool-toned, elegant natural stone quarried in Andhra Pradesh, India. It features a bluish-gray base with scattered black, white, and lavender-hued mineral specks, giving it a soft, speckled texture.',
    features: ['Bluish-gray base', 'Lavender-hued specks', 'Soft speckled texture', 'Cool-toned elegance'],
    applications: ['Modern Interiors', 'Facades', 'Export Projects', 'Contemporary Design'],
    origin: 'Andhra Pradesh, India',
    gradient: 'from-purple-200 to-blue-300',
    images: ['product-images/Granite/brown-blue-granite/Lavender _Blue granite.webp'],
    link: '/shop/granite/lavender-blue'
  },
  // Brown Granites
  {
    id: 'tan-brown',
    name: 'Tan Brown',
    category: 'granite',
    subcategory: 'brown',
    description: 'Tan Brown Granite is a popular natural stone quarried in South India, particularly in Telangana and Andhra Pradesh. It features a warm brown base with black, gray, and reddish-brown speckles, creating a rich, earthy appearance.',
    features: ['Warm brown base', 'Black and gray speckles', 'Reddish-brown accents', 'Earthy appearance'],
    applications: ['Kitchen Countertops', 'Flooring', 'Wall Cladding', 'Commercial Projects'],
    origin: 'Telangana, Andhra Pradesh',
    gradient: 'from-yellow-700 to-yellow-900',
    images: ['product-images/Granite/brown-blue-granite/Tan Brown Granite.webp'],
    link: '/shop/granite/tan-brown'
  },
  {
    id: 'ivory-brown',
    name: 'Ivory Brown',
    category: 'granite',
    subcategory: 'brown',
    description: 'Ivory Brown Granite—also known as Shivakashi Ivory or Ivory Gold—is a soft-toned, medium-grained natural stone quarried in Tamil Nadu, India. It features a creamy ivory base with flowing brown, pink, and gray mineral swirls.',
    features: ['Creamy ivory base', 'Flowing mineral swirls', 'Soft-toned appearance', 'Medium-grained texture'],
    applications: ['Kitchen Countertops', 'Flooring', 'Wall Cladding', 'Elegant Interiors'],
    origin: 'Tamil Nadu, India',
    gradient: 'from-yellow-200 to-yellow-400',
    images: ['product-images/Granite/brown-blue-granite/Ivory Brown Granite.webp'],
    link: '/shop/granite/ivory-brown'
  },
  // Additional Premium Granites
  {
    id: 'boss-paradiso',
    name: 'Boss Paradiso',
    category: 'granite',
    subcategory: 'red',
    description: 'Boss Paradiso Granite—also called Boss Paradizzo—is a bold and luxurious natural stone processed in India, known for its deep reddish-brown base interwoven with pink, black, and gray mineral veins. Its dramatic flow patterns and rich coloration make it a favorite for high-end interiors.',
    features: ['Deep reddish-brown base', 'Pink, black, and gray veins', 'Dramatic flow patterns', 'Luxurious appearance'],
    applications: ['High-end Interiors', 'Architectural Features', 'Feature Walls', 'Luxury Projects'],
    origin: 'India',
    gradient: 'from-red-800 via-pink-600 to-gray-800',
    images: ['product-images/Granite/Boss Paradiso.webp'],
    link: '/shop/granite/boss-paradiso'
  },
  {
    id: 'cheema-pink',
    name: 'Cheema Pink',
    category: 'granite',
    subcategory: 'pink',
    description: 'Cheema Pink Granite is a popular Indian natural stone known for its soft pink base with specks of gray, white, and black minerals. Quarried mainly in Rajasthan and Gujarat, it\'s widely used in construction and interior design for its elegant appearance.',
    features: ['Soft pink base', 'Gray, white, and black specks', 'Elegant appearance', 'Reliable performance'],
    applications: ['Construction', 'Interior Design', 'Residential Projects', 'Commercial Buildings'],
    origin: 'Rajasthan, Gujarat',
    gradient: 'from-pink-300 to-pink-500',
    images: ['product-images/Granite/Cheema Pink.webp'],
    link: '/shop/granite/cheema-pink'
  },
  {
    id: 'eresha-blue',
    name: 'Eresha Blue',
    category: 'granite',
    subcategory: 'blue',
    description: 'Eresha Blue features a soft off-white to light beige base, beautifully accented with reddish-brown and dark mineral specks. The natural, irregular patterning gives it a warm, organic feel—perfect for both modern and traditional applications.',
    features: ['Off-white to light beige base', 'Reddish-brown mineral specks', 'Natural irregular patterning', 'Warm organic feel'],
    applications: ['Modern Applications', 'Traditional Design', 'Interior Features', 'Architectural Elements'],
    origin: 'Rajasthan, Andhra Pradesh',
    gradient: 'from-blue-100 via-red-200 to-beige-300',
    images: ['product-images/Granite/brown-blue-granite/Eresha blue.webp'],
    link: '/shop/granite/eresha-blue'
  },
  {
    id: 'eresha-brown',
    name: 'Eresha Brown',
    category: 'granite',
    subcategory: 'brown',
    description: 'Eresha Brown is known for its deep brown base layered with swirling veins of black, reddish-brown, and beige. Its dramatic, flowing texture and polished finish make it a favorite for luxury interiors, temple architecture, and statement walls.',
    features: ['Deep brown base', 'Swirling veins', 'Dramatic flowing texture', 'Mirror-like sheen'],
    applications: ['Luxury Interiors', 'Temple Architecture', 'Statement Walls', 'Feature Elements'],
    gradient: 'from-yellow-800 via-red-900 to-black',
    images: ['product-images/Granite/brown-blue-granite/Eresha Brown.webp'],
    link: '/shop/granite/eresha-brown'
  },
  {
    id: 'eresha-brown-lite',
    name: 'Eresha Brown Lite',
    category: 'granite',
    subcategory: 'brown',
    description: 'This granite features a warm beige to brown base with wavy, layered streaks of black and dark brown, forming a mirrored, symmetrical pattern. The dramatic veining and central diamond-like motif make it ideal for feature walls and lobby panels.',
    features: ['Warm beige to brown base', 'Wavy layered streaks', 'Symmetrical pattern', 'Diamond-like motif'],
    applications: ['Feature Walls', 'Lobby Panels', 'Temple Interiors', 'Architectural Highlights'],
    gradient: 'from-yellow-600 via-yellow-800 to-gray-900',
    images: ['product-images/Granite/brown-blue-granite/Eresha Brown Lite.webp'],
    link: '/shop/granite/eresha-brown-lite'
  },
  {
    id: 'fish-black',
    name: 'Fish Black',
    category: 'granite',
    subcategory: 'black',
    description: 'Fish Black Granite is a premium natural stone quarried in Rajasthan, India, known for its deep black base with white and gray swirls that resemble the movement or shape of fish—hence the name. Its unique pattern and high-gloss finish make it a favorite for interiors.',
    features: ['Deep black base', 'White and gray swirls', 'Fish-like patterns', 'High-gloss finish'],
    applications: ['Residential Interiors', 'Commercial Spaces', 'Feature Elements', 'Modern Design'],
    origin: 'Rajasthan, India',
    gradient: 'from-gray-900 via-gray-400 to-black',
    images: ['product-images/Granite/Fish Black.webp'],
    link: '/shop/granite/fish-black'
  },
  {
    id: 'g20-black',
    name: 'G20 Black',
    category: 'granite',
    subcategory: 'black',
    description: 'G20 Black Granite is a durable and elegant natural stone quarried in South India, especially in Andhra Pradesh, near Tirupati. It features a medium to deep black base with subtle greenish-gray specks, giving it a uniform, understated look.',
    features: ['Medium to deep black base', 'Greenish-gray specks', 'Uniform appearance', 'Low maintenance'],
    applications: ['Commercial Projects', 'Residential Buildings', 'Modern Interiors', 'Architectural Elements'],
    origin: 'Andhra Pradesh, India',
    gradient: 'from-gray-800 via-green-900 to-black',
    images: ['product-images/Granite/g20 granite.webp'],
    link: '/shop/granite/g20-black'
  },
  {
    id: 'himalayan-blue',
    name: 'Himalayan Blue',
    category: 'granite',
    subcategory: 'blue',
    description: 'This granite is quarried in Tamil Nadu and Karnataka, and is prized for its fiery, flowing bands of color. It\'s often used in temples, hotel lobbies, and statement walls where visual drama is desired.',
    features: ['Fiery flowing bands', 'Dramatic coloring', 'Visual impact', 'Premium quality'],
    applications: ['Temples', 'Hotel Lobbies', 'Statement Walls', 'Dramatic Features'],
    origin: 'Tamil Nadu, Karnataka',
    gradient: 'from-blue-600 via-orange-500 to-red-600',
    images: ['product-images/Granite/brown-blue-granite/Himalayan Blue.webp'],
    link: '/shop/granite/himalayan-blue'
  },
  {
    id: 'khammam-black',
    name: 'Khammam Black',
    category: 'granite',
    subcategory: 'black',
    description: 'Khammam Black Granite is a fine-grained, jet-black natural stone quarried in Khammam district, Telangana, part of the ancient Deccan Plateau. Though often marketed as granite, it is technically a dolerite—a dark, dense igneous rock with exceptional strength.',
    features: ['Fine-grained texture', 'Jet-black color', 'Exceptional strength', 'Consistent appearance'],
    applications: ['Memorials', 'Flooring', 'Architectural Cladding', 'Monument Construction'],
    origin: 'Khammam, Telangana',
    gradient: 'from-gray-900 to-black',
    images: ['product-images/Granite/Khammam black granite.webp'],
    link: '/shop/granite/khammam-black'
  },
  {
    id: 'lakha-red',
    name: 'Lakha Red',
    category: 'granite',
    subcategory: 'red',
    description: 'Lakha Red Granite is a bold and durable natural stone quarried in the Lakha region of Jaisalmer, Rajasthan. It\'s known for its deep red base with scattered black, white, and gray specks, giving it a vibrant, textured appearance.',
    features: ['Deep red base', 'Scattered mineral specks', 'Vibrant appearance', 'Textured surface'],
    applications: ['Temples', 'Memorials', 'High-impact Spaces', 'Cultural Buildings'],
    origin: 'Jaisalmer, Rajasthan',
    gradient: 'from-red-700 to-red-900',
    images: ['product-images/Granite/red-granite/Lakha Red Granite.webp'],
    link: '/shop/granite/lakha-red'
  },
  {
    id: 'magma-black',
    name: 'Magma Black',
    category: 'granite',
    subcategory: 'black',
    description: 'Magma Black Granite is a dramatic and high-impact natural stone quarried in South India. It features a jet-black base with fiery swirls of gold, copper, and rust, resembling molten lava—hence the name Magma.',
    features: ['Jet-black base', 'Fiery gold and copper swirls', 'Molten lava appearance', 'Artistic patterns'],
    applications: ['Luxury Interiors', 'Statement Walls', 'Temple Architecture', 'Feature Elements'],
    origin: 'Andhra Pradesh, Tamil Nadu',
    gradient: 'from-black via-yellow-600 to-red-700',
    images: ['product-images/Granite/Magma black Granite.webp'],
    link: '/shop/granite/magma-black'
  },
  {
    id: 'marquini-black',
    name: 'Marquini Black',
    category: 'granite',
    subcategory: 'black',
    description: 'Marquini Black Granite is a luxurious and visually striking natural stone quarried in Rajasthan, India. It features a deep black base with flowing white and gray veins, creating a dramatic, marble-like appearance.',
    features: ['Deep black base', 'Flowing white and gray veins', 'Marble-like appearance', 'High polish finish'],
    applications: ['Premium Interiors', 'Temple Architecture', 'Export Projects', 'Luxury Installations'],
    origin: 'Rajasthan, India',
    gradient: 'from-black via-gray-300 to-white',
    images: ['product-images/Granite/Marquini Black.webp'],
    link: '/shop/granite/marquini-black'
  },
  {
    id: 'necklace-granite',
    name: 'Necklace Granite',
    category: 'granite',
    subcategory: 'black',
    description: 'Necklace Granite is a unique and visually captivating natural stone quarried in Andhra Pradesh, India. It features a dark gray to black base with scattered white, silver, and light gray flecks, often forming patterns that resemble beads or chains.',
    features: ['Dark gray to black base', 'White and silver flecks', 'Necklace-like patterns', 'Elegant contrast'],
    applications: ['Temples', 'Flooring', 'Architectural Cladding', 'Decorative Elements'],
    origin: 'Andhra Pradesh, India',
    gradient: 'from-gray-800 via-gray-300 to-black',
    images: ['product-images/Granite/Necklace granite.webp'],
    link: '/shop/granite/necklace-granite'
  },
  {
    id: 'r-black',
    name: 'R Black',
    category: 'granite',
    subcategory: 'black',
    description: 'R Black Granite is a fine-grained, jet-black natural stone quarried in Rajasthan, India, especially near Jalore and Barmer. It\'s known for its uniform black surface with minimal speckling, offering a sleek and polished look.',
    features: ['Fine-grained texture', 'Uniform black surface', 'Minimal speckling', 'Sleek appearance'],
    applications: ['Temples', 'Memorials', 'Flooring', 'Facades'],
    origin: 'Rajasthan, India',
    gradient: 'from-gray-900 to-black',
    images: ['product-images/Granite/R Black.webp'],
    link: '/shop/granite/r-black'
  },
  {
    id: 'rajasthan-black',
    name: 'Rajasthan Black',
    category: 'granite',
    subcategory: 'black',
    description: 'Rajasthan Black Granite is a premium natural stone quarried in Rajasthan, India. It features a deep black base with subtle gray and white specks, creating a sophisticated and uniform appearance.',
    features: ['Deep black base', 'Subtle gray and white specks', 'Uniform appearance', 'Premium quality'],
    applications: ['Memorials', 'Flooring', 'Architectural Elements', 'Interior Design'],
    origin: 'Rajasthan, India',
    gradient: 'from-gray-900 via-gray-600 to-black',
    images: ['product-images/Granite/Rajasthan Black.webp'],
    link: '/shop/granite/rajasthan-black'
  },
  {
    id: 'royale-grey',
    name: 'Royale Grey',
    category: 'granite',
    subcategory: 'grey',
    description: 'Royale Grey Granite is a sophisticated and versatile natural stone quarried in South India. It features a medium to light gray base with fine specks of black, white, and silver, giving it a clean, uniform texture.',
    features: ['Medium to light gray base', 'Fine mineral specks', 'Clean uniform texture', 'Sophisticated appearance'],
    applications: ['Modern Interiors', 'Facades', 'Export Projects', 'Contemporary Design'],
    origin: 'Andhra Pradesh, India',
    gradient: 'from-gray-300 to-gray-500',
    images: ['product-images/Granite/Royale Grey Granite.webp'],
    link: '/shop/granite/royale-grey'
  },
  {
    id: 'ruby-red',
    name: 'Ruby Red',
    category: 'granite',
    subcategory: 'red',
    description: 'Ruby Red Granite is a vibrant, fine-grained natural stone quarried in North India, especially near Jalore and Barmer in Rajasthan. It features a bright red to pinkish-red base with scattered black, gray, and white specks.',
    features: ['Bright red to pinkish-red base', 'Fine-grained texture', 'Scattered mineral specks', 'Energetic appearance'],
    applications: ['Temples', 'Memorials', 'Flooring', 'Decorative Facades'],
    origin: 'Rajasthan, India',
    gradient: 'from-red-500 to-red-700',
    images: ['product-images/Granite/red-granite/Ruby Red.webp'],
    link: '/shop/granite/ruby-red'
  },
  {
    id: 'spicy-black',
    name: 'Spicy Black',
    category: 'granite',
    subcategory: 'black',
    description: 'Spicy Black Granite—also known as Black Spice or Royal Black—is a premium black stone quarried in Southern India. It features a dark gray to jet-black base with subtle black stripes and granular specks, giving it a sleek, understated elegance.',
    features: ['Dark gray to jet-black base', 'Subtle black stripes', 'Granular specks', 'Understated elegance'],
    applications: ['Modern Interiors', 'Countertops', 'Flooring', 'Contemporary Design'],
    origin: 'Andhra Pradesh, Tamil Nadu',
    gradient: 'from-gray-800 to-black',
    images: ['product-images/Granite/spicy black.webp'],
    link: '/shop/granite/spicy-black'
  },
  {
    id: 'steel-grey',
    name: 'Steel Grey',
    category: 'granite',
    subcategory: 'grey',
    description: 'Steel Grey Granite is a medium-grained natural stone quarried in Telangana, India. It features a steel-gray base with scattered silver, black, and charcoal flecks, giving it a modern, industrial look.',
    features: ['Steel-gray base', 'Silver and charcoal flecks', 'Modern industrial look', 'Medium-grained texture'],
    applications: ['Contemporary Interiors', 'Facades', 'Export Projects', 'Modern Architecture'],
    origin: 'Telangana, India',
    gradient: 'from-gray-400 to-gray-700',
    images: ['product-images/Granite/Steel Grey Granite.webp'],
    link: '/shop/granite/steel-grey'
  },
  {
    id: 'titanium-black',
    name: 'Titanium Black',
    category: 'granite',
    subcategory: 'black',
    description: 'Titanium Black Granite—also known as Black Titanium or Silver Pearl Granite—is a dramatic and luxurious natural stone quarried in Andhra Pradesh and Tamil Nadu, India. It features a jet-black base with flowing silver, white, and gray veins.',
    features: ['Jet-black base', 'Flowing silver and white veins', 'Dramatic appearance', 'Luxurious finish'],
    applications: ['Premium Interiors', 'Countertops', 'Statement Walls', 'Luxury Projects'],
    origin: 'Andhra Pradesh, Tamil Nadu',
    gradient: 'from-black via-gray-300 to-gray-600',
    images: ['product-images/Granite/Titanium Black Granite.webp'],
    link: '/shop/granite/titanium-black'
  },
  {
    id: 'vizag-blue',
    name: 'Vizag Blue',
    category: 'granite',
    subcategory: 'blue',
    description: 'Vizag Blue Granite is a striking, medium- to coarse-grained natural stone quarried near Visakhapatnam (Vizag), Andhra Pradesh, India. It features a bluish-gray base with flowing black, white, and lavender veins, often resembling waves or clouds.',
    features: ['Bluish-gray base', 'Flowing veins', 'Wave-like patterns', 'Coarse-grained texture'],
    applications: ['Temples', 'Luxury Interiors', 'Export Projects', 'Architectural Features'],
    origin: 'Visakhapatnam, Andhra Pradesh',
    gradient: 'from-blue-400 via-purple-300 to-gray-600',
    images: ['product-images/Granite/brown-blue-granite/Vizag Blue.webp'],
    link: '/shop/granite/vizag-blue'
  },
  {
    id: 'z-brown',
    name: 'Z Brown',
    category: 'granite',
    subcategory: 'brown',
    description: 'Zed Brown granite is a durable, naturally beautiful stone characterized by its warm brown color with subtle natural patterns, often originating from India. It is highly versatile, suitable for various applications due to its resistance to scratches, stains, and heat.',
    features: ['Warm brown color', 'Subtle natural patterns', 'Scratch resistant', 'Heat resistant'],
    applications: ['Kitchen Countertops', 'Flooring', 'Bathroom Vanities', 'Exterior Features'],
    origin: 'India',
    gradient: 'from-yellow-700 to-yellow-900',
    images: ['product-images/Granite/red-granite/Zed Brown Red.webp', 'product-images/Granite/red-granite/Z Brown Red.webp'],
    link: '/shop/granite/z-brown'
  },
  {
    id: 'warangal-black',
    name: 'Warangal Black',
    category: 'granite',
    subcategory: 'black',
    description: 'Warangal Black Granite is a premium natural stone quarried in Warangal district, Telangana, India. It features a consistent deep black color with fine-grained texture and minimal veining, making it ideal for both traditional and contemporary applications.',
    features: ['Consistent deep black color', 'Fine-grained texture', 'Minimal veining', 'High durability'],
    applications: ['Monuments', 'Flooring', 'Cladding', 'Interior Design'],
    origin: 'Warangal, Telangana',
    gradient: 'from-gray-900 to-black',
    images: ['product-images/Granite/Warangal Black.webp'],
    link: '/shop/granite/warangal-black'
  }
];

export const marbleProducts: Product[] = [
  {
    id: 'golden-galaxy-marble',
    name: 'Golden Galaxy Marble',
    category: 'marble',
    description: 'Golden Galaxy Marble is a luxurious natural stone known for its creamy beige to golden base with shimmering golden, brown, and gray veins. Though often marketed as marble, it may technically be a highly polished granite or dolomitic marble, depending on the supplier. Its radiant, galaxy-like sparkle makes it ideal for premium interiors and decorative installations.',
    features: ['Creamy beige to golden base', 'Shimmering golden veins', 'Galaxy-like sparkle', 'Luxurious appearance'],
    applications: ['Premium Interiors', 'Decorative Installations', 'Feature Walls', 'Luxury Projects'],
    gradient: 'from-yellow-200 to-yellow-400',
    images: ['product-images/Granite/Golden galaxy marble.webp'],
    link: '/shop/marble/golden-galaxy-marble'
  },
  {
    id: 'dark-green-marble',
    name: 'Dark Green Marble',
    category: 'marble',
    description: 'Dark Green Marble is a richly colored, decorative natural stone quarried in Rajasthan, India, especially near Rishabhdeo (Kesariyaji), Udaipur. It features a deep green base with flowing white, gray, and brown veins, often resembling forest textures or abstract brushstrokes.',
    features: ['Deep green base', 'Flowing white and gray veins', 'Forest-like textures', 'Crystallized surface'],
    applications: ['Temples', 'Flooring', 'Countertops', 'Wall Cladding'],
    origin: 'Rajasthan, India',
    gradient: 'from-green-700 to-green-900',
    images: ['product-images/Marble/Dark green marble.webp'],
    link: '/shop/marble/dark-green-marble'
  },
  {
    id: 'green-marble',
    name: 'Green Marble',
    category: 'marble',
    description: 'Green Marble is a richly colored, decorative metamorphic stone quarried in Rajasthan, India, especially near Rishabhdeo (Kesariyaji), Udaipur. Though commonly called "marble," it\'s technically a serpentine stone, known for its deep green base and white, brown, or golden veining.',
    features: ['Deep green base', 'White, brown, or golden veining', 'Serpentine stone', 'Symbolic color'],
    applications: ['Temples', 'Flooring', 'Wall Cladding', 'Tabletops'],
    origin: 'Rajasthan, India',
    gradient: 'from-green-600 to-green-800',
    images: ['product-images/Marble/Green Marble.webp'],
    link: '/shop/marble/green-marble'
  },
  {
    id: 'grey-marble',
    name: 'Grey Marble',
    category: 'marble',
    description: 'Grey Marble is a versatile and elegant metamorphic stone quarried in Rajasthan, India, especially near Kishangarh, Rajsamand, and Udaipur. It features a light to medium gray base with subtle white, silver, or darker gray veins, offering a calm, neutral aesthetic.',
    features: ['Light to medium gray base', 'Subtle veining', 'Calm neutral aesthetic', 'Excellent polishability'],
    applications: ['Flooring', 'Wall Cladding', 'Countertops', 'Temple Interiors'],
    origin: 'Rajasthan, India',
    gradient: 'from-gray-300 to-gray-500',
    images: ['product-images/Marble/Grey marble.webp'],
    link: '/shop/marble/grey-marble'
  },
  {
    id: 'white-marble',
    name: 'White Marble',
    category: 'marble',
    subcategory: 'white',
    description: 'White Marble is a timeless and elegant metamorphic stone quarried in Rajasthan, India, especially near Makrana, Rajsamand, and Kishangarh. It features a pure white to milky base, often with gray, gold, or beige veining, and is prized for its brightness, polishability, and symbolic purity.',
    features: ['Pure white to milky base', 'Gray, gold, or beige veining', 'Excellent polishability', 'Symbolic purity', 'Various textures and patterns'],
    applications: ['Temples', 'Monuments', 'Flooring', 'Luxury Interiors', 'Architectural Features'],
    origin: 'Rajasthan, India',
    gradient: 'from-gray-50 to-gray-100',
    images: [
      'product-images/Marble/White MArble 1.webp',
      'product-images/Marble/Marble white 2.webp',
      'product-images/Marble/White marble 2.webp'
    ],
    link: '/shop/marble/white-marble'
  },
  {
    id: 'max-white-marble',
    name: 'Max White Marble (Makrana)',
    category: 'marble',
    subcategory: 'white',
    description: 'Max White Marble is India\'s most iconic white marble, quarried in Makrana, Nagaur district, Rajasthan. Renowned for its milky white color, fine grain, and unmatched polishability, it was famously used in the Taj Mahal, making it a symbol of timeless beauty and architectural excellence.',
    features: ['Milky white color', 'Fine grain structure', 'Unmatched polishability', 'Taj Mahal marble'],
    applications: ['Monuments', 'Luxury Architecture', 'Temples', 'Premium Projects'],
    origin: 'Makrana, Rajasthan',
    gradient: 'from-white to-gray-25',
    images: ['product-images/Marble/Max white marble.webp'],
    link: '/shop/marble/max-white-marble'
  },
  {
    id: 'yellow-marble',
    name: 'Yellow Marble',
    category: 'marble',
    description: 'Yellow Marble is a warm-toned, decorative metamorphic stone quarried in Rajasthan, India, especially near Jaisalmer, Bidasar, and Jodhpur. It features a golden yellow to honey-colored base with flowing brown, white, or gray veins, often resembling desert landscapes or wood grain.',
    features: ['Golden yellow to honey base', 'Flowing veins', 'Desert landscape appearance', 'Wood grain patterns'],
    applications: ['Temples', 'Flooring', 'Wall Cladding', 'Interior Décor'],
    origin: 'Rajasthan, India',
    gradient: 'from-yellow-300 to-yellow-600',
    images: ['product-images/Marble/Yellow marble.webp'],
    link: '/shop/marble/yellow-marble'
  },
  {
    id: 'river-marble',
    name: 'River Marble',
    category: 'marble',
    description: 'River Marble is a trade name used for certain marble varieties that feature flowing, wave-like patterns resembling river currents. It\'s not a geological classification, but rather a commercial label for marbles with fluid veining, often in shades of gray, white, beige, or green.',
    features: ['Flowing wave-like patterns', 'River current appearance', 'Fluid veining', 'Natural calming aesthetic'],
    applications: ['Luxury Interiors', 'Temple Flooring', 'Wall Cladding', 'Decorative Elements'],
    origin: 'Rajasthan, India',
    gradient: 'from-blue-100 to-gray-300',
    images: ['product-images/Marble/river marble.webp'],
    link: '/shop/marble/river-marble'
  },
  {
    id: 'udaipur-pink',
    name: 'Udaipur Pink',
    category: 'marble',
    description: 'Udaipur Pink Marble is a soft-toned, decorative natural stone quarried in and around Udaipur, Rajasthan. It features a light pink to peach-colored base with subtle white, cream, or gray veins, giving it a warm and elegant appearance.',
    features: ['Light pink to peach base', 'Subtle veining', 'Warm elegant appearance', 'Soft-toned beauty'],
    applications: ['Temples', 'Flooring', 'Wall Cladding', 'Interior Décor'],
    origin: 'Udaipur, Rajasthan',
    gradient: 'from-pink-200 to-pink-400',
    images: ['product-images/Marble/Udaipur pink marble.webp'],
    link: '/shop/marble/udaipur-pink'
  }
];

export const onyxProducts: Product[] = [
  {
    id: 'white-onyx',
    name: 'White Onyx',
    category: 'onyx',
    subcategory: 'white',
    description: 'White Onyx is a translucent, crystalline form of limestone known for its luminous appearance and ability to be backlit. Quarried primarily in Pakistan, Iran, and Mexico, it features a creamy white base with flowing veins in shades of honey, amber, and gold.',
    features: ['Translucent properties', 'Backlit capability', 'Luminous appearance', 'Flowing honey veins'],
    applications: ['Luxury Interiors', 'Backlit Features', 'Countertops', 'Decorative Elements'],
    origin: 'Pakistan, Iran, Mexico',
    gradient: 'from-amber-50 to-yellow-100',
    images: ['product-images/Onyx/White onyx.webp'],
    link: '/shop/onyx/white-onyx'
  },
  {
    id: 'green-onyx',
    name: 'Green Onyx',
    category: 'onyx',
    subcategory: 'green',
    description: 'Green Onyx is a stunning translucent stone featuring rich green hues with dramatic veining patterns. Known for its ability to transmit light, it creates breathtaking visual effects when backlit, making it perfect for luxury applications.',
    features: ['Rich green color', 'Dramatic veining', 'Light transmission', 'Luxury appeal'],
    applications: ['Feature Walls', 'Backlit Panels', 'Luxury Bathrooms', 'Statement Pieces'],
    origin: 'Pakistan, Iran',
    gradient: 'from-green-200 to-green-500',
    images: ['product-images/Onyx/Green onyx.webp'],
    link: '/shop/onyx/green-onyx'
  },
  {
    id: 'honey-onyx',
    name: 'Honey Onyx',
    category: 'onyx',
    subcategory: 'honey',
    description: 'Honey Onyx displays warm golden and amber tones with flowing translucent patterns. This premium stone is prized for its warm glow when backlit and its ability to create stunning focal points in luxury interiors.',
    features: ['Warm golden tones', 'Amber patterns', 'Translucent glow', 'Premium quality'],
    applications: ['Luxury Hotels', 'Spa Features', 'Reception Desks', 'Artistic Installations'],
    origin: 'Pakistan, Iran',
    gradient: 'from-yellow-200 to-orange-300',
    images: ['product-images/Onyx/Honey onyx.webp'],
    link: '/shop/onyx/honey-onyx'
  },
  {
    id: 'red-onyx',
    name: 'Red Onyx',
    category: 'onyx',
    subcategory: 'red',
    description: 'Red Onyx is a dramatic translucent stone featuring deep red and burgundy tones with striking veining. Its bold color and light-transmitting properties make it ideal for creating powerful design statements.',
    features: ['Deep red color', 'Burgundy tones', 'Striking veining', 'Bold appearance'],
    applications: ['Feature Walls', 'Bar Tops', 'Accent Pieces', 'Luxury Retail'],
    origin: 'Pakistan, Iran',
    gradient: 'from-red-300 to-red-600',
    images: ['product-images/Onyx/Red onyx.webp'],
    link: '/shop/onyx/red-onyx'
  }
];

export const quartziteProducts: Product[] = [
  {
    id: 'white-quartzite',
    name: 'White Quartzite',
    category: 'quartzite',
    subcategory: 'white',
    description: 'White Quartzite is a hard, non-porous metamorphic rock formed from sandstone. Known for its durability and resistance to heat, acid, and scratches, it offers the beauty of marble with superior performance characteristics.',
    features: ['Extremely durable', 'Heat resistant', 'Acid resistant', 'Low maintenance'],
    applications: ['Kitchen Countertops', 'Bathroom Vanities', 'Flooring', 'Wall Cladding'],
    origin: 'Brazil, India',
    gradient: 'from-gray-50 to-gray-200',
    images: ['product-images/Quartzite/White quartzite.webp'],
    link: '/shop/quartzite/white-quartzite'
  },
  {
    id: 'grey-quartzite',
    name: 'Grey Quartzite',
    category: 'quartzite',
    subcategory: 'grey',
    description: 'Grey Quartzite combines elegant grey tones with exceptional durability. This metamorphic stone offers superior performance for high-traffic areas while maintaining sophisticated aesthetics.',
    features: ['Elegant grey tones', 'Superior durability', 'Scratch resistant', 'Professional appearance'],
    applications: ['Commercial Spaces', 'Kitchen Islands', 'Bathroom Surfaces', 'Exterior Cladding'],
    origin: 'Brazil, India',
    gradient: 'from-gray-200 to-gray-500',
    images: ['product-images/Quartzite/Grey quartzite.webp'],
    link: '/shop/quartzite/grey-quartzite'
  },
  {
    id: 'blue-quartzite',
    name: 'Blue Quartzite',
    category: 'quartzite',
    subcategory: 'blue',
    description: 'Blue Quartzite features stunning blue hues with natural veining patterns. This rare and exotic stone combines exceptional durability with unique aesthetic appeal, making it perfect for luxury applications.',
    features: ['Stunning blue color', 'Natural veining', 'Rare and exotic', 'Exceptional durability'],
    applications: ['Luxury Kitchens', 'Feature Walls', 'High-end Bathrooms', 'Statement Countertops'],
    origin: 'Brazil',
    gradient: 'from-blue-200 to-blue-600',
    images: ['product-images/Quartzite/Blue quartzite.webp'],
    link: '/shop/quartzite/blue-quartzite'
  },
  {
    id: 'golden-quartzite',
    name: 'Golden Quartzite',
    category: 'quartzite',
    subcategory: 'golden',
    description: 'Golden Quartzite displays warm golden and honey tones with intricate veining patterns. This premium stone offers the perfect combination of luxury aesthetics and superior performance.',
    features: ['Warm golden tones', 'Honey highlights', 'Intricate veining', 'Premium quality'],
    applications: ['Luxury Residences', 'Hotel Lobbies', 'Premium Countertops', 'Decorative Features'],
    origin: 'Brazil, India',
    gradient: 'from-yellow-200 to-yellow-500',
    images: ['product-images/Quartzite/Golden quartzite.webp'],
    link: '/shop/quartzite/golden-quartzite'
  }
];

export const sandstoneProducts: Product[] = [
  {
    id: 'beige-sandstone',
    name: 'Beige Sandstone',
    category: 'sandstone',
    description: 'Beige Sandstone is a soft-toned, sedimentary rock quarried in Rajasthan, India, especially near Jodhpur, Dholpur, and Kota. It features a light cream to sandy beige color, often with subtle brown, pink, or gray undertones. Its warm, earthy appearance and natural texture make it ideal for temples, garden paving, wall cladding, and heritage architecture.',
    features: ['Light cream to sandy beige color', 'Subtle undertones', 'Warm earthy appearance', 'Natural texture'],
    applications: ['Temples', 'Garden Paving', 'Wall Cladding', 'Heritage Architecture'],
    origin: 'Rajasthan, India',
    gradient: 'from-yellow-100 to-yellow-200',
    images: ['product-images/Sandstone/Beige sandstone.webp'],
    link: '/shop/sandstone/beige-sandstone'
  },
  {
    id: 'rainbow-sandstone',
    name: 'Rainbow Sandstone',
    category: 'sandstone',
    description: 'Rainbow Sandstone is a stunning, multicolored sedimentary rock quarried in Bidasar, Churu district, Rajasthan. It features wavy bands of yellow, brown, and cream, resembling desert dunes or watercolor brushstrokes. Its natural layering and earthy tones make it ideal for temples, garden paving, wall cladding, and heritage architecture.',
    features: ['Multicolored wavy bands', 'Yellow, brown, and cream tones', 'Desert dune appearance', 'Natural layering'],
    applications: ['Temples', 'Garden Paving', 'Wall Cladding', 'Heritage Architecture'],
    origin: 'Bidasar, Rajasthan',
    gradient: 'from-yellow-200 via-orange-300 to-red-300',
    images: ['product-images/Sandstone/Rainbow Sandstone.webp'],
    link: '/shop/sandstone/rainbow-sandstone'
  },
  {
    id: 'red-sandstone',
    name: 'Red Sandstone',
    category: 'sandstone',
    description: 'Red Sandstone is a historic and earthy sedimentary rock quarried in Rajasthan, India, especially near Dholpur, Karauli, and Jodhpur. It features a rich reddish-brown to terracotta base, often with subtle pink, beige, or chocolate undertones.',
    features: ['Rich reddish-brown base', 'Terracotta coloring', 'Historic significance', 'Natural texture'],
    applications: ['Temples', 'Forts', 'Garden Paving', 'Heritage Architecture'],
    origin: 'Rajasthan, India',
    gradient: 'from-red-400 to-red-600',
    images: ['product-images/Sandstone/Red Sandstone.webp', 'product-images/Sandstone/Red Sandstone Polished.webp', 'product-images/Sandstone/Red Sandstone Rough.webp'],
    link: '/shop/sandstone/red-sandstone'
  },
  {
    id: 'teakwood-sandstone',
    name: 'Teakwood Sandstone',
    category: 'sandstone',
    description: 'Teakwood Sandstone—also called Teak Sandstone or Wood Grain Sandstone—is a unique sedimentary rock quarried in Nagaur and Bundi districts of Rajasthan, India. It features a golden-yellow to honey-colored base with flowing brown and tan streaks, resembling the grain of natural teakwood.',
    features: ['Golden-yellow to honey base', 'Wood grain appearance', 'Flowing brown streaks', 'Unique texture'],
    applications: ['Temples', 'Garden Paving', 'Wall Cladding', 'Rustic Interiors'],
    origin: 'Nagaur, Bundi, Rajasthan',
    gradient: 'from-yellow-600 to-yellow-800',
    images: ['product-images/Sandstone/Teakwood Sandstone.webp', 'product-images/Sandstone/Teakwood Sandstone 2.webp'],
    link: '/shop/sandstone/teakwood-sandstone'
  },
  {
    id: 'brown-sandstone',
    name: 'Brown Sandstone',
    category: 'sandstone',
    description: 'Brown Sandstone is a warm, earthy sedimentary rock quarried in Rajasthan, India, especially near Jodhpur, Dholpur, and Bansi Paharpur. It features a chocolate to reddish-brown base, often with subtle beige, pink, or gray undertones, and may show natural layering or ripple textures.',
    features: ['Chocolate to reddish-brown base', 'Subtle undertones', 'Natural layering', 'Rustic charm'],
    applications: ['Temples', 'Garden Paving', 'Wall Cladding', 'Heritage Architecture'],
    origin: 'Rajasthan, India',
    gradient: 'from-yellow-700 to-red-800',
    images: ['product-images/cobblestone/Brown sandstone cobbles.webp'],
    link: '/shop/sandstone/brown-sandstone'
  },
  {
    id: 'grey-sandstone',
    name: 'Grey Sandstone',
    category: 'sandstone',
    description: 'Grey Sandstone is a cool-toned, sedimentary rock quarried in Rajasthan, India, especially near Kota, Jodhpur, and Bijoliya. It features a light to medium gray base, often with subtle blue, brown, or green undertones, and may show natural layering, ripple textures, or fossil marks.',
    features: ['Light to medium gray base', 'Subtle undertones', 'Natural textures', 'Fossil marks'],
    applications: ['Temples', 'Garden Paving', 'Wall Cladding', 'Modern Architecture'],
    origin: 'Rajasthan, India',
    gradient: 'from-gray-300 to-gray-600',
    images: ['product-images/cobblestone/Grey sandstone cobble.webp'],
    link: '/shop/sandstone/grey-sandstone'
  },
  {
    id: 'yellow-sandstone',
    name: 'Yellow Sandstone',
    category: 'sandstone',
    description: 'Yellow Sandstone is a warm, earthy sedimentary rock quarried in Rajasthan, India, especially near Jaisalmer, Bidasar, and Jodhpur. It features a golden yellow to pale ochre base, often with subtle brown, beige, or pink undertones, and may show natural layering, ripple textures, or fossil marks.',
    features: ['Golden yellow to pale ochre', 'Subtle undertones', 'Natural layering', 'Desert-inspired tone'],
    applications: ['Temples', 'Garden Paving', 'Wall Cladding', 'Heritage Architecture'],
    origin: 'Rajasthan, India',
    gradient: 'from-yellow-300 to-yellow-600',
    images: ['product-images/cobblestone/yellow sandstone cobbles.webp', 'product-images/cobblestone/Yellow sandstone 2.webp'],
    link: '/shop/sandstone/yellow-sandstone'
  },
  // {
  //   id: 'cobblestone',
  //   name: 'Cobblestone',
  //   category: 'sandstone',
  //   description: 'Cobblestones are small, naturally rounded or cut stones used for paving streets, courtyards, and walkways. Traditionally made from granite, basalt, or sandstone, they\'re known for their durability, rustic charm, and slip resistance. In India, cobblestones are often crafted from local granites and sandstones.',
  //   features: ['Small rounded stones', 'Durable construction', 'Rustic charm', 'Slip resistance'],
  //   applications: ['Street Paving', 'Courtyards', 'Walkways', 'Heritage Zones'],
  //   origin: 'Rajasthan, Karnataka, Tamil Nadu',
  //   gradient: 'from-gray-400 to-gray-700',
  //   images: ['product-images/Sandstone/Cobblestone.webp'],
  //   link: '/shop/sandstone/cobblestone'
  // }
];

// Other Products Data
export interface OtherProduct {
  id: string;
  name: string;
  category: 'tombstone' | 'sculpture' | 'washbasin' | 'countertop' | 'tabletop' | 'decorative' | 'lamp' | 'vase' | 'balustrade';
  description: string;
  features: string[];
  applications: string[];
  images: string[];
  materials: string[];
  gradient: string;
  link: string;
}

export const otherProducts: OtherProduct[] = [
  // Tombstones & Memorials
  {
    id: 'granite-tombstone',
    name: 'Granite Tombstone Collection',
    category: 'tombstone',
    description: 'Dignified and lasting memorials crafted from premium granite, designed to honor and remember loved ones with timeless elegance and durability. Our collection features various designs from traditional headstones to modern memorial art.',
    features: ['Weather resistant', 'Custom engraving available', 'Premium granite construction', 'Multiple design options', 'Professional installation'],
    applications: ['Cemeteries', 'Memorial Parks', 'Private Memorials', 'Religious Sites'],
    images: [
      'product-images/Other Products/Tombstone/Design 2.webp',
      'product-images/Other Products/Tombstone/Design 10.webp',
      'product-images/Other Products/Tombstone/Design 11.webp',
      'product-images/Other Products/Tombstone/Design 12.webp',
      'product-images/Other Products/Tombstone/Design 13.webp',
      'product-images/Other Products/Tombstone/Design 14.webp',
      'product-images/Other Products/Tombstone/Design 15.webp',
      'product-images/Other Products/Tombstone/Design 16.webp',
      'product-images/Other Products/Tombstone/Design 17.webp',
      'product-images/Other Products/Tombstone/Design 18.webp',
      'product-images/Other Products/Tombstone/Headstone 1.webp',
      'product-images/Other Products/Tombstone/Headstone 2.webp',
      'product-images/Other Products/Tombstone/Headstone 3.webp',
      'product-images/Other Products/Tombstone/Headstone 4.webp',
      'product-images/Other Products/Tombstone/Headstone 5.webp'
    ],
    materials: ['Black Granite', 'Red Granite', 'Grey Granite', 'White Granite'],
    gradient: 'from-gray-800 to-gray-900',
    link: '/shop/other-products/granite-tombstone'
  },
  // Sculptures & Art
  {
    id: 'stone-sculpture',
    name: 'Stone Sculpture Collection',
    category: 'sculpture',
    description: 'Handcrafted stone sculptures and artistic pieces that showcase the natural beauty of stone combined with expert craftsmanship and artistic vision. Each piece is unique and tells its own story.',
    features: ['Handcrafted by skilled artisans', 'Custom designs available', 'Weather resistant', 'Unique artistic pieces', 'Various sizes available'],
    applications: ['Gardens', 'Hotels', 'Public Spaces', 'Private Collections', 'Religious Sites'],
    images: [
      'product-images/Other Products/Sculptures/sculpture-1.webp',
      'product-images/Other Products/Sculptures/sculpture-2.webp',
      'product-images/Other Products/Sculptures/sculpture-3.webp',
      'product-images/Other Products/Sculptures/sculpture-4.webp',
      'product-images/Other Products/Sculptures/sculpture-5.webp',
      'product-images/Other Products/Sculptures/sculpture-6.webp',
    ],
    materials: ['Marble', 'Granite', 'Sandstone'],
    gradient: 'from-amber-600 to-amber-800',
    link: '/shop/other-products/stone-sculpture'
  },
  // Wash Basins
  {
    id: 'marble-washbasin',
    name: 'Stone Wash Basin Collection',
    category: 'washbasin',
    description: 'Elegant stone basins crafted from premium marble and granite, perfect for luxury bathrooms and spa environments with superior durability and timeless appeal.',
    features: ['Premium stone construction', 'Smooth polished finish', 'Water resistant', 'Custom sizes available', 'Various designs'],
    applications: ['Luxury Bathrooms', 'Hotels', 'Spas', 'Residential Projects'],
    images: [
      'product-images/Other Products/WASHBASIN/Wash basin marble.webp',
      'product-images/Other Products/WASHBASIN/basin.webp',
      'product-images/Other Products/WASHBASIN/wash basin 2(1).webp',
      'product-images/Other Products/WASHBASIN/Wash Basin.webp',
      'product-images/Other Products/WASHBASIN/Wash Basin 2.webp',
      'product-images/Other Products/WASHBASIN/Wash Basin 3.webp',
      'product-images/Other Products/Marble bath tub.webp'
    ],
    materials: ['White Marble', 'Black Marble', 'Beige Marble', 'Granite'],
    gradient: 'from-blue-400 to-blue-600',
    link: '/shop/other-products/marble-washbasin'
  },
  // Countertops
  {
    id: 'granite-countertop',
    name: 'Stone Countertop Collection',
    category: 'countertop',
    description: 'Premium stone countertops for kitchens and bathrooms, offering exceptional durability, heat resistance, and stunning natural patterns. Available in various stones and finishes.',
    features: ['Heat resistant', 'Scratch resistant', 'Stain resistant', 'Custom edge profiles', 'Professional installation'],
    applications: ['Kitchen Islands', 'Bathroom Vanities', 'Bar Tops', 'Commercial Kitchens'],
    images: [
      'product-images/Other Products/Countertop/kitchen-counter-white-granite.webp',
      'product-images/Other Products/Countertop/countertop-2.webp',
      'product-images/Other Products/Countertop/countertop-4.webp',
      'product-images/Other Products/Countertop/countertop-5.webp',
      'product-images/Other Products/Countertop/countertop-marble.webp',
      'product-images/Other Products/Countertop/countertop-pink.webp',
      'product-images/Other Products/Countertop/Countertop in pilot black.webp'
    ],
    materials: ['Granite', 'Marble', 'Quartz', 'Sandstone'],
    gradient: 'from-green-600 to-green-800',
    link: '/shop/other-products/granite-countertop'
  },
  // Table Tops
  {
    id: 'marble-tabletop',
    name: 'Stone Table Top Collection',
    category: 'tabletop',
    description: 'Beautiful stone table tops that combine functionality with elegance, perfect for dining rooms, offices, and luxury spaces. Custom designs and inlay work available.',
    features: ['Polished stone surface', 'Custom shapes and sizes', 'Elegant patterns', 'Durable construction', 'Inlay work available'],
    applications: ['Dining Tables', 'Coffee Tables', 'Office Desks', 'Side Tables'],
    images: [
      'product-images/Other Products/Tabletop/Table top marble.webp',
      'product-images/Other Products/Tabletop/Table Top marble 2.webp',
      'product-images/Other Products/Tabletop/Natural Light Dining Space.webp'
    ],
    materials: ['White Marble', 'Black Marble', 'Green Marble', 'Granite'],
    gradient: 'from-purple-600 to-purple-800',
    link: '/shop/other-products/marble-tabletop'
  },
  // Decorative Items & Coasters
  {
    id: 'stone-coasters',
    name: 'Stone Coasters & Decorative Items',
    category: 'decorative',
    description: 'Unique stone accessories for home and office including coasters, bowls, and decorative pieces that add elegance to any space. Perfect for gifts and personal use.',
    features: ['Handcrafted details', 'Natural stone patterns', 'Functional and decorative', 'Gift-worthy pieces', 'Set options available'],
    applications: ['Home Decor', 'Office Spaces', 'Hotels', 'Gift Items'],
    images: [
      'product-images/Other Products/coaster/Marble-Coasters-2.webp',
      'product-images/Other Products/coaster/Coaster.webp',
      'product-images/Other Products/coaster/coaster-1.webp',
      'product-images/Other Products/Marble Decor.webp',
      'product-images/Other Products/Marble Flooring.webp'
    ],
    materials: ['Marble', 'Granite', 'Sandstone'],
    gradient: 'from-pink-600 to-pink-800',
    link: '/shop/other-products/stone-coasters'
  },
  // Lamps
  {
    id: 'stone-lamp',
    name: 'Stone Lamp Collection',
    category: 'lamp',
    description: 'Elegant stone lamps that combine natural beauty with functional lighting, perfect for creating ambient lighting in luxury spaces. Available in table and floor lamp designs.',
    features: ['Natural stone construction', 'Unique lighting effects', 'Handcrafted design', 'Durable and long-lasting', 'Various sizes available'],
    applications: ['Living Rooms', 'Bedrooms', 'Hotels', 'Restaurants', 'Offices'],
    images: [
      'product-images/Other Products/LAMP/Floor Lamp in White Marble.webp',
      'product-images/Other Products/LAMP/Floor Lamp in Green marble.webp',
      'product-images/Other Products/LAMP/Floor Lamp in red Sandstone.webp',
      'product-images/Other Products/LAMP/Table Lamp in Green marble 2.webp',
      'product-images/Other Products/LAMP/Table Lamp in Green Stone.webp',
      'product-images/Other Products/LAMP/Desk Lamp in Green marble.webp',
      'product-images/Other Products/LAMP/Granite Table Lamp.webp',
      'product-images/Other Products/LAMP/Elegance in Green and Beige.webp',
      'product-images/Other Products/LAMP/Elegance in Marble and Fabric.webp',
      'product-images/Other Products/LAMP/ChatGPT Image Sep 23, 2025, 11_53_00 PM.webp',
      'product-images/Other Products/LAMP/ChatGPT Image Sep 23, 2025, 11_56_52 PM.webp',
      'product-images/Other Products/LAMP/ChatGPT Image Sep 24, 2025, 12_04_45 AM.webp'
    ],
    materials: ['Marble', 'Sandstone', 'Granite'],
    gradient: 'from-yellow-600 to-yellow-800',
    link: '/shop/other-products/stone-lamp'
  },
  // Vases
  {
    id: 'marble-vase',
    name: 'Stone Vase & Stand Collection',
    category: 'vase',
    description: 'Decorative stone vases and stands that showcase the natural beauty of stone while providing elegant display solutions for flowers and decor. Perfect for monuments and home decoration.',
    features: ['Premium stone construction', 'Elegant designs', 'Various sizes available', 'Polished finish', 'Monument grade quality'],
    applications: ['Home Decor', 'Hotels', 'Offices', 'Event Decoration', 'Monuments'],
    images: [
      'product-images/Other Products/Vase and stand/Monument Vase.webp',
      'product-images/Other Products/Vase and stand/Monument Vase 2.webp',
      'product-images/Other Products/Vase and stand/Monument Vase 3.webp',
      'product-images/Other Products/Vase and stand/Vase.webp',
      'product-images/Other Products/Vase and stand/Granite Stands.webp',
      'product-images/Other Products/Vase and stand/Granite Stands 2.webp'
    ],
    materials: ['White Marble', 'Green Marble', 'Pink Marble', 'Granite'],
    gradient: 'from-indigo-600 to-indigo-800',
    link: '/shop/other-products/marble-vase'
  },
  // Balustrades
  {
    id: 'stone-balustrade',
    name: 'Stone Balustrade Collection',
    category: 'balustrade',
    description: 'Architectural stone balustrades that combine safety with elegance, perfect for staircases, terraces, and architectural features. Custom designs available for unique projects.',
    features: ['Architectural grade stone', 'Custom designs', 'Weather resistant', 'Professional installation', 'Safety compliant'],
    applications: ['Staircases', 'Terraces', 'Balconies', 'Architectural Features'],
    images: [
      'product-images/Other Products/Balustrade.webp',
      'product-images/Other Products/balustrade(1).webp'
    ],
    materials: ['Granite', 'Marble', 'Sandstone'],
    gradient: 'from-gray-600 to-gray-800',
    link: '/shop/other-products/stone-balustrade'
  }
];

export const allProducts = [...graniteProducts, ...marbleProducts, ...sandstoneProducts, ...onyxProducts, ...quartziteProducts];
