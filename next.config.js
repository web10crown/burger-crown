const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async headers() {
    const headers = [];

    headers.push({
      headers: [
        {
          key: "X-Robots-Tag",
          value: "noindex",
        },
      ],
      source: "/:path*",
    });

    return headers;
  },
};

module.exports = nextConfig;
