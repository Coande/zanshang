const app = getQueryVariable(location.href, 'app');
if (!app) {
  alert('缺少app参数');
}

fetch(`js/data.json?t=${new Date().getTime()}`)
  .then(res => res.json())
  .then(res => {
    const rewardList = res[app];
    for (let i = 0; i < rewardList.length; i++) {
      const rewardObj = rewardList[i];
      $('tbody').append(`
        <tr>
          <td>${rewardObj.date}</td>
          <td>${rewardObj.name}</td>
          <td>${rewardObj.money}</td>
          <td>${rewardObj.word}</td>
        </tr>`
      );
    }
  });
