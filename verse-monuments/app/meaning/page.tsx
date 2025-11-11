import { promises as fs } from "fs";
import path from "path";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "The Meaning — RIP NYC Monuments",
  description: "The Lennon story. Why these monuments exist, what they mean, and what remains.",
});

export default async function MeaningPage() {
  const filePath = path.join(process.cwd(), "data", "meaning.md");
  const content = await fs.readFile(filePath, "utf8");

  // Simple markdown parser for basic formatting
  const parseMarkdown = (text: string) => {
    // Split into sections by horizontal rules
    const sections = text.split(/^---$/gm);

    return sections.map((section, idx) => {
      const lines = section.trim().split("\n");
      const elements: React.ReactElement[] = [];

      lines.forEach((line, lineIdx) => {
        // Heading
        if (line.startsWith("# ")) {
          elements.push(
            <h1
              key={`${idx}-${lineIdx}`}
              className="text-4xl md:text-5xl font-unifraktur mb-8"
            >
              {line.replace("# ", "")}
            </h1>
          );
        }
        // Blockquote
        else if (line.startsWith("> ")) {
          elements.push(
            <blockquote
              key={`${idx}-${lineIdx}`}
              className="border-l-2 border-white/30 pl-6 italic text-ash my-6"
            >
              {line.replace("> ", "")}
            </blockquote>
          );
        }
        // List item
        else if (line.startsWith("- ")) {
          elements.push(
            <li key={`${idx}-${lineIdx}`} className="ml-6 mb-2">
              {line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}
            </li>
          );
        }
        // Regular paragraph
        else if (line.trim()) {
          // Replace **text** with <strong>text</strong>
          const formattedLine = line.replace(
            /\*\*(.*?)\*\*/g,
            '<strong class="text-white font-medium">$1</strong>'
          );

          elements.push(
            <p
              key={`${idx}-${lineIdx}`}
              className="mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formattedLine }}
            />
          );
        }
      });

      return (
        <div key={idx} className="mb-12">
          {elements}
        </div>
      );
    });
  };

  return (
    <article className="max-w-[72rem] mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-invert prose-lg max-w-none text-ash">
          {parseMarkdown(content)}
        </div>
      </div>
    </article>
  );
}
