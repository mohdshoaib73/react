function Header(){
    return (
        <div className="header">
            <img className='logo' src="https://images.indianexpress.com/2021/01/myntra.png?w=640" height="60px" width="80px"/>
            <div className="nav-buttons">
                <button>Men</button>
                <button>Women</button>
                <button>Kids</button>
                <button>Home</button>
                <button>GenZ</button>
                <button>Beauty</button>
            </div>
            <input type="text" placeholder="Search for products, brands and more"/>
             <div className="user-actions">
                <button>Profile</button>
                <button>Wishlist</button>
                <button>Bag</button>
            </div>
        </div>

       
    )
}
export default Header;