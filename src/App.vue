<!-- App.vue -->
<script setup>
import c1 from "./components/c1.vue"
import c2 from "./components/c2.vue"
</script>

<template>
    <div class="container">
        <c1 />
        <c2 />
        <div class="thanks">
            <p>感谢:</p>
            <ul>
                <li>花儿不哭</li>
            </ul>
            <a href="https://github.com/RVC-Boss/GPT-SoVITS" target="_blank" class="github-link">
                GPT-SoVITS
            </a>
        </div>
    </div>
</template>

<style>
body {
    background-color: #343541;
    color: white;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.container {
    display: flex;
    flex-direction: row;
    flex: 1;
    min-height: calc(100vh - 50px);
}

.thanks {
    margin: auto;
    text-align: center;

}

.thanks p {
    margin: 0;
    font-weight: bold;
}

.thanks ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.thanks li {
    margin: 5px 0;
}

.github-link {
    color: #1a73e8;
    text-decoration: none;
    margin-top: 20px;
    font-weight: bold;
}

.github-link:hover {
    text-decoration: underline;
}



@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
    .thanks {
    margin-top: 10px;
    text-align: center;
}

}
</style>
