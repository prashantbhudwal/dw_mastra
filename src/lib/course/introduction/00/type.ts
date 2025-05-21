type generateFunction = ({
  model,
  text,
}: {
  model: "openai" | "google";
  text: string;
}) => Promise<string>;
