import Link from "next/link";

const BackLink = ({ label, path }: { label: string; path: string }) => {
  return (
    <Link href={path} className="text-brand-600 text-sm mt-2 py-0">
      {label}
    </Link>
  );
};

export default BackLink;
