<script lang="ts">
    import type { Question as Topic } from "./questions.js";

    export let topics: Topic[];

    let topic: Topic | undefined = undefined;

    function getRandomTopic(): Topic {
        return topics[Math.floor(Math.random() * topics.length)];
    }

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
