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
          value: "index",
        },
      ],
      source: "/:path*",
    });

    return headers;
  },
};

module.exports = nextConfig;
