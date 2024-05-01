import { cn } from '@/lib/utils';
import HomeCalender from './homeCalender/HomeCalender';
import HomeGallery from './homeGallery/HomeGallery';
import HomeMap from './homeMap/HomeMap';
import Jumbotron from './jumbotron/Jumbotron';

const Home = () => {
  return (
    <div className={cn('w-full h-auto')}>
      <Jumbotron />
      <HomeMap />
      <HomeCalender />
      <HomeGallery />
    </div>
  );
};

export default Home;
