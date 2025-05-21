async function generateWithFetch() {
  const res = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      input: [
        {
          role: "user",
          content: "Write a 50 word story about Katy the cat from Connecticut.",
        },
      ],
    }),
  });

  const data = await res.json();
  
  console.log("😺", data.output[0].content[0].text);
}

generateWithFetch();
