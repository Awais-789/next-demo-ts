import React from 'react'
import Header from '@/app/header/header'
import Footer from '../footer/footer'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Carousel } from '@/components/ui/carousel'

const page = () => {

  return (
    <div>
      <Header />
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/fruits.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            We Always Provide
            <br />
            Healthy Products
          </h1>
          <div className="flex items-center max-w-md mx-auto bg-white rounded-lg">
            <Input
              type="search"
              placeholder="What are you looking for..."
              className="border-0 focus-visible:ring-0"
            />
            <Button size="icon" className="rounded-l-none">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}

      {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
        {[
          { label: "Fruits", icon: "🍉" },
          { label: "Vegetables", icon: "🥬" },
          { label: "Meat", icon: "🥩" },
          { label: "Seafood", icon: "🦀" },
          { label: "Snacks", icon: "🍟" },
          { label: "Beverages", icon: "🥤" },
          { label: "Frozen", icon: "❄️" },
          { label: "Bread & Tortilla", icon: "🍞" },
          { label: "Household", icon: "🏠" },
        ].map((category, index) => (
          <button
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-primary"
          >
            <span>{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </div> */}
      <Carousel>
        <div className="flex flex-nowrap gap-4">
          {[
            { label: "Fruits", icon: "🍉" },
            { label: "Vegetables", icon: "🥬" },
            { label: "Meat", icon: "🥩" },
            { label: "Seafood", icon: "🦀" },
            { label: "Snacks", icon: "🍟" },
            { label: "Beverages", icon: "🥤" },
            { label: "Frozen", icon: "❄️" },
            { label: "Bread & Tortilla", icon: "🍞" },
            { label: "Household", icon: "🏠" },
          ].map((category, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-primary flex-shrink-0"
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </Carousel>

      <section className="container mx-auto py-8 px-4 flex justify-between">
        <h2 className="text-primary text-2xl font-bold mb-4">Smart Choices</h2>
        <Carousel>
          <div className="flex gap-4">
            {[
              {
                title: "Italian Pizza",
                description: "Product description is going here to describe about the product.",
                image: "/Group-207.png",
              },
              {
                title: "Perfect Egg Dish",
                description: "Product description is going here to describe about the product.",
                image: "/Group-208.png",
              },
              {
                title: "Masala Chicken Curry",
                description: "Product description is going here to describe about the product.",
                image: "/Group-209.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-secondary rounded-lg shadow-lg w-72 h-48 flex-shrink-0 overflow-hidden"
              >
                <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  <p className="text-white text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Carousel>
      </section>

      {/* Featured Section */}
      <section className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-primary text-2xl font-bold">Featured</h2>
          <a href="/featured" className="text-primary hover:text-accent">
            See more →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 text-center"
            >
              <img
                src={`product-${index + 1}.jpg`}
                alt={`Product ${index + 1}`}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-primary font-bold">Product Name</h3>
              <p className="text-primary">$50</p>
              <button className="mt-4 bg-accent text-primary px-4 py-2 rounded-lg">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Hygienic Foods Section */}
      <section className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-primary text-2xl font-bold">Hygienic Foods</h2>
          <a href="/hygienic-foods" className="text-primary hover:text-accent">
            See more →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 text-center"
            >
              <img
                src={`food-${index + 1}.jpg`}
                alt={`Food ${index + 1}`}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-primary font-bold">Food Name</h3>
              <p className="text-primary">$50</p>
              <button className="mt-4 bg-accent text-primary px-4 py-2 rounded-lg">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-8 px-4">
        <div className="relative bg-primary text-white rounded-lg shadow-md overflow-hidden h-60 flex items-center justify-between p-8">
          <div>
            <h2 className="text-3xl font-bold">For the selected products</h2>
            <p className="text-lg">Get Discount up to</p>
            <h3 className="text-4xl font-bold mt-2">50% Off</h3>
            <button className="mt-4 bg-accent text-primary px-6 py-2 rounded-lg font-medium">
              See more →
            </button>
          </div>
          <img
            src="/hero-image.jpg" // Replace with actual image path
            alt="Discount Offer"
            className="w-2/5 rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Hygienic Foods Section */}
      <section className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-primary text-2xl font-bold">Hygienic Foods</h2>
          <a href="/hygienic-foods" className="text-primary hover:text-accent">
            See more →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={`/food-${index + 1}.jpg`} // Replace with actual image paths
                alt={`Food ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-primary font-bold">Product Name</h3>
              <p className="text-primary">$50</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <button className="bg-secondary px-2 py-1 rounded">-</button>
                  <span className="text-primary">1</span>
                  <button className="bg-secondary px-2 py-1 rounded">+</button>
                </div>
                <button className="bg-accent text-primary px-4 py-2 rounded-lg">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="container mx-auto py-8 px-4">
        <div className="flex justify-center gap-8 bg-accent py-4 rounded-lg">
          <img
            src="/brand-coca-cola.svg"
            alt="Coca-Cola"
            className="h-12"
          />
          <img
            src="/brand-chilli-beans.svg"
            alt="Chilli Beans"
            className="h-12"
          />
          <img
            src="/brand-nestle.svg"
            alt="Nestle"
            className="h-12"
          />
          <img
            src="/brand-pizza-hut.svg"
            alt="Pizza Hut"
            className="h-12"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default page
