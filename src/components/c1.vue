<!-- c1.vue -->
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const scrollUpRef = ref(null);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const maxScroll = window.innerHeight;
  const opacity = Math.max(0, 1 - scrollPosition / maxScroll * 2);
  if (scrollUpRef.value) {
    scrollUpRef.value.style.opacity = opacity;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
 <main>
    <div class="bg">
      <div class="text">
        <h1>花火TTS</h1>
        <p>基于GPT-SoVITS的在线配音网站</p>
      </div>
      <div class="scroll-up" ref="scrollUpRef">
        <i class="arrow-up"></i>
        <span>向上滑动查看功能</span>
      </div>
    </div>
  </main>
</template>

<style scoped>
.bg {
  background: url(../image/huahuo.jpg) no-repeat center top;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
}

.text {
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 20px;
  margin: auto;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
}

p {
  margin: 0;
  font-size: 1.5rem;
}

/* 滑动指示 */
.scroll-up {
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s infinite;
  color: white;
}

.arrow-up {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(135deg);
  margin-bottom: 5px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (min-width: 768px) {
    .scroll-up{
      display: none;
    }
}


</style>
