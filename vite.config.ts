import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
  define: {
    "import.meta.env.BUILD_TIME": new Date(),
  },
};
