import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Linkedin, X } from "lucide-react"; // Assuming you're using lucide-react for icons

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <MaxWidthWrapper className="flex justify-center py-8">
        <div className="flex space-x-6">
          {/* LinkedIn Link */}
          <Link href="https://www.linkedin.com/in/sollutin" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>

          {/* Twitter Link */}
          <Link href="https://twitter.com/sollutin" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400">
            <X className="h-6 w-6" />
            <span className="sr-only">X</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
