"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddFoodPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  // Upload image to ImgBB
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=00be87d64cf6c4e8ab1c8ae09300ba12`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (data.success) {
        setImagePreview(data.data.url);
        return data.data.url;
      } else {
        alert("Image upload failed!");
        return "";
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong during image upload!");
      return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    // Handle image upload
    const imageFile = form.image.files[0];
    let uploadedImageUrl = imagePreview;
    if (imageFile) {
      uploadedImageUrl = await handleImageUpload(imageFile);
    }

    const foodData = {
      title: form.name.value,
      slug: form.name.value.trim().toLowerCase().replace(/\s+/g, "-"),
      price: parseFloat(form.price.value),
      category: form.category.value,
      image: uploadedImageUrl || "",
      description: form.description.value,
      ingredients: form.ingredients.value.split(",").map((i) => i.trim()),
      spicyLevel: form.spicyLevel.value,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(foodData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Food item added successfully!");
        form.reset();
        setImagePreview("");
      } else {
        setMessage(data.message || "Failed to add food item.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#49111c] via-[#6e0d25] to-[#9e2a2b] px-4">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20">
        <h1 className="text-3xl font-extrabold text-white text-center mb-6 drop-shadow-md">
          Add New Food Item
        </h1>

        {message && <p className="mb-4 text-sm text-center text-green-300">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Food Name */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Food Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Price</label>
            <input
              name="price"
              type="number"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Category</label>
            <input
              name="category"
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Food Image</label>
            <input
              name="image"
              type="file"
              accept="image/*"
              className="w-full text-white"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-3 w-48 h-48 object-cover rounded-lg border border-white/30"
              />
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Description</label>
            <textarea
              name="description"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Ingredients */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Ingredients (comma separated)</label>
            <input
              name="ingredients"
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            />
          </div>

          {/* Spicy Level */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Spicy Level</label>
            <select
              name="spicyLevel"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            >
              <option value="Mild">Mild</option>
              <option value="Medium">Medium</option>
              <option value="Hot">Hot</option>
              <option value="Extra Hot">Extra Hot</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 font-semibold text-white text-lg shadow-lg hover:shadow-pink-400/50 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Food Item"}
          </button>
        </form>
      </div>
    </div>
  );
}
