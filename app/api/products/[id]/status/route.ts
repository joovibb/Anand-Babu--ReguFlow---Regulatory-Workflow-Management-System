import { prisma } from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const formData = await req.formData();
  const status = formData.get("status") as string;

  await prisma.product.update({
    where: { id },
    data: { status },
  });

  return Response.redirect("http://localhost:3000/products");
}