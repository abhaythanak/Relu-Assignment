import React, { useState } from "react";
import { FaHeart, FaComment, FaShare, FaBars, FaTimes,FaSearch, FaEllipsisV,FaHome, FaBell, FaShoppingCart, FaUser, FaSignOutAlt, FaBoxOpen} from "react-icons/fa";
import Button from "./ui/Button";

const posts = [
  {
    id: 1,
    user: "Lara Leones",
    username: "@laraart",
    image: "https://images.unsplash.com/photo-1739907548147-f991baedfd5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    likes: "9.8k",
    comments: "8.6k",
    shares: "7.2k",
  },
  {
    id: 2,
    user: "Thomas J.",
    username: "@thomasmuralist",
    image: "https://plus.unsplash.com/premium_photo-1730133770236-934c381e4684?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
    likes: "9.8k",
    comments: "8.6k",
    shares: "7.2k",
  },
  {
    id: 3,
    user: "Delta J.",
    username: "@thomasmuralist",
    image: "https://plus.unsplash.com/premium_photo-1734155859178-840154a6c11d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
    likes: "5.8k",
    comments: "7.6k",
    shares: "3.2k",
  },
];

const sellers = [
  {
    id: 1,
    user: "John Doe",
    username: "@johndoe",
    pimg: "https://randomuser.me/api/portraits/men/1.jpg",
    img: "https://images.unsplash.com/photo-1740905546458-2b0199785aa3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    user: "Emma Smith",
    username: "@emmasmith",
    pimg: "https://randomuser.me/api/portraits/women/2.jpg",
    img: "https://images.unsplash.com/photo-1740916856932-7b02aeca973b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    user: "Michael Brown",
    username: "@michaelbrown",
    pimg: "https://randomuser.me/api/portraits/men/3.jpg",
    img: "https://images.unsplash.com/photo-1740953669187-70139f77d1ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8https://source.unsplash.com/400x300/?product,gadgets",
  },
  {
    id: 4,
    user: "Sophia Johnson",
    username: "@sophiajohnson",
    pimg: "https://randomuser.me/api/portraits/women/4.jpg",
    img: "https://images.unsplash.com/photo-1735322122784-859d1445023d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    user: "David Williams",
    username: "@davidwilliams",
    pimg: "https://randomuser.me/api/portraits/men/5.jpg",
    img: "https://images.unsplash.com/photo-1735093661171-22af5a2ff4c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3Dhttps://source.unsplash.com/400x300/?product,automobile",
  },
  {
    id: 6,
    user: "Olivia Martinez",
    username: "@oliviamartinez",
    pimg: "https://randomuser.me/api/portraits/women/6.jpg",
    img: "https://images.unsplash.com/photo-1740560595023-15a496695e15?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    user: "William Anderson",
    username: "@williamanderson",
    pimg: "https://randomuser.me/api/portraits/men/7.jpg",
    img: "https://images.unsplash.com/photo-1740680209832-e67f86f1122f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1740680209832-e67f86f1122f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1740560595023-15a496695e15?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
    title: "Abstract Art Piece",
    price: "$249.99",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1735093661171-22af5a2ff4c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3Dhttps://source.unsplash.com/400x300/?product,automobile",
    title: "Colorful Mural",
    price: "$299.99",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1735322122784-859d1445023d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    title: "Creative Artwork",
    price: "$179.99",
    rating: "⭐⭐⭐⭐",
  },
];



export default function Dashboard({ onLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
  {/* Sidebar Toggle Button */}
  <button
    className="p-4 md:hidden text-xl"
    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  >
    {isSidebarOpen ? <FaTimes /> : <FaBars />}
  </button>

  {/* Sidebar */}
  <aside
    className={`fixed inset-y-0 left-0 bg-white p-4 shadow-lg w-64 transform ${
      isSidebarOpen ? "translate-x-0 z-50" : "-translate-x-full"
    } md:translate-x-0 transition-transform md:relative md:w-64`}
  >
    <h1 className="text-lg font-bold">LOGO</h1>
    <nav className="mt-6 space-y-4">
  <a href="#" className="flex items-center gap-2 p-2 font-medium text-gray-700">
    <FaHome /> Home
  </a>
  <a href="#" className="flex items-center gap-2 p-2 text-gray-500">
    <FaBell /> Notifications
  </a>
  <a href="#" className="flex items-center gap-2 p-2 text-gray-500">
    <FaShoppingCart /> Shop
  </a>
  <a href="#" className="flex items-center gap-2 p-2 text-gray-500">
    <FaBoxOpen /> Subscription
  </a>
  <a href="#" className="flex items-center gap-2 p-2 text-gray-500">
    <FaUser /> My Profile
  </a>
  <a href="#" onClick={onLogout} className="flex items-center gap-2 p-2 text-gray-500">
    <FaSignOutAlt /> Logout
  </a>
    </nav>
  </aside>

  {/* Main Content */}
  <main className="flex-1 px-4 sm:px-6 lg:px-8 py-4 max-w-7xl w-full lg:w-1/3 mx-auto">
  {/* Search Bar */}
  <div className="relative bg-white shadow-md rounded-lg lg:mb-4 mb-2 p-1">
    <input
      type="text"
      placeholder="Search here..."
      className="w-full py-3 pl-12 pr-10 border-none rounded-md outline-none text-sm sm:text-base"
    />
    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
    <FaEllipsisV className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 cursor-pointer" />
  </div>

  {/* Posts Section */}
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
    {posts.map((post) => (
      <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
        <div className="relative flex items-start space-x-3">
          <img src={post.image} alt="img" className="w-10 h-10 rounded-xl" />
          <div className="flex flex-col">
            <span className="font-bold">{post.user}</span>
            <span className="text-gray-500">{post.username}</span>
          </div>
          <FaEllipsisV className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 cursor-pointer" />
        </div>
        <p className="text-gray-600 mt-2">
          It is a long established fact that a reader will be distracted{" "}
          <span className="text-pink-500 cursor-pointer">Read more...</span>
        </p>
        <img
          src={post.image}
          alt="Mural"
          className="mt-2 rounded-md w-full aspect-[16/9] object-cover"
        />
        <div className="flex gap-4 mt-3 text-gray-600">
          <span className="flex items-center">
            <FaHeart className="mr-1" /> {post.likes}
          </span>
          <span className="flex items-center">
            <FaComment className="mr-1" /> {post.comments}
          </span>
          <span className="flex items-center">
            <FaShare className="mr-1" /> {post.shares}
          </span>
        </div>
      </div>
    ))}
  </div>

  {/* Horizontal Scrollable Section */}
  <div className="w-full mt-6">
    <h2 className="text-lg sm:text-xl font-bold mb-4">Featured Artwork</h2>
    <div className="flex overflow-x-auto space-x-4 p-2 custom-scrollbar">
      {products.map((product) => (
        <div
          key={product.id}
          className="min-w-[180px] sm:min-w-[220px] lg:min-w-[250px] bg-white shadow-lg rounded-lg p-4"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full aspect-square object-cover rounded-lg"
          />
          <h3 className="mt-2 text-sm sm:text-lg font-semibold">
            {product.title}
          </h3>
          <p className="text-gray-600">{product.price}</p>
          <p>{product.rating}</p>
        </div>
      ))}
    </div>
  </div>
</main>


  {/* Right Sidebar */}
  <aside className="w-full md:w-64 p-3 bg-white shadow-lg md:sticky md:top-0 md:mr-10">
    <Button className="w-full mb-4 bg-[#88C2BB] text-gray-900 font-medium p-3 rounded-2xl">
      Become a Seller
    </Button>
    <div className="w-full bg-gray-300 h-3 rounded-3xl"></div>
    <h2 className="font-bold mb-2">Artists</h2>
    <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
      {sellers.map((seller) => (
        <div key={seller.id} className="relative">
          {/* Image */}
          <img
            src={seller.img}
            alt={seller.user}
            className="rounded-md w-full h-52 object-cover"
          />

          {/* Overlay with gradient */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-24 rounded-b-md"></div>

          {/* User info */}
          <div className="absolute bottom-2 left-2 flex items-center space-x-3">
            <img
              src={seller.pimg}
              alt="profile"
              className="w-10 h-10 rounded-xl border border-white"
            />
            <div className="text-white">
              <span className="font-bold block">{seller.user}</span>
              <span className="text-gray-300 text-sm">{seller.username}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </aside>
</div>

  );
}
