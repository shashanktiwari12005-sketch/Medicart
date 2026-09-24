function Navbar() {
    return (
        <nav>

            
            <div className="hidden md:flex items-center gap-5 px-5 py-4 bg-white shadow-md">

                {/* Logo */}
                <h1 className="text-3xl font-bold cursor-pointer whitespace-nowrap">
                    <span className="text-black-600">Medi</span>
                    <span className="text-primary-green-500">cart</span>
                    
                </h1>


                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        className="text-gray-700 font-medium hover:text-primary-green-600 transition"
                    >
                        Medicines
                    </a>

                    <a
                        href="#"
                        className="text-gray-700 font-medium hover:text-blue-600 transition"
                    >
                        Categories
                    </a>

                    <a
                        href="#"
                        className="text-gray-700 font-medium hover:text-blue-600 transition"
                    >
                        Offers
                    </a>

                    <a
                        href="#"
                        className="text-gray-700 font-medium hover:text-blue-600 transition"
                    >
                        Health Tips
                    </a>
                </div>


                {/* Search Box */}
                <div className="flex items-center flex-1 max-w-md">
                    <input
                        type="text"
                        placeholder="Search Medicines"
                        className="w-full border border-gray-300 rounded-l-lg px-3 py-1 outline-none focus:border-blue-500"
                    />

                    <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                        Search
                    </button>
                </div>


                {/* Wishlist & Cart */}
                <div className="flex items-center gap-3">
                    <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition whitespace-nowrap">
                        ❤️ Wishlist
                    </button>

                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition whitespace-nowrap">
                        🛒 Cart (0)
                    </button>
                </div>


                {/* Account */}
                <div className="relative group">

                    <button className="bg-gray-100 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition whitespace-nowrap">
                        👤 Account
                    </button>


                    {/* Account Dropdown */}
                    <div className="hidden group-hover:flex flex-col absolute right-0 top-full mt-2 bg-white shadow-xl rounded-lg w-52 py-2 z-50 border border-gray-100">

                        <a
                            href="#"
                            className="px-4 py-3 hover:bg-gray-100 transition"
                        >
                                        📦 My Order
                        </a>

                        <a
                            href="#"
                            className="px-4 py-3 hover:bg-gray-100 transition"
                        >
                                     📄 My Prescription
                        </a>

                        <a
                            href="#"
                            className="px-4 py-3 hover:bg-gray-100 transition"
                        >
                                       📍 My Addresses
                        </a>

                        <a
                            href="#"
                            className="px-4 py-3 hover:bg-gray-100 transition"
                        >
                            👤 My Profile
                        </a>

                        <a
                            href="#"
                            className="px-4 py-3 text-red-500 hover:bg-red-50 transition"
                        >
                            🚪 Logout
                        </a>

                    </div>

                </div>

            </div>


            {/* ================= MOBILE NAVBAR ================= */}
            <div className="flex md:hidden flex-col px-4 py-3 bg-white shadow-md">

                {/* Mobile Top Row */}
                <div className="flex items-center justify-between">

                    <h1 className="text-2xl font-bold cursor-pointer">
                        <span className="text-black-600">Medi</span>
                        <span className="text-primary-green-500">cart</span>
                    </h1>


                    <div className="flex items-center gap-3">

                        <button className="text-xl">
                            🛒
                        </button>

                        <button className="text-2xl">
                            ☰
                        </button>

                    </div>

                </div>


                {/* Mobile Search */}
                <div className="flex mt-3">

                    <input
                        type="text"
                        placeholder="Search medicines"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-primary-green-500"
                    />

                </div>

            </div>

        </nav>
    );
}

export default Navbar;