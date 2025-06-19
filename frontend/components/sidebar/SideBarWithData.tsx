import SidebarWrapper from "@/components/sidebar/SideBarWrapper";
import { cookies } from "next/headers";
import api from "@/lib/api";
import { redirect } from "next/navigation";

export default async function SideBarWithData() {
  const token = (await cookies()).get("token")?.value;

  if (!token) redirect("/login");

  let user;
  try {
    const res = await api.get("/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    user = res.data.user;
  } catch (error) {
    console.error("Gagal ambil data user:", error);
    redirect("/login");
  }

  return <SidebarWrapper user={user} />;
}
