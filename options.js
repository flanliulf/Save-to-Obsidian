// 加载保存的配置
chrome.storage.sync.get(
  {
    enableObsidian: false,
    vaultName: '',
    folderName: ''
  },
  (items) => {
    document.getElementById('enableObsidian').checked = items.enableObsidian;
    document.getElementById('vaultName').value = items.vaultName;
    document.getElementById('folderName').value = items.folderName;
  }
);

// 保存配置
document.getElementById('saveButton').addEventListener('click', () => {
  const config = {
    enableObsidian: document.getElementById('enableObsidian').checked,
    vaultName: document.getElementById('vaultName').value,
    folderName: document.getElementById('folderName').value
  };

  chrome.storage.sync.set(config, () => {
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2000);
  });
}); 