"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type ImageType = {
  name: string;
};
// https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/680ae5dd-9e3f-4252-8906-d4cbf54a525c/8db9837a-2422-4e36-978d-3ead116589f5
const CDN =
  "https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/";
//  CDN + userId + "/" + image.name
const UploadImage = () => {
  const supabase = createClientComponentClient();
  const [userId, setUserId] = useState("");
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const user = data.session?.user.id;

        if (user) {
          setUserId(user);
        } else {
          setUserId("");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userId) {
      getImages();
    }
  }, [userId]);

  const getImages = async () => {
    const { data, error } = await supabase.storage
      .from("images")
      .list(userId + "/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
    if (data !== null) {
      setImages(data);
    } else {
      alert("Error loading images");
      console.log(error);
    }
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      if (file) {
        const { data, error } = await supabase.storage
          .from("images")
          .upload(userId + "/" + uuidv4(), file);

        if (data) {
          getImages();
        } else {
          console.log(error);
        }
      } else {
        console.error("No file selected");
      }
    }
  };

  return (
    <div>
      <form>
        <input type="file" name="image" onChange={(e) => uploadImage(e)} />
        <button type="submit">Upload image</button>
      </form>
      <h3>Your Images</h3>
      {images.map((image) => {
        return (
          <img
            src={CDN + userId + "/" + image.name}
            alt="image"
            key={image.name}
            className="w-16 h-16"
          />
        );
      })}
    </div>
  );
};

export default UploadImage;
