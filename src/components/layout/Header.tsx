"use client";
import { Input } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (inputValue) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("search", inputValue);
        router.push(`?${params.toString()}`);
      }
      // console.log(inputValue);
    }, 1000);
  }, [inputValue]);

  return (
    <header className="bg-gray-800 text-white p-4 ">
      Header
      <Input
        isClearable
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        label="Search"
        placeholder="Type to search..."
        radius="lg"
        startContent={
          <i className="icon-[tabler--search]" role="img" aria-hidden="true" />
        }
        value={inputValue}
        onChange={handleInputChange}
      />
    </header>
  );
};
