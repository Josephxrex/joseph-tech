import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['josephxrex-fl.s3.us-east-1.amazonaws.com','www.w3schools.com','cdn.pixabay.com'],
  },
};

export default withContentlayer(nextConfig);
