import Hero from './components/home/Hero';
import Navbar from './components/home/Navbar';
import ProfileCard from './components/home/ProfileCard';

function App() {
  return (
    <div className='bg-gray-800'>
      <Navbar />
      <Hero />
      <ProfileCard />
    </div>
  );
}

export default App;
