<script lang="ts">
    import type { Question as Topic } from "./questions.js";
    import { randomInt } from "./utils.js";

    /** Specify the topics to be randomized. */
    export let topics: Topic[];

    /** Current displayed topic. */
    let topic: Topic | undefined = undefined;

    /**
     * Retrieves a random topic from the provided lists `topics`.
     */
    function getRandomTopic(): Topic {
        return topics[randomInt(0, topics.length)];
    }

    /**
     * Click event handler for the button element.
     */
    function clickButton() {
        topic = getRandomTopic();
    }
</script>

<div class="random-topic">
    <h3 class="topic">Topic: {topic?.label}</h3>
</div>

<button on:click={clickButton}>Get another topic</button>

<style>
    .topic {
        font-weight: bold;
        margin-bottom: 1rem;
    }
</style>
