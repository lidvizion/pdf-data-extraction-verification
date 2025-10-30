const nextConfig = {
  env: {},
};

// Map REACT_APP_* variables so they're available in the browser
for (const key of Object.keys(process.env)) {
  if (key.startsWith("REACT_APP_")) {
    nextConfig.env[key] = process.env[key]; // keep original name
  }
}

module.exports = nextConfig;