<!-- c2.vue -->
<script setup>
import { ref } from 'vue';
import instance from '@/utils/request';

const dialog = ref('');
const language = ref('zh'); 
const audioUrl = ref(''); 
const loading = ref(false); 
const datalist = ref({
  "text": "先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。",
  "text_language": "zh"
});

const start = async () => {
  return instance.post('', datalist.value, {
    responseType: 'arraybuffer' 
  });
};

const getAudio = async () => {
  try {
    const response = await start();
    const audioBlob = new Blob([response.data], { type: 'audio/wav' });
    audioUrl.value = URL.createObjectURL(audioBlob);
  } catch (error) {
    console.error('获取音频失败:', error);
  } finally {
    loading.value = false;
  }
};

const startProcessing = () => {
  console.log('台词:', dialog.value);
  console.log('语言:', language.value);
  datalist.value = {
    "text": dialog.value,
    "text_language": language.value
  };
  loading.value = true;

  getAudio();
};
</script>

<template>
  <div class="c2-container">
    <div class="input-group">
      <label for="dialog">台词:</label>
      <textarea id="dialog" v-model="dialog" placeholder="输入台词" rows="6"></textarea>
    </div>
    <div class="input-group">
      <label for="language">语言:</label>
      <select id="language" v-model="language">
        <option value="zh">中文</option>
        <option value="en">英文</option>
        <option value="ja">日文</option>
      </select>
    </div>
    <button @click="startProcessing">开始</button>

    <div class="audio-container" v-if="audioUrl || loading">
      <p v-if="loading">加载中...</p>
      <audio v-else :src="audioUrl" controls></audio>
    </div>
  </div>
</template>

<style scoped>
.c2-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: white;
}

.input-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input, select, textarea {
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #1e90ff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #1c86ee;
}

.audio-container {
  margin-top: 20px;
}

audio {
  width: 100%;
}
</style>
