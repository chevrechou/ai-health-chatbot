export const QUESTIONS = [
  {
    id: 1,
    type: "bot",
    content:
      "What is the main focus of your AI healthcare research, and how is it succinctly described in your title?",
  },
  {
    id: 2,
    type: "bot",
    content:
      "What keywords have you chosen for your title to ensure it captures the essence of your AI healthcare research?",
  },
  {
    id: 3,
    type: "bot",
    content:
      "Please list all contributing authors, highlighting any expertise in healthcare, AI, or related fields.",
  },
  {
    id: 4,
    type: "bot",
    content:
      "For each author, what specific role did they play in the research project, and can you provide a brief biography highlighting each author's expertise in AI and healthcare?",
  },
  {
    id: 5,
    type: "bot",
    content:
      "What are the affiliations of each author, especially noting any healthcare institutions, AI research centers, or interdisciplinary collaborations involved?",
  },
  {
    id: 6,
    type: "bot",
    content:
      "What healthcare problem does your AI research aim to address, and how does your abstract concisely convey the novelty and significance of your research in the healthcare domain?",
  },
  {
    id: 7,
    type: "bot",
    content:
      "What is the broader healthcare context of your research topic, and what motivated the choice of your specific research question or hypothesis in the context of AI in healthcare?",
  },
  {
    id: 8,
    type: "bot",
    content:
      "What specific healthcare challenge or problem does your AI research address, and why is this AI research important for healthcare?",
  },
  {
    id: 9,
    type: "bot",
    content:
      "Can you provide a detailed explanation of the current state of healthcare that your research aims to improve or innovate?",
  },
  {
    id: 10,
    type: "bot",
    content:
      "What are the objectives of your AI research in the healthcare domain, and can you outline the structure of your report, emphasizing its relevance to healthcare?",
  },
  {
    id: 11,
    type: "bot",
    content:
      "What are the key sources you have reviewed related to AI applications in healthcare, and can you discuss any conflicting findings or theories in the existing literature?",
  },
  {
    id: 12,
    type: "bot",
    content:
      "How does your work differ from or build upon these existing studies in healthcare AI, and what gaps in healthcare AI does your study aim to address?",
  },
  {
    id: 13,
    type: "bot",
    content:
      "How does your research build on the most recent advancements in AI technologies for healthcare applications?",
  },
  {
    id: 14,
    type: "bot",
    content:
      "What specific AI research design did you choose for the healthcare application, and why, including detailed information on the datasets used, size, source, and any preprocessing steps?",
  },
  {
    id: 15,
    type: "bot",
    content:
      "Describe the healthcare data or patient samples used in your study, including how they were selected while ensuring data privacy and ethical considerations.",
  },
  {
    id: 16,
    type: "bot",
    content:
      "What AI tools, algorithms, or instruments were employed in your healthcare research, and can you elaborate on the choice of AI models or algorithms for your study?",
  },
  {
    id: 17,
    type: "bot",
    content:
      "How was the data analyzed, how do these methods comply with healthcare regulations and ethical standards, and describe any pilot studies or preliminary experiments conducted?",
  },
  {
    id: 18,
    type: "bot",
    content:
      "What are the main findings of your study in the context of healthcare improvement or patient outcomes, including a detailed breakdown of the results?",
  },
  {
    id: 19,
    type: "bot",
    content:
      "How do these findings relate to your initial objectives in healthcare AI research, and how did the AI model perform in real-world healthcare settings or simulations?",
  },
  {
    id: 20,
    type: "bot",
    content:
      "How do your findings contribute to the field of healthcare AI, and can you discuss any unexpected findings and their potential implications?",
  },
  {
    id: 21,
    type: "bot",
    content:
      "Compare your results with previous healthcare AI studies, noting any advancements or discrepancies, and discuss the ethical considerations and potential biases in AI applications within healthcare.",
  },
  {
    id: 22,
    type: "bot",
    content:
      "What are the practical challenges in implementing your AI solution in healthcare settings, and how can they be overcome, including the limitations of your study?",
  },
  {
    id: 23,
    type: "bot",
    content:
      "Summarize the key contributions of your AI research to healthcare, including the broader implications for the future of AI in healthcare.",
  },
  {
    id: 24,
    type: "bot",
    content:
      "Discuss the practical implications of your study for healthcare providers, policymakers, or technology developers, and propose a roadmap for future research building on your findings.",
  },
  {
    id: 25,
    type: "bot",
    content:
      "List all sources cited, with a focus on healthcare AI literature, following ACM guidelines, and are there any seminal works or key references that have significantly influenced your research approach?",
  },
  {
    id: 26,
    type: "bot",
    content:
      "Include any supplementary material, such as detailed AI model specifications, ethical approval documents, or extended data analysis relevant to healthcare, and detailed technical appendices for peer review and replication purposes.",
  },
  {
    id: 27,
    type: "bot",
    content:
      "Detail the process for obtaining ethical approval for your study and describe the measures taken to ensure the privacy and security of healthcare data used in your research, including the process for de-identifying patient data.",
  },
  {
    id: 28,
    type: "bot",
    content:
      "List the different disciplines involved in your research and describe how each contributed to the study, detailing the nature of the collaboration between AI technologists and healthcare professionals.",
  },
  {
    id: 29,
    type: "bot",
    content:
      "What specific software, programming languages, and tools were used in your research, why were they chosen, and can you describe any custom solutions or innovations developed?",
  },
  {
    id: 30,
    type: "bot",
    content:
      "Discuss the potential for scaling your AI solution and its adaptability to different healthcare settings or populations, and how have stakeholders been involved in your research?",
  },
];

export interface Message {
  supportFileSubmission?: boolean;
  id?: number;
  type?: "bot" | "user" | string;
  content?: string;
  message?: string;
}

export interface ConversationPayload {
  currentQuestionId: number;
  userResponses: string[];
}
