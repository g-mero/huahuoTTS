import { createSignal } from 'solid-js'

export default function Home() {
  const [inputData, setInputData] = createSignal('')
  return (

    <div class="container mx-auto">
      <div class="flex flex-col">
        <label for="dialog">台词：</label>
        <textarea
          id="dialog"
          class="w-full p-2 border border-gray-300 rounded-lg"
          value={inputData()}
          onChange={(e) => {
            setInputData(e.currentTarget.value)
          }}
        />
      </div>
      <div class="flex flex-col">
        <label for="language">语言：</label>
        <select id="language" class="w-full p-2 border border-gray-300 rounded-lg">
          <option value="zh">中文</option>
          <option value="en">英文</option>
          <option value="jp">日文</option>
        </select>
      </div>

    </div>

  )
}
