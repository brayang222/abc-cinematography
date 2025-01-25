import { useLikesStorage } from "@/store/likesStore";
import { Button } from "@heroui/react";

export function LikeButton({ id }: { id: number }) {
  const { likeIds, setLike, removeLike } = useLikesStorage();

  const isLiked = likeIds.includes(id);

  const handleLike = () => {
    if (isLiked) {
      removeLike(id);
    } else {
      setLike(id);
    }
  };

  return (
    <div className="absolute top-5 right-5 z-50">
      <Button
        onPress={handleLike}
        isIconOnly
        radius="full"
        className="bg-transparent hover:bg-[#500616b6]"
      >
        {isLiked ? (
          <i
            className="icon-[icon-park-solid--like] text-[#e11d48] text-2xl cursor-pointer"
            role="img"
            aria-hidden="true"
          />
        ) : (
          <i
            className="icon-[icon-park-outline--like] text-[#e11d48] text-2xl cursor-pointer"
            role="img"
            aria-hidden="true"
          />
        )}
      </Button>
    </div>
  );
}
