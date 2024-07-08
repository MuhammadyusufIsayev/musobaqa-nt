"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import all from "@/app/images/all.svg";
import bundles from "@/app/images/bundls.svg";
import herbs from "@/app/images/herbs.svg";
import vegetables from "@/app/images/vegetables.svg";
import fruits from "@/app/images/fruits.svg";
import supplies from "@/app/images/suplies.svg";
import flowers from "@/app/images/flowers.svg";
import star from "@/app/images/star.svg";
import halfStar from "@/app/images/star-half-alt.svg";
import cart from "@/app/images/cart.svg"

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

const categoryIcons: { [key: string]: string } = {
  all,
  bundles,
  herbs,
  vegetables,
  fruits,
  supplies,
  flowers,
};

const HomeSection3: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>(
          "http://localhost:5000/categories"
        );
        setCategories(response.data);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = (): Product[] => {
    if (selectedCategory === "all") {
      return categories.flatMap((category) => category.products).slice(0, 6);
    }
    const category = categories.find(
      (category) => category.name === selectedCategory
    );
    return category ? category.products.slice(0, 6) : [];
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars)
          .fill(null)
          .map((_, index) => (
            <Image key={`full-${index}`} src={star} alt="star" width={20} height={20} />
          ))}
        {Array(halfStars)
          .fill(null)
          .map((_, index) => (
            <Image key={`half-${index}`} src={halfStar} alt="half star" width={20} height={20} />
          ))}
        {Array(emptyStars)
          .fill(null)
          .map((_, index) => (
            <Image key={`empty-${index}`} src={star} alt="empty star" width={20} height={20} style={{ opacity: 0.2 }} />
          ))}
      </>
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories: {error.message}</div>;

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between my-[60px]">
        <h2 className="text-[36px] font-bold">Our products.</h2>
        <button className="px-[33px] py-[11px] border-[1px] border-[#EFEFEF] rounded-lg text-[#359740] font-semibold">
          View all ({categories.flatMap((category) => category.products).length}
          )
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div
          className={`flex items-center gap-[16px] p-[20px] border-[2px] rounded-lg cursor-pointer transition-all duration-300 hover:border-[#35974014] ${
            selectedCategory === "all" ? "text-[#359740] border-[#359740]" : "border-[#EFEFEF]"
          }`}
          onClick={() => handleCategorySelect("all")}
        >
          <Image src={categoryIcons["all"]} alt="all" width={28} height={28} />
          <p>ALL</p>
        </div>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex items-center gap-[16px] p-[20px] border-[2px] rounded-lg cursor-pointer transition-all duration-300 hover:border-[#35974014] ${
              selectedCategory === category.name ? "text-[#359740] border-[#359740]" : "border-[#EFEFEF]"
            }`}
            onClick={() => handleCategorySelect(category.name)}
          >
            <Image
              src={categoryIcons[category.name.toLowerCase()]}
              alt={category.name}
              width={28}
              height={28}
            />
            <p>{category.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[30px] mt-[40px] justify-items-center">
        {filteredProducts().map((product: any) => (
          <div
            key={product.id}
            className="w-[350px] h-[512px] p-[28px] border-[2px] flex flex-col gap-[24px] border-[#EFEFEF] rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={290}
              height={290}
              className="rounded-lg object-cover"
            />
            <div className="flex flex-col gap-[4px]">
              <div className="stars flex items-center">
                {renderStars(product.rating)}
                <p className="text-[14px] font-light ml-[10px]">
                  {product.reviews}
                </p>
              </div>
              <h3 className="text-[16px] font-bold">
                {product.name.split(" ").slice(0, 8).join(" ")}
              </h3>
              <div className="flex pt-[8px] items-center justify-between">
                <p className="text-[28px] font-bold">
                  ${product.price} 
                </p>
                <div className="border-[1px] p-[13px] rounded-lg">
                  <Image src={cart} alt="cart" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection3;