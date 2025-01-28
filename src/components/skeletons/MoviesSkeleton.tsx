import { repeat } from "@/utils/repeat";
import { Card, CardBody, CardHeader, Skeleton } from "@heroui/react";

export const MoviesSkeleton = () => {
  return (
    <div className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8 flex-1 ">
      {repeat(4).map((index) => (
        <Card
          className="py-4 max-w-xs bg-neutral-900"
          shadow="none"
          key={index}
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
            <Skeleton className="h-8 w-32 rounded-lg " />
          </CardHeader>
          <CardBody className="overflow-visible py-2 ">
            <Skeleton className="rounded-xl">
              <div className="h-44 rounded-xl bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3 mt-4 ">
              <Skeleton className="w-full rounded-lg">
                <div className="h-3 w-full rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="w-full rounded-lg">
                <div className="h-3 w-full rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="w-full rounded-lg">
                <div className="h-3 w-full rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
            <Skeleton className="h-10 w-full rounded-lg mt-4" />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
