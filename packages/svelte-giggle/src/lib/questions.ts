export const questions: Question[] = [
    // Core concepts and functionalities
    { id: 1, label: "Reactive statements in Svelte and how they differ from traditional DOM manipulation." },
    { id: 2, label: "Different ways to handle user interactions in a Svelte component." },
    { id: 3, label: "Reusable component in Svelte and what are the benefits of doing so." },
    { id: 4, label: "Lifecycle hooks in Svelte." },
    { id: 5, label: "Data binding in Svelte." },
    { id: 11, label: "State management in Svelte applications." },
    { id: 12, label: "Server-side rendering (SSR) with Svelte and what are its advantages?" },
    { id: 13, label: "Explain how you would optimize the performance of a Svelte application, and discuss techniques like code splitting and lazy loading." },
    { id: 14, label: "Describe the testing strategies for Svelte components and applications, and mention some popular testing libraries." },
    { id: 15, label: "Discuss the benefits and potential challenges of using Svelte in comparison to other popular front-end frameworks." },
    { id: 17, label: "When you might use lifecycle hooks." },
    { id: 18, label: "Custom events in Svelte components and how to handle them effectively." },
    { id: 19, label: "Explain the concept of slots in Svelte and how they are used to create flexible and reusable components." },
    { id: 24, label: "Reactive stores and how they are used for state management in Svelte applications." },
    { id: 25, label: "Describe the advantages and considerations when using Svelte with TypeScript for development." },
    { id: 26, label: "How can you implement accessibility best practices in your Svelte components?" },
    { id: 29, label: "What are the main advantages and potential challenges of using Svelte compared to other front-end frameworks like React or Vue.js?" },
    { id: 30, label: "Describe the Svelte community and resources available for learning and getting help with the framework." },
    { id: 31, label: "Discuss your experience with Svelte projects and any challenges you've encountered." },
    { id: 32, label: "How do you stay updated on the latest advancements and best practices in the Svelte ecosystem? What about JavaScript trends?" },
    { id: 33, label: "What would be the use case of using `export const/function/class` inside a svelte component?" },
    { id: 34, label: "Complex data structures in Svelte." }
];

/** This interface defines the structure of a single interview question for the Svelte framework. */
export interface Question {
    /** The unique identifier for the question. */
    id: number;

    /** The text of the question itself. */
    label: string;
}