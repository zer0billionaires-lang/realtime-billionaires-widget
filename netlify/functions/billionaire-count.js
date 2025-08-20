// netlify/functions/billionaire-count.js
export const handler = async () => {
  try {
    // Call Forbes API – adjust this URL to the one you have access to
    const res = await fetch("https://forbes-billionaires-api.p.rapidapi.com/billionaires", {
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "forbes-billionaires-api.p.rapidapi.com"
      }
    });

    if (!res.ok) {
      return { statusCode: res.status, body: JSON.stringify({ error: "Upstream error" }) };
    }

    const data = await res.json();
    // Depending on the endpoint, adjust this:
    const count = Array.isArray(data) ? data.length : (data?.count ?? 0);

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ billionaire_count: count })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};

