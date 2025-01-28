"use client";

import { Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useDebounce } from "use-debounce";

interface SearchInputProps {
  defaultValue?: string;
}

export const SearchInput = ({ defaultValue = "" }: SearchInputProps) => {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);
  const [debouncedValue] = useDebounce(value, 500);

  const updateSearchParams = useCallback(
    (newValue: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if (newValue) {
        searchParams.set("search", newValue);
      } else {
        searchParams.delete("search");
      }

      router.replace(`?${searchParams.toString()}`, {
        scroll: false,
      });
    },
    [router]
  );

  useEffect(() => {
    updateSearchParams(debouncedValue);
  }, [debouncedValue, updateSearchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
    updateSearchParams("");
  };

  return (
    <Input
      isClearable={true}
      className="w-full max-w-lg"
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl bg-default-200/50 dark:bg-default/60 backdrop-blur-xl backdrop-saturate-200 hover:bg-default-200/70 dark:hover:bg-default/70 group-data-[focus=true]:bg-default-200/50 dark:group-data-[focus=true]:bg-default/60 !cursor-text",
        ],
      }}
      placeholder="Buscar una película..."
      radius="lg"
      startContent={
        <i className="icon-[tabler--search]" role="img" aria-hidden="true" />
      }
      value={value}
      onChange={handleInputChange}
      onClear={handleClear}
    />
  );
};
