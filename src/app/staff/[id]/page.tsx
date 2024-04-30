"use client";

import { getStaff } from "@/components/features/staff/staff-actions";
import StaffForm, {
  staffFormSchema,
} from "@/components/features/staff/staff-form";
import { useEffect, useState } from "react";
import { z } from "zod";

export default function Page({ params }: { params: { id: number } }) {
  const [staffData, setStaffData] = useState<z.infer<typeof staffFormSchema>>();

  useEffect(() => {
    const fetchSt = async () => {
      const res = await getStaff(params.id);
      console.log(res);
      setStaffData(res.data);
    };

    fetchSt();
  }, []);

  return (
    <div>
      <StaffForm></StaffForm>
    </div>
  );
}
