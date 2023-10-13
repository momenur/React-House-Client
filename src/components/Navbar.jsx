import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="px-3 shadow-md sm:px-0 bg-slate-200">
            <div className="flex items-center justify-between py-3 mx-auto max-w-7xl">
                <Link to='/'>
                    <h1 className="font-bold text-md sm:text-2xl">
                        <span className="text-slate-500">React</span>
                        <span className="text-slate-700">House</span>
                    </h1>
                </Link>
                <form className="flex items-center p-3 rounded-lg text-md bg-slate-100">
                    <input type="text" name="" id="" placeholder="Search..." className="w-24 bg-transparent focus:outline-none sm:w-64" />
                    <FaSearch className='text-slate-600' />
                </form>
                <ul className='flex gap-4 text-slate-700'>
                    <Link to='/'>
                        <li className='hidden sm:inline hover:text-black hover:underline'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline hover:text-black hover:underline'>About</li>
                    </Link>
                    <Link to='/sign-in'>
                        <li className='hover:text-black hover:underline'>Sign in</li>
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;