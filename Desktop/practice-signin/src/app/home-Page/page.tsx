import React from 'react'
import Header from '@/app/header/header'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import Footer from '../footer/footer'

const page = () => {

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-4">
        {/* Hero Section */}
        <div className="flex flex-col text-center lg:text-left gap-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            We Always Provide
            <br />
            Healthy Products
          </h1>
          <div className="relative mt-4 w-full lg:max-w-md">
            <input
              type="text"
              placeholder="What are you looking for..."
              className="w-full px-4 py-2 border border-secondary rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent px-4 py-2 text-primary rounded-full"
            >
              🔍
            </button>
          </div>
        </div>
      </div>

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
      <ScrollArea>
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
      </ScrollArea>

      <section className="container mx-auto py-8 px-4">
        <h2 className="text-primary text-2xl font-bold mb-4">Smart Choices</h2>
        <ScrollArea>
          <div className="flex gap-4">
            {[
              {
                title: "Italian Pizza",
                description: "Product description is going here to describe about the product.",
                image: "pizza.jpg", // Replace with image paths
              },
              {
                title: "Perfect Egg Dish",
                description: "Product description is going here to describe about the product.",
                image: "egg.jpg",
              },
              {
                title: "Masala Chicken Curry",
                description: "Product description is going here to describe about the product.",
                image: "curry.jpg",
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
        </ScrollArea>
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
