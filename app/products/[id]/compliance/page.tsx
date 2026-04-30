import { prisma } from "@/lib/prisma";

export default async function CompliancePage({
  params,
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: {
      documents: true,
    },
  });

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  const requirements = await prisma.requirement.findMany({
    where: { country: product.country || "" },
  });

  const uploadedDocs = product.documents.map((doc) => doc.name);

  const missingDocs = requirements.filter(
    (req) => !uploadedDocs.includes(req.document)
  );

  const isCompliant = requirements.length > 0 && missingDocs.length === 0;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Compliance Check</h1>

      <div className="mt-6">
        <p>
          <strong>Product:</strong> {product.name}
        </p>
        <p>
          <strong>Country:</strong> {product.country || "Not set"}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold">Status</h2>
        {isCompliant ? (
          <p className="text-green-600 font-semibold">✅ Compliant</p>
        ) : (
          <p className="text-red-600 font-semibold">❌ Missing Documents</p>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Required Documents</h2>
        {requirements.length === 0 ? (
          <p>No requirements found for this country.</p>
        ) : (
          <ul className="list-disc ml-6">
            {requirements.map((req) => (
              <li key={req.id}>{req.document}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Uploaded Documents</h2>

        <a
          href={`/products/${product.id}/documents`}
          className="inline-block mt-3 mb-4 bg-black text-white px-4 py-2 rounded"
        >
          Add Document
        </a>

        {product.documents.length === 0 ? (
          <p>No documents uploaded.</p>
        ) : (
          <ul className="list-disc ml-6">
            {product.documents.map((doc) => (
              <li key={doc.id}>{doc.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Missing Documents</h2>
        {missingDocs.length === 0 ? (
          <p className="text-green-600">No missing documents.</p>
        ) : (
          <ul className="list-disc ml-6 text-red-600">
            {missingDocs.map((req) => (
              <li key={req.id}>{req.document}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}