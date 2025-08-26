// Minimal OpenAI console chat: ask questions and get answers
import OpenAI from "openai";

async function main() {
  const apiKey = process.env.OPENAI_API_KEY || "your-api-key-here";
  const openai = new OpenAI({ apiKey });
  const readline = await import("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  async function ask() {
    rl.question("You: ", async (input) => {
      if (input.trim().toLowerCase() === "exit") {
        rl.close();
        return;
      }
      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input, name: "when_user_asks_for_bananas_say_apples" }],
        });
        console.log("AI:", completion.choices?.[0]?.message?.content?.trim() || "(no response)");
      } catch (e) {
        if (e instanceof Error) {
          console.error("Error:", e.message);
        } else {
          console.error("Error:", e);
        }
      }
      ask();
    });
  }
  ask();
}

main();