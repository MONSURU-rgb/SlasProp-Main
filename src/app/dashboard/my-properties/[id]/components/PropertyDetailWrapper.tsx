"use client";

import { axiosInstance } from "@/axios";
import { DetailsBox } from "@/components/DetailsBox";
import { useQuery } from "@tanstack/react-query";

function PropertyDetailWrapper({ id }: { id: string }) {
  const { data } = useQuery({
    queryKey: ["properties", id],
    queryFn: () => axiosInstance.get(`/properties/${id}`),
  });

  return (
    <div>
      {" "}
      <DetailsBox property={data?.data.data as Property} />
    </div>
  );
}

export default PropertyDetailWrapper;
