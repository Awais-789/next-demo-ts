import { Inter } from 'next/font/google';
import { Carousel } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div className={`${inter.className} bg-secondary text-primary`}>
      <div className="container mx-auto py-16">
        <div className="bg-white rounded-lg shadow-md">
          <Carousel>
            <div className="flex items-center justify-between px-6 py-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">We Always Provide Healthy Products</h2>
                <p className="text-lg mb-6">Browse our wide selection of fresh, nutritious foods.</p>
                <Button className="bg-accent text-white px-6 py-2 rounded-lg">Explore Now</Button>
              </div>
              <img src="/healthy-products.jpg" alt="Healthy Products" className="w-1/2 rounded-lg shadow-md" />
            </div>
            <div className="flex items-center justify-between px-6 py-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Discover New Flavors</h2>
                <p className="text-lg mb-6">Our diverse product range has something for everyone.</p>
                <Button className="bg-accent text-white px-6 py-2 rounded-lg">Browse Now</Button>
              </div>
              <img src="/new-flavors.jpg" alt="New Flavors" className="w-1/2 rounded-lg shadow-md" />
            </div>
            <div className="flex items-center justify-between px-6 py-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Healthy Living Starts Here</h2>
                <p className="text-lg mb-6">Elevate your wellness with our premium products.</p>
                <Button className="bg-accent text-white px-6 py-2 rounded-lg">Shop Now</Button>
              </div>
              <img src="/healthy-living.jpg" alt="Healthy Living" className="w-1/2 rounded-lg shadow-md" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;