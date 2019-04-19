const app = getQueryVariable(location.href, 'app');
if (!app) {
  alert('无app字段');
}
const rewardList = data[app];
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
