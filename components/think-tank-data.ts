export const articles = [
  {
    slug: "clarity-before-capability",
    category: "Digital strategy",
    image: "/images/think-tank-hero.jpg",
    title: "Clarity before capability",
    summary:
      "A useful digital project begins with the change you want to make, not a checklist of features.",
    intro:
      "It is tempting to begin a project by naming the tool: a new website, an app, a campaign, or an AI workflow. But the tool is only useful when it is connected to a real need.",
    sections: [
      {
        heading: "Start with the friction",
        body:
          "Ask where people get stuck, what work takes longer than it should, and which questions keep returning. These are practical clues. They describe the experience today without prematurely prescribing what the solution must be.",
      },
      {
        heading: "Name the change",
        body:
          "A strong brief describes a meaningful change in behavior or outcome. Perhaps customers should understand an offer sooner, a team should spend less time repeating a task, or a service should be easier to find. The desired change gives the team a way to evaluate ideas.",
      },
      {
        heading: "Choose the smallest useful next step",
        body:
          "Once the problem is clear, the response might be a focused content update, a redesigned journey, an integration, or a larger product. Start with the smallest step that can test the direction and teach you something useful.",
      },
    ],
  },
  {
    slug: "websites-are-products",
    category: "Web & design",
    image: "/images/services-hero.jpg",
    title: "A website is a product, not a poster",
    summary:
      "A website does more than represent a brand. It helps people understand, decide, and move forward.",
    intro:
      "A visual identity can make a first impression, but a website has a longer job to do. It should help someone orient themselves, find what matters, and choose a sensible next step.",
    sections: [
      {
        heading: "Design for a real decision",
        body:
          "Every audience arrives with a different question. A useful page anticipates that question and answers it with direct language, clear structure, and evidence that is relevant to the decision at hand.",
      },
      {
        heading: "Treat content as part of the interface",
        body:
          "Navigation, headings, and calls to action are not decoration. They are the interface people use to understand the offer. Content and design are strongest when they are planned together rather than assembled at the end.",
      },
      {
        heading: "Keep learning after launch",
        body:
          "A launch is a starting point. Feedback, search behavior, support requests, and analytics can reveal where people are confused or where the experience can be made simpler. A website should be able to improve as the business learns.",
      },
    ],
  },
  {
    slug: "useful-ai-begins-with-work",
    category: "AI & automation",
    image: "/images/about-hero.jpg",
    title: "Useful AI begins with the work",
    summary:
      "The most grounded AI conversations start with a workflow and the people doing it.",
    intro:
      "New technology can make a process faster, but speed alone does not make a process valuable. Before choosing an AI tool, understand the people, information, and decisions involved in the work.",
    sections: [
      {
        heading: "Map the current workflow",
        body:
          "Follow a task from beginning to end. Notice where information is copied, reviewed, delayed, or lost. Include the exceptions and judgment calls; they often matter more than the routine steps.",
      },
      {
        heading: "Decide what should stay human",
        body:
          "Some work benefits from automation; other work depends on context, care, or accountability. Make those boundaries explicit. A human review step can be an essential part of a safe and trustworthy system.",
      },
      {
        heading: "Test a specific improvement",
        body:
          "Choose a bounded use case and define what a better outcome means before you build. Test with realistic examples, learn where the system falls short, and expand only when the change is genuinely useful to the people doing the work.",
      },
    ],
  },
] as const;
