import { Input } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputEmpty = () => {
    setInputValue("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputValue) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("search", inputValue);
        router.push(`?${params.toString()}`);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [inputValue]);

  return (
    <Input
      isClearable={true}
      className="max-w-[500px] w-full "
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
      placeholder="Buscar una película..."
      radius="lg"
      startContent={
        <i className="icon-[tabler--search]" role="img" aria-hidden="true" />
      }
      value={inputValue}
      onChange={handleInputChange}
      onClear={handleInputEmpty}
    />
  );
};
