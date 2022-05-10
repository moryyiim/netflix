import { Link, useNavigate } from 'react-router-dom';
import Netflix from '../assets/netflix-logo.svg';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/signup');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex items-center justify-between px-2 md:px-6 z-[100] w-full absolute'>
      <Link to='/'>
        <img
          className='cursor-pointer w-24 md:w-32 lg:w-44'
          src={Netflix}
          alt='logo'
        />
      </Link>

      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4 text-sm md:text-base'>
              Account
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-2 py-1 text-sm md:text-base md:px-4 md:py-2 rounded cursor-pointer text-white hover:bg-red-800 ease-in-out duration-500'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4 text-sm md:text-base'>
              Sign In
            </button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-2 py-1 text-sm md:text-base md:px-4 md:py-2 rounded cursor-pointer text-white hover:bg-red-800 ease-in-out duration-500'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
