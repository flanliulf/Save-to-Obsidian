let cardContainer = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "showCard") {
    showCard(getSelectedContent());
  }
});

// 获取选中的内容，包括文字和图片
function getSelectedContent() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const fragment = range.cloneContents();
  const container = document.createElement('div');
  container.appendChild(fragment);
  
  // 处理图片，确保使用完整的URL
  const images = container.getElementsByTagName('img');
  for (let img of images) {
    if (img.src) {
      img.src = img.src; // 确保使用完整URL
    }
  }
  
  return container.innerHTML;
}

function showCard(selectedContent) {
  if (cardContainer) {
    document.body.removeChild(cardContainer);
    cardContainer = null;  // 如果已存在卡片，先移除并重置
  }

  cardContainer = document.createElement('div');
  cardContainer.className = 'obsidian-card-container';
  
  const card = `
    <div class="obsidian-card">
      <div class="card-title">${document.title}</div>
      <div class="card-content">${selectedContent}</div>
      <div class="card-thoughts">
        <textarea placeholder="输入你的想法..."></textarea>
      </div>
      <div class="card-footer">
        <select>
          <option value="default">默认文件夹</option>
          <option value="notes">笔记</option>
          <option value="diary">日记</option>
        </select>
        <button class="save-button">保存</button>
      </div>
    </div>
  `;
  
  cardContainer.innerHTML = card;
  document.body.appendChild(cardContainer);

  // 点击卡片外部关闭卡片
  cardContainer.addEventListener('click', (e) => {
    if (e.target === cardContainer) {
      document.body.removeChild(cardContainer);
      cardContainer = null;  // 重置 cardContainer 变量
    }
  });

  // 阻止滚轮事件穿透
  cardContainer.addEventListener('wheel', (e) => {
    e.stopPropagation();
  });
} 